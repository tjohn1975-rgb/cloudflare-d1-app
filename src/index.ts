import { Hono } from 'hono'
import { BASE_INDEX_HTML } from './html'

type Bindings = {
  DB: D1Database
}

interface StudentRow {
  id: number
  class_id: string
  seat_no: string
  name: string
  password: string
  status: string
  updated_at: string
}

interface UnitRow {
  unit_id: string
  subject: string
  unit_name: string
  max_score: number
  is_open: number
  created_at: string
}

interface ScoreRow {
  id: number
  record_id: string
  submitted_at: string
  class_id: string
  seat_no: string
  student_name: string
  unit_id: string
  subject: string
  unit_name: string
  score: number
  note: string
}

const app = new Hono<{ Bindings: Bindings }>()

// ============================================================================
// 系統設定輔助函式
// ============================================================================

async function getSetting(db: D1Database, key: string, defaultVal: string): Promise<string> {
  try {
    const row = await db.prepare('SELECT value FROM system_settings WHERE key = ?')
      .bind(key).first<{ value: string }>()
    return (row && typeof row.value === 'string') ? row.value : defaultVal
  } catch (e) {
    return defaultVal
  }
}

async function setSetting(db: D1Database, key: string, value: string): Promise<void> {
  await db.prepare('INSERT OR REPLACE INTO system_settings (key, value) VALUES (?, ?)')
    .bind(key, value).run()
}

// ============================================================================
// 後台資料運算核心 (學生名冊、單元設定、成績矩陣、統計指標)
// ============================================================================

async function computeTeacherDashboard(db: D1Database) {
  // 1. 學生名冊
  const { results: studentsRes } = await db.prepare(`
    SELECT * FROM students 
    ORDER BY CAST(seat_no AS INTEGER) ASC, seat_no ASC
  `).all<StudentRow>()
  const students = (studentsRes || []).map((s) => ({
    classId: s.class_id,
    seatNo: s.seat_no,
    name: s.name,
    password: s.password,
    status: s.status,
    updatedAt: s.updated_at
  }))

  // 2. 評量單元
  const { results: unitsRes } = await db.prepare(`
    SELECT * FROM units 
    ORDER BY created_at ASC
  `).all<UnitRow>()
  const units = (unitsRes || []).map((u) => ({
    unitId: u.unit_id,
    subject: u.subject,
    unitName: u.unit_name,
    maxScore: u.max_score,
    isOpen: u.is_open === 1,
    createdAt: u.created_at
  }))

  // 3. 成績記錄
  const { results: scoresRes } = await db.prepare(`
    SELECT * FROM scores 
    ORDER BY CAST(seat_no AS INTEGER) ASC, submitted_at DESC
  `).all<ScoreRow>()
  const allScores = scoresRes || []

  // 建立成績矩陣 (以 classId_seatNo 為 key)
  const scoreMatrix: Record<string, any> = {}
  students.forEach((stu) => {
    const key = `${stu.classId}_${stu.seatNo}`
    scoreMatrix[key] = {
      classId: stu.classId,
      seatNo: stu.seatNo,
      name: stu.name,
      scores: {},
      submittedCount: 0,
      totalScore: 0,
      averageScore: 0
    }
  })

  let globalScoreSum = 0
  let globalScoreCount = 0
  let maxScore = 0
  let minScore = 999

  // 統計單元指標
  const unitStatsMap: Record<string, { total: number; sum: number; passCount: number }> = {}
  units.forEach((u) => {
    unitStatsMap[u.unitId] = { total: 0, sum: 0, passCount: 0 }
  })

  allScores.forEach((r) => {
    const key = `${r.class_id}_${r.seat_no}`
    if (scoreMatrix[key]) {
      scoreMatrix[key].scores[r.unit_id] = {
        score: r.score,
        time: r.submitted_at,
        note: r.note || ''
      }
      scoreMatrix[key].submittedCount++
      scoreMatrix[key].totalScore += r.score
    }

    globalScoreSum += r.score
    globalScoreCount++
    if (r.score > maxScore) maxScore = r.score
    if (r.score < minScore) minScore = r.score

    if (unitStatsMap[r.unit_id]) {
      unitStatsMap[r.unit_id].total++
      unitStatsMap[r.unit_id].sum += r.score
      if (r.score >= 60) unitStatsMap[r.unit_id].passCount++
    }
  })

  // 計算每位學生個人平均
  let studentsWithSubmissions = 0
  Object.values(scoreMatrix).forEach((item: any) => {
    if (item.submittedCount > 0) {
      item.averageScore = Math.round((item.totalScore / item.submittedCount) * 10) / 10
      studentsWithSubmissions++
    }
  })

  // 單元統計陣列
  const unitStats = units.map((u) => {
    const stat = unitStatsMap[u.unitId] || { total: 0, sum: 0, passCount: 0 }
    return {
      unitId: u.unitId,
      subject: u.subject,
      unitName: u.unitName,
      submittedCount: stat.total,
      averageScore: stat.total > 0 ? Math.round((stat.sum / stat.total) * 10) / 10 : 0,
      passRate: stat.total > 0 ? Math.round((stat.passCount / stat.total) * 100) : 0
    }
  })

  // 近期 50 筆紀錄
  const recentRecords = allScores.slice(0, 50).map((r) => ({
    id: r.id,
    recordId: r.record_id,
    time: r.submitted_at,
    classId: r.class_id,
    seatNo: r.seat_no,
    name: r.student_name,
    unitId: r.unit_id,
    subject: r.subject,
    unitName: r.unit_name,
    score: r.score,
    note: r.note
  }))

  const totalStudents = students.length
  return {
    success: true,
    students,
    units,
    scoreMatrix,
    statistics: {
      totalStudents,
      submittedCount: studentsWithSubmissions,
      averageScore: globalScoreCount > 0 ? Math.round((globalScoreSum / globalScoreCount) * 10) / 10 : 0,
      highestScore: globalScoreCount > 0 ? maxScore : 0,
      lowestScore: globalScoreCount > 0 ? minScore : 0,
      unitStats
    },
    recentRecords,
    spreadsheetUrl: 'https://dash.cloudflare.com/'
  }
}

