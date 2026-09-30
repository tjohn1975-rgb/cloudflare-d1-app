import os
import json

def generate_migration_sql():
    dump_path = r"C:\Users\user\Desktop\agy\gas_student_score_platform\ss_dump.json"
    with open(dump_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    students_raw = data['content'].get('【學生名冊】', [])[1:]
    units_raw = data['content'].get('【評量單元設定】', [])[1:]
    scores_raw = data['content'].get('【成績資料庫】', [])[1:]

    lines = []
    lines.append("-- ============================================================================")
    lines.append("-- 學生各科成績自填與班級管理平台 Cloudflare D1 資料庫遷移")
    lines.append("-- 資料庫：student-score-platform-db (322beec7-c217-4d17-b466-72d380d25602)")
    lines.append("-- ============================================================================\n")

    lines.append("-- 1. 學生名冊資料表")
    lines.append("""CREATE TABLE IF NOT EXISTS students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  class_id TEXT NOT NULL DEFAULT '402',
  seat_no TEXT NOT NULL,
  name TEXT NOT NULL,
  password TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT '正常',
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(class_id, seat_no)
);
CREATE INDEX IF NOT EXISTS idx_students_seat ON students(seat_no);
""")

    lines.append("-- 2. 評量單元設定資料表")
    lines.append("""CREATE TABLE IF NOT EXISTS units (
  unit_id TEXT PRIMARY KEY,
  subject TEXT NOT NULL,
  unit_name TEXT NOT NULL,
  max_score INTEGER NOT NULL DEFAULT 100,
  is_open INTEGER NOT NULL DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
""")

    lines.append("-- 3. 成績資料庫資料表")
    lines.append("""CREATE TABLE IF NOT EXISTS scores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  record_id TEXT NOT NULL,
  submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  class_id TEXT NOT NULL,
  seat_no TEXT NOT NULL,
  student_name TEXT NOT NULL,
  unit_id TEXT NOT NULL,
  subject TEXT NOT NULL,
  unit_name TEXT NOT NULL,
  score REAL NOT NULL,
  note TEXT DEFAULT '',
  UNIQUE(class_id, seat_no, unit_id)
);
CREATE INDEX IF NOT EXISTS idx_scores_student ON scores(class_id, seat_no);
CREATE INDEX IF NOT EXISTS idx_scores_unit ON scores(unit_id);
""")

    lines.append("-- 4. 系統全域設定資料表")
    lines.append("""CREATE TABLE IF NOT EXISTS system_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
INSERT OR IGNORE INTO system_settings (key, value) VALUES ('TEACHER_PASSWORD', 'admin');
INSERT OR IGNORE INTO system_settings (key, value) VALUES ('DEFAULT_CLASS', '402');
""")

    # 種子資料：學生名冊
    lines.append("-- 5. 匯入 402 班學生名冊種子資料")
    for row in students_raw:
        if not row or not row[0] or not row[1] or not row[2]:
            continue
        c_id = str(row[0]).replace(".0", "").strip() or "402"
        s_no = str(row[1]).replace(".0", "").strip()
        name = str(row[2]).strip()
        pwd = str(row[3]).replace(".0", "").strip() or s_no
        status = str(row[4]).strip() if len(row) > 4 and row[4] else "正常"
        if not s_no or not name:
            continue
        lines.append(f"INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('{c_id}', '{s_no}', '{name}', '{pwd}', '{status}');")

    # 種子資料：評量單元
    lines.append("\n-- 6. 匯入評量單元設定種子資料")
    for row in units_raw:
        if not row or not row[0]:
            continue
        u_id = str(row[0]).strip()
        subj = str(row[1]).strip() if len(row) > 1 else "一般"
        u_name = str(row[2]).strip() if len(row) > 2 else u_id
        max_s = int(float(row[3])) if len(row) > 3 and str(row[3]).strip() else 100
        is_o = 1 if len(row) > 4 and str(row[4]).strip() in ['1', 'TRUE', 'true'] else 0
        lines.append(f"INSERT OR REPLACE INTO units (unit_id, subject, unit_name, max_score, is_open) VALUES ('{u_id}', '{subj}', '{u_name}', {max_s}, {is_o});")

    # 種子資料：現存成績紀錄
    lines.append("\n-- 7. 匯入已登錄之成績紀錄種子資料")
    for row in scores_raw:
        if not row or not row[0] or not row[3]:
            continue
        rec_id = str(row[0]).strip()
        c_id = str(row[2]).replace(".0", "").strip() or "402"
        s_no = str(row[3]).replace(".0", "").strip()
        name = str(row[4]).strip() if len(row) > 4 else ""
        u_id = str(row[5]).strip() if len(row) > 5 else ""
        subj = str(row[6]).strip() if len(row) > 6 else ""
        u_name = str(row[7]).strip() if len(row) > 7 else ""
        sc = float(row[8]) if len(row) > 8 and str(row[8]).strip() else 0.0
        note = str(row[9]).strip() if len(row) > 9 else ""
        if not s_no or not u_id:
            continue
        lines.append(f"INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('{rec_id}', '{c_id}', '{s_no}', '{name}', '{u_id}', '{subj}', '{u_name}', {sc}, '{note}');")

    sql_content = "\n".join(lines)
    dest_path = r"C:\Users\user\Desktop\agy\cloudflare-d1-app\migrations\0001_student_score_platform.sql"
    with open(dest_path, "w", encoding="utf-8") as f:
        f.write(sql_content)
    print(f"Generated {dest_path} with {len(lines)} lines.")

if __name__ == "__main__":
    generate_migration_sql()
