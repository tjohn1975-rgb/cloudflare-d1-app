-- ============================================================================
-- 學生各科成績自填與班級管理平台 Cloudflare D1 資料庫遷移
-- 資料庫：student-score-platform-db (322beec7-c217-4d17-b466-72d380d25602)
-- ============================================================================

-- 1. 學生名冊資料表
CREATE TABLE IF NOT EXISTS students (
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

-- 2. 評量單元設定資料表
CREATE TABLE IF NOT EXISTS units (
  unit_id TEXT PRIMARY KEY,
  subject TEXT NOT NULL,
  unit_name TEXT NOT NULL,
  max_score INTEGER NOT NULL DEFAULT 100,
  is_open INTEGER NOT NULL DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 3. 成績資料庫資料表
CREATE TABLE IF NOT EXISTS scores (
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

-- 4. 系統全域設定資料表
CREATE TABLE IF NOT EXISTS system_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
INSERT OR IGNORE INTO system_settings (key, value) VALUES ('TEACHER_PASSWORD', 'admin');
INSERT OR IGNORE INTO system_settings (key, value) VALUES ('DEFAULT_CLASS', '402');

-- 5. 匯入 402 班學生名冊種子資料
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '1', '潘建佑', '112015', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '2', '吳承浩', '112058', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '3', '蔡松錡', '112038', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '4', '賴宥翰', '112065', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '5', '李承軒', '112030', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '6', '陳言豐', '112071', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '7', '林辰叡', '112089', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '8', '羅章宏', '112114', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '9', '林詰宸', '112118', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '10', '李瑋頡', '112193', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '11', '周品閱', '112139', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '12', '鄭丞希', '112146', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '13', '魏士晟', '112164', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '14', '羅章宥', '112216', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '21', '薛詩螢', '112129', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '22', '陳愷凡', '112078', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '23', '仲芯羽', '112158', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '24', '鄭宇涵', '112231', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '25', '陳姵蓁', '112159', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '26', '陳禹伃', '112051', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '27', '林庭羽', '112106', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '28', '張容嫣', '112184', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '29', '楊如瑛', '112108', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '30', '李宛芮', '112213', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '31', '楊凱晴', '112027', '正常');
INSERT OR REPLACE INTO students (class_id, seat_no, name, password, status) VALUES ('402', '32', '李芷岑', '112215', '正常');

-- 6. 匯入評量單元設定種子資料
INSERT OR REPLACE INTO units (unit_id, subject, unit_name, max_score, is_open) VALUES ('unit_mandarin_1', '國語', '第一課 聽考', 100, 1);
INSERT OR REPLACE INTO units (unit_id, subject, unit_name, max_score, is_open) VALUES ('unit_math_1', '數學', '第一課 習作', 100, 0);
INSERT OR REPLACE INTO units (unit_id, subject, unit_name, max_score, is_open) VALUES ('unit_1788848638374', '國語', '第一課習作', 100, 1);

-- 7. 匯入已登錄之成績紀錄種子資料
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852330893_621', '402', '26', '陳禹伃', 'unit_mandarin_1', '國語', '第一課 聽考', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852330893_684', '402', '26', '陳禹伃', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852742450_991', '402', '1', '潘建佑', 'unit_mandarin_1', '國語', '第一課 聽考', 96.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852742450_14', '402', '1', '潘建佑', 'unit_1788848638374', '國語', '第一課習作', 95.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852749073_478', '402', '2', '吳承浩', 'unit_mandarin_1', '國語', '第一課 聽考', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852749073_662', '402', '2', '吳承浩', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852749379_932', '402', '4', '賴宥翰', 'unit_mandarin_1', '國語', '第一課 聽考', 99.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852749379_747', '402', '4', '賴宥翰', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852754754_344', '402', '22', '陳愷凡', 'unit_mandarin_1', '國語', '第一課 聽考', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852754754_835', '402', '22', '陳愷凡', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852755525_614', '402', '7', '林辰叡', 'unit_mandarin_1', '國語', '第一課 聽考', 93.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852755525_251', '402', '7', '林辰叡', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852756446_186', '402', '21', '薛詩螢', 'unit_mandarin_1', '國語', '第一課 聽考', 61.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852756446_984', '402', '21', '薛詩螢', 'unit_1788848638374', '國語', '第一課習作', 95.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852756967_356', '402', '32', '李芷岑', 'unit_mandarin_1', '國語', '第一課 聽考', 99.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852756967_959', '402', '32', '李芷岑', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852757571_772', '402', '13', '魏士晟', 'unit_mandarin_1', '國語', '第一課 聽考', 97.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852757571_823', '402', '13', '魏士晟', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852761423_113', '402', '12', '鄭丞希', 'unit_mandarin_1', '國語', '第一課 聽考', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852761423_716', '402', '12', '鄭丞希', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852764054_11', '402', '23', '仲芯羽', 'unit_mandarin_1', '國語', '第一課 聽考', 99.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852764054_997', '402', '23', '仲芯羽', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852764296_841', '402', '10', '李瑋頡', 'unit_mandarin_1', '國語', '第一課 聽考', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852764297_261', '402', '10', '李瑋頡', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852764486_25', '402', '5', '李承軒', 'unit_mandarin_1', '國語', '第一課 聽考', 77.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852764486_315', '402', '5', '李承軒', 'unit_1788848638374', '國語', '第一課習作', 95.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852769324_411', '402', '9', '林詰宸', 'unit_mandarin_1', '國語', '第一課 聽考', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852769324_394', '402', '9', '林詰宸', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852777953_447', '402', '14', '羅章宥', 'unit_mandarin_1', '國語', '第一課 聽考', 95.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852777953_371', '402', '14', '羅章宥', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852780436_517', '402', '27', '林庭羽', 'unit_mandarin_1', '國語', '第一課 聽考', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852780436_610', '402', '27', '林庭羽', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852782234_930', '402', '31', '楊凱晴', 'unit_mandarin_1', '國語', '第一課 聽考', 99.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852782234_152', '402', '31', '楊凱晴', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852793196_432', '402', '28', '張容嫣', 'unit_mandarin_1', '國語', '第一課 聽考', 64.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852793196_827', '402', '28', '張容嫣', 'unit_1788848638374', '國語', '第一課習作', 95.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852814342_972', '402', '25', '陳姵蓁', 'unit_mandarin_1', '國語', '第一課 聽考', 99.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852814342_816', '402', '25', '陳姵蓁', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852816483_856', '402', '11', '周品閱', 'unit_mandarin_1', '國語', '第一課 聽考', 57.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852816483_638', '402', '11', '周品閱', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852820866_236', '402', '8', '羅章宏', 'unit_mandarin_1', '國語', '第一課 聽考', 99.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852820866_898', '402', '8', '羅章宏', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852836596_176', '402', '29', '楊如瑛', 'unit_mandarin_1', '國語', '第一課 聽考', 96.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852836596_530', '402', '29', '楊如瑛', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852845849_656', '402', '3', '蔡松錡', 'unit_mandarin_1', '國語', '第一課 聽考', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852845850_976', '402', '3', '蔡松錡', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852868654_530', '402', '6', '陳言豐', 'unit_mandarin_1', '國語', '第一課 聽考', 91.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852868655_100', '402', '6', '陳言豐', 'unit_1788848638374', '國語', '第一課習作', 100.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852885179_752', '402', '24', '鄭宇涵', 'unit_mandarin_1', '國語', '第一課 聽考', 88.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852885179_140', '402', '24', '鄭宇涵', 'unit_1788848638374', '國語', '第一課習作', 95.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852934626_344', '402', '30', '李宛芮', 'unit_mandarin_1', '國語', '第一課 聽考', 94.0, '學生自填');
INSERT OR REPLACE INTO scores (record_id, class_id, seat_no, student_name, unit_id, subject, unit_name, score, note) VALUES ('REC_1788852934626_349', '402', '30', '李宛芮', 'unit_1788848638374', '國語', '第一課習作', 90.0, '學生自填');