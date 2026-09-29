-- 初始資料表遷移：建立學生/使用者成績與紀錄表
CREATE TABLE IF NOT EXISTS records (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id TEXT NOT NULL,
  student_name TEXT NOT NULL,
  score INTEGER NOT NULL,
  detail JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 建立索引加速查詢
CREATE INDEX IF NOT EXISTS idx_records_student_id ON records(student_id);
CREATE INDEX IF NOT EXISTS idx_records_created_at ON records(created_at);
