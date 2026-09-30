-- ============================================================================
-- 國小四年級數學【整數乘法直式計算】全位值填答精熟測驗 Cloudflare D1 資料庫遷移
-- 資料庫：math-4a-vertical-mult-db (a9562547-5374-457e-92c1-18ba8e11294b)
-- ============================================================================

-- 1. 學生測驗成績與作答紀錄總表
CREATE TABLE IF NOT EXISTS quiz_records (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp TEXT NOT NULL,
  student_class TEXT DEFAULT '402',
  student_seat TEXT NOT NULL,
  student_name TEXT NOT NULL,
  unit_mode TEXT DEFAULT '全單元綜合',
  score INTEGER NOT NULL,
  correct_count INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  accuracy INTEGER NOT NULL,
  time_spent INTEGER NOT NULL,
  error_categories TEXT DEFAULT '',
  wrong_questions TEXT DEFAULT '',
  detail_logs TEXT DEFAULT '[]',
  submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_quiz_records_seat ON quiz_records(student_seat);
CREATE INDEX IF NOT EXISTS idx_quiz_records_submitted ON quiz_records(submitted_at);
CREATE INDEX IF NOT EXISTS idx_quiz_records_score ON quiz_records(score);

-- 2. 系統安全與全域參數設定表
CREATE TABLE IF NOT EXISTS system_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 初始化預設系統設定種子資料
INSERT OR IGNORE INTO system_settings (key, value) VALUES ('teacher_password', 'admin');
INSERT OR IGNORE INTO system_settings (key, value) VALUES ('entry_gate_enabled', 'true');
INSERT OR IGNORE INTO system_settings (key, value) VALUES ('entry_gate_password', '1234');
INSERT OR IGNORE INTO system_settings (key, value) VALUES ('gemini_api_key', '');
INSERT OR IGNORE INTO system_settings (key, value) VALUES ('nvidia_api_key', '');
INSERT OR IGNORE INTO system_settings (key, value) VALUES ('ai_engine', 'auto');

-- 3. AI 班級學情診斷歷史報告表
CREATE TABLE IF NOT EXISTS ai_reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  report_text TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