// ============================================================================
// RPC API 路由器 (與 Index.html 中的 google.script.run 100% 透明對齊)
// ============================================================================

app.post('/api/rpc/:method', async (c) => {
  const method = c.req.param('method')
  const body = await c.req.json().catch(() => ({ args: [] }))
  const args = Array.isArray(body.args) ? body.args : []
  const db = c.env.DB

  try {
    switch (method) {
      // 1. 取得公開座號列表
      case 'getSeatList': {
        const { results } = await db.prepare(`
          SELECT seat_no FROM students 
          WHERE status = '正常' 
          ORDER BY CAST(seat_no AS INTEGER) ASC, seat_no ASC
        `).all<{ seat_no: string }>()

        const seats = (results || []).map((s) => {
          const num = Number(s.seat_no)
          const label = (!isNaN(num) && num < 10 ? '0' + num : s.seat_no) + ' 號'
          return { seatNo: s.seat_no, label }
        })
        return c.json({ result: { success: true, seats } })
      }

      // 2. 學生登入驗證
      case 'studentLogin': {
        const seatNo = String(args[0] || '').replace(/\.0$/, '').trim()
        const password = String(args[1] || '').replace(/\.0$/, '').trim()

        if (!seatNo) {
          return c.json({ result: { success: false, message: '請選擇或輸入您的座號！' } })
        }
        if (!password) {
          return c.json({ result: { success: false, message: '請輸入您的個人密碼！' } })
        }

        const student = await db.prepare(`
          SELECT * FROM students 
          WHERE seat_no = ? OR CAST(seat_no AS INTEGER) = CAST(? AS INTEGER)
          LIMIT 1
        `).bind(seatNo, seatNo).first<StudentRow>()

        if (!student) {
          return c.json({ result: { success: false, message: '查無此座號學生，請向任課老師確認！' } })
        }

        const studentPwd = String(student.password || '').replace(/\.0$/, '').trim()
        if (studentPwd !== password) {
          return c.json({ result: { success: false, message: '個人登入密碼不正確，請重新確認！' } })
        }

        // 讀取目前開放填寫的單元
        const { results: unitsRes } = await db.prepare(`
          SELECT * FROM units 
          WHERE is_open = 1 
          ORDER BY created_at ASC
        `).all<UnitRow>()
        const openUnits = (unitsRes || []).map((u) => ({
          unitId: u.unit_id,
          subject: u.subject,
          unitName: u.unit_name,
          maxScore: u.max_score,
          isOpen: true,
          createdAt: u.created_at
        }))

        // 讀取該學生已填報的成績紀錄
        const { results: scoresRes } = await db.prepare(`
          SELECT * FROM scores 
          WHERE class_id = ? AND seat_no = ?
        `).bind(student.class_id, student.seat_no).all<ScoreRow>()

        const submittedScores: Record<string, { score: number; time: string; note: string }> = {}
        ;(scoresRes || []).forEach((r) => {
          submittedScores[r.unit_id] = {
            score: r.score,
            time: String(r.submitted_at || ''),
            note: String(r.note || '')
          }
        })

        return c.json({
          result: {
            success: true,
            student: {
              classId: student.class_id,
              seatNo: student.seat_no,
              name: student.name
            },
            openUnits,
            submittedScores
          }
        })
      }

      // 3. 學生儲存／填報成績
      case 'saveStudentScores': {
        const classId = String(args[0] || '402').trim()
        const seatNo = String(args[1] || '').trim()
        const name = String(args[2] || '').trim()
        const scoreRecords = Array.isArray(args[3]) ? args[3] : []

        if (!seatNo || scoreRecords.length === 0) {
          return c.json({ result: { success: false, message: '填報參數不完整！' } })
        }

        const nowTaipei = new Date(Date.now() + 8 * 3600 * 1000)
          .toISOString()
          .replace('T', ' ')
          .substring(0, 19)

        const statements = []
        for (const item of scoreRecords) {
          const uId = String(item.unitId || '').trim()
          const scoreVal = Number(item.score)
          if (!uId || isNaN(scoreVal)) continue

          const unitInfo = await db.prepare('SELECT subject, unit_name FROM units WHERE unit_id = ?')
            .bind(uId).first<{ subject: string; unit_name: string }>()

          const subject = unitInfo ? unitInfo.subject : '一般'
          const unitName = unitInfo ? unitInfo.unit_name : uId
          const recId = `REC_${Date.now()}_${Math.floor(Math.random() * 1000)}`
          const note = String(item.note || '學生自填').trim()

          statements.push(
            db.prepare(`
              INSERT INTO scores (
                record_id, submitted_at, class_id, seat_no, student_name,
                unit_id, subject, unit_name, score, note
              ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
              ON CONFLICT(class_id, seat_no, unit_id) DO UPDATE SET
                score = excluded.score,
                note = excluded.note,
                submitted_at = excluded.submitted_at,
                student_name = excluded.student_name
            `).bind(recId, nowTaipei, classId, seatNo, name, uId, subject, unitName, scoreVal, note)
          )
        }

        if (statements.length > 0) {
          await db.batch(statements)
        }

        return c.json({
          result: {
            success: true,
            message: `已成功儲存 ${statements.length} 筆成績！`,
            count: statements.length
          }
        })
      }

      // 4. 教師管理後台登入
      case 'teacherLogin': {
        const password = String(args[0] || '').trim()
        const currentPass = await getSetting(db, 'TEACHER_PASSWORD', 'admin')

        if (password === currentPass) {
          return c.json({ result: { success: true, message: '管理身分驗證成功' } })
        }
        return c.json({ result: { success: false, message: '管理密碼不正確！' } })
      }

      // 5. 修改教師管理密碼
      case 'changeTeacherPassword': {
        const oldPass = String(args[0] || '').trim()
        const newPass = String(args[1] || '').trim()
        const currentPass = await getSetting(db, 'TEACHER_PASSWORD', 'admin')

        if (oldPass !== currentPass) {
          return c.json({ result: { success: false, message: '原密碼不正確！' } })
        }
        if (!newPass || newPass.length < 3) {
          return c.json({ result: { success: false, message: '新密碼長度至少需 3 碼！' } })
        }

        await setSetting(db, 'TEACHER_PASSWORD', newPass)
        return c.json({ result: { success: true, message: '管理密碼已成功更新！' } })
      }

      // 6. 取得教師後台儀表板完整數據
      case 'getTeacherDashboardData': {
        const data = await computeTeacherDashboard(db)
        return c.json({ result: data })
      }

      // 7. 單元管理 (新增、切換開關、編輯、刪除)
      case 'manageUnit': {
        const action = String(args[0] || '')
        const unitData = args[1] || {}

        if (action === 'add') {
          const uId = String(unitData.unitId || `unit_${Date.now()}`).trim()
          const subject = String(unitData.subject || '一般').trim()
          const unitName = String(unitData.unitName || '').trim()
          const maxScore = Number(unitData.maxScore) || 100
          const isOpen = unitData.isOpen ? 1 : 0

          if (!unitName) return c.json({ result: { success: false, message: '單元名稱為必填項目！' } })

          await db.prepare(`
            INSERT INTO units (unit_id, subject, unit_name, max_score, is_open)
            VALUES (?, ?, ?, ?, ?)
          `).bind(uId, subject, unitName, maxScore, isOpen).run()

          return c.json({ result: { success: true, message: `已成功新增評量單元「${unitName}」！` } })
        } else if (action === 'toggle') {
          const uId = String(unitData.unitId || '').trim()
          const isOpen = unitData.isOpen ? 1 : 0

          await db.prepare('UPDATE units SET is_open = ? WHERE unit_id = ?')
            .bind(isOpen, uId).run()

          return c.json({ result: { success: true, message: `單元開放狀態已更新為：${isOpen ? '開放填寫' : '已關閉'}！` } })
        } else if (action === 'update') {
          const uId = String(unitData.unitId || '').trim()
          const subject = String(unitData.subject || '一般').trim()
          const unitName = String(unitData.unitName || '').trim()
          const maxScore = Number(unitData.maxScore) || 100
          const isOpen = unitData.isOpen ? 1 : 0

          if (!unitName) return c.json({ result: { success: false, message: '單元名稱不可為空白！' } })

          await db.prepare(`
            UPDATE units SET subject = ?, unit_name = ?, max_score = ?, is_open = ?
            WHERE unit_id = ?
          `).bind(subject, unitName, maxScore, isOpen, uId).run()

          // 同步更新成績表中該單元名稱
          await db.prepare('UPDATE scores SET subject = ?, unit_name = ? WHERE unit_id = ?')
            .bind(subject, unitName, uId).run()

          return c.json({ result: { success: true, message: '單元設定已成功更新！' } })
        } else if (action === 'delete') {
          const uId = String(unitData.unitId || '').trim()
          await db.prepare('DELETE FROM units WHERE unit_id = ?').bind(uId).run()
          await db.prepare('DELETE FROM scores WHERE unit_id = ?').bind(uId).run()
          return c.json({ result: { success: true, message: '已成功刪除該評量單元與相關成績記錄！' } })
        }

        return c.json({ result: { success: false, message: '未知的單元管理操作！' } })
      }

      // 8. 批次匯入學生名冊
      case 'batchImportStudents': {
        const rawText = String(args[0] || '').trim()
        const defaultClass = String(args[1] || '402').trim()
        const defaultPwdType = String(args[2] || 'seat').trim()

        if (!rawText) return c.json({ result: { success: false, message: '請提供要匯入的名冊內容！' } })

        const lines = rawText.split(/\r?\n/)
        let count = 0
        const statements = []

        for (const line of lines) {
          const parts = line.split(/[,\t ]+/).map((p) => p.trim()).filter(Boolean)
          if (parts.length < 2) continue

          const seatNo = parts[0].replace(/\.0$/, '')
          const name = parts[1]
          let pwd = parts[2] ? parts[2].replace(/\.0$/, '') : ''

          if (!pwd) {
            if (defaultPwdType === 'seat') pwd = seatNo
            else if (defaultPwdType === 'class_seat') pwd = defaultClass + seatNo
            else pwd = seatNo
          }

          statements.push(
            db.prepare(`
              INSERT INTO students (class_id, seat_no, name, password, status)
              VALUES (?, ?, ?, ?, '正常')
              ON CONFLICT(class_id, seat_no) DO UPDATE SET
                name = excluded.name,
                password = excluded.password,
                status = '正常',
                updated_at = CURRENT_TIMESTAMP
            `).bind(defaultClass, seatNo, name, pwd)
          )
          count++
        }

        if (statements.length > 0) {
          await db.batch(statements)
        }

        return c.json({ result: { success: true, count, message: `已成功匯入／更新 ${count} 位學生資料！` } })
      }

      // 9. 批次刪除學生
      case 'batchDeleteStudents': {
        const studentList = Array.isArray(args[0]) ? args[0] : []
        if (studentList.length === 0) {
          return c.json({ result: { success: false, message: '未指定要刪除的學生清單！' } })
        }

        const statements = []
        for (const stu of studentList) {
          const cId = String(stu.classId || '402').trim()
          const sNo = String(stu.seatNo || '').trim()
          statements.push(db.prepare('DELETE FROM students WHERE class_id = ? AND seat_no = ?').bind(cId, sNo))
          statements.push(db.prepare('DELETE FROM scores WHERE class_id = ? AND seat_no = ?').bind(cId, sNo))
        }

        await db.batch(statements)
        return c.json({ result: { success: true, count: studentList.length, message: `已成功批次刪除 ${studentList.length} 位學生！` } })
      }

      // 10. 批次修改密碼
      case 'batchUpdateStudentPasswords': {
        const studentList = Array.isArray(args[0]) ? args[0] : []
        const pwdType = String(args[1] || 'seat').trim()
        const customPwd = String(args[2] || '').trim()

        if (studentList.length === 0) {
          return c.json({ result: { success: false, message: '未指定要修改密碼的學生清單！' } })
        }

        const statements = []
        for (const stu of studentList) {
          const cId = String(stu.classId || '402').trim()
          const sNo = String(stu.seatNo || '').trim()
          let newPwd = sNo
          if (pwdType === 'class_seat') newPwd = cId + sNo
          else if (pwdType === 'custom') newPwd = customPwd || sNo

          statements.push(
            db.prepare('UPDATE students SET password = ?, updated_at = CURRENT_TIMESTAMP WHERE class_id = ? AND seat_no = ?')
              .bind(newPwd, cId, sNo)
          )
        }

        await db.batch(statements)
        return c.json({ result: { success: true, count: studentList.length, message: `已成功更新 ${studentList.length} 位學生的密碼！` } })
      }

      // 11. 刪除單一學生
      case 'deleteStudentRecord': {
        const classId = String(args[0] || '402').trim()
        const seatNo = String(args[1] || '').trim()
        await db.prepare('DELETE FROM students WHERE class_id = ? AND seat_no = ?').bind(classId, seatNo).run()
        await db.prepare('DELETE FROM scores WHERE class_id = ? AND seat_no = ?').bind(classId, seatNo).run()
        return c.json({ result: { success: true, message: '已刪除該學生資料！' } })
      }

      // 12. 編輯單一學生資料
      case 'editSingleStudent': {
        const oldClassId = String(args[0] || '402').trim()
        const oldSeatNo = String(args[1] || '').trim()
        const newClassId = String(args[2] || oldClassId).trim()
        const newSeatNo = String(args[3] || oldSeatNo).trim()
        const newName = String(args[4] || '').trim()
        const newPassword = String(args[5] || '').trim()

        if (!newName || !newSeatNo) {
          return c.json({ result: { success: false, message: '座號與姓名為必填！' } })
        }

        await db.prepare(`
          UPDATE students SET class_id = ?, seat_no = ?, name = ?, password = ?, updated_at = CURRENT_TIMESTAMP
          WHERE class_id = ? AND seat_no = ?
        `).bind(newClassId, newSeatNo, newName, newPassword, oldClassId, oldSeatNo).run()

        // 同步更新成績記錄
        await db.prepare(`
          UPDATE scores SET class_id = ?, seat_no = ?, student_name = ?
          WHERE class_id = ? AND seat_no = ?
        `).bind(newClassId, newSeatNo, newName, oldClassId, oldSeatNo).run()

        return c.json({ result: { success: true, message: '學生資料修改成功！' } })
      }

      // 13. 教師手動修改學生成績
      case 'updateStudentScoreByTeacher': {
        const classId = String(args[0] || '402').trim()
        const seatNo = String(args[1] || '').trim()
        const name = String(args[2] || '').trim()
        const unitId = String(args[3] || '').trim()
        const scoreVal = Number(args[4])
        const note = String(args[5] || '教師手動登記').trim()

        if (isNaN(scoreVal)) {
          return c.json({ result: { success: false, message: '請輸入有效的分數數值！' } })
        }

        const unitInfo = await db.prepare('SELECT subject, unit_name FROM units WHERE unit_id = ?')
          .bind(unitId).first<{ subject: string; unit_name: string }>()

        const subject = unitInfo ? unitInfo.subject : '一般'
        const unitName = unitInfo ? unitInfo.unit_name : unitId
        const recId = `REC_${Date.now()}_${Math.floor(Math.random() * 1000)}`
        const nowTaipei = new Date(Date.now() + 8 * 3600 * 1000)
          .toISOString()
          .replace('T', ' ')
          .substring(0, 19)

        await db.prepare(`
          INSERT INTO scores (
            record_id, submitted_at, class_id, seat_no, student_name,
            unit_id, subject, unit_name, score, note
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(class_id, seat_no, unit_id) DO UPDATE SET
            score = excluded.score,
            note = excluded.note,
            submitted_at = excluded.submitted_at,
            student_name = excluded.student_name
        `).bind(recId, nowTaipei, classId, seatNo, name, unitId, subject, unitName, scoreVal, note).run()

        return c.json({ result: { success: true, message: '學生成績已成功更新！' } })
      }

      case 'getSpreadsheetUrl': {
        return c.json({ result: 'https://dash.cloudflare.com/' })
      }

      default:
        return c.json({ isError: true, error: `未支援的 RPC 方法: ${method}` }, 400)
    }
  } catch (err: any) {
    console.error(`RPC Error [${method}]:`, err)
    return c.json({ isError: true, error: err.message || String(err) }, 500)
  }
})

// ============================================================================
// RESTful 報表端點
// ============================================================================

app.get('/api/scores', async (c) => {
  const data = await computeTeacherDashboard(c.env.DB)
  return c.json(data)
})

app.get('/api/export/csv', async (c) => {
  const data = await computeTeacherDashboard(c.env.DB)
  const students = data.students || []
  const units = data.units || []
  const matrix = data.scoreMatrix || {}

  let csv = '\uFEFF班級,座號,姓名'
  units.forEach((u: any) => {
    csv += `,"${u.subject} - ${u.unitName}"`
  })
  csv += ',填報項目數,個人總平均\n'

  students.forEach((stu: any) => {
    const key = `${stu.classId}_${stu.seatNo}`
    const item = matrix[key] || { scores: {}, submittedCount: 0, averageScore: 0 }
    csv += `"${stu.classId}","${stu.seatNo}","${stu.name}"`
    units.forEach((u: any) => {
      const s = item.scores[u.unitId]
      csv += `,${s ? s.score : ''}`
    })
    csv += `,${item.submittedCount},${item.averageScore}\n`
  })

  c.header('Content-Type', 'text/csv; charset=utf-8')
  c.header('Content-Disposition', 'attachment; filename="402班_學生成績總矩陣表.csv"')
  return c.body(csv)
})

app.get('/api/health', (c) => {
  return c.json({
    status: 'ok',
    app: 'student-score-platform',
    version: 'v1.0.0-cloudflare-d1',
    timestamp: new Date().toISOString()
  })
})

// ============================================================================
// SSR 渲染首頁 (注入預載資料，0.001 秒首頁秒開)
// ============================================================================

app.get('/', async (c) => {
  try {
    const dashData = await computeTeacherDashboard(c.env.DB)
    const initialJson = JSON.stringify(dashData)
    const html = BASE_INDEX_HTML.replace('/*__SERVER_DATA__*/ null', initialJson)
    return c.html(html)
  } catch (err: any) {
    console.error('SSR Error:', err)
    return c.html(BASE_INDEX_HTML)
  }
})

export default app
