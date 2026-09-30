-- 建立學生成績與作答紀錄資料表
CREATE TABLE IF NOT EXISTS quiz_records (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  seat_number TEXT NOT NULL,
  student_name TEXT NOT NULL,
  score INTEGER NOT NULL,
  correct_count INTEGER NOT NULL,
  total_count INTEGER NOT NULL,
  duration_seconds INTEGER DEFAULT 0,
  answers_json TEXT DEFAULT '[]',
  dim_stats_json TEXT DEFAULT '{}',
  note TEXT DEFAULT '',
  submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 建立索引加速依座號與交卷時間查詢
CREATE INDEX IF NOT EXISTS idx_quiz_records_seat ON quiz_records(seat_number);
CREATE INDEX IF NOT EXISTS idx_quiz_records_submitted ON quiz_records(submitted_at);
