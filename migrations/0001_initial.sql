-- 建立 todos 資料表
CREATE TABLE IF NOT EXISTS todos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  completed INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 插入測試種子資料
INSERT INTO todos (title, completed) VALUES ('🚀 成功連接 Cloudflare Workers 與 D1！', 1);
INSERT INTO todos (title, completed) VALUES ('⚙️ 設定 GitHub Actions 自動部署', 0);
INSERT INTO todos (title, completed) VALUES ('🎉 享受邊緣運算與全球超低延遲資料庫', 0);
