# Cloudflare Workers + D1 自動化部署專案

本專案提供基於 **Cloudflare Workers** 邊緣運算與 **Cloudflare D1 (分散式 SQLite 資料庫)** 的完整自動化部署 (CI/CD) 骨架。

---

## 快速開始指南

### 步驟 1：登入 Cloudflare 帳戶
```bash
wrangler login
```
*瀏覽器會自動彈出 Cloudflare 授權網頁，點擊「Allow」授權即可。*

---

### 步驟 2：建立遠端 D1 資料庫
在專案根目錄下執行：
```bash
wrangler d1 create app-db
```
執行成功後，終端機會回傳類似如下的設定：
```jsonc
[[d1_databases]]
binding = "DB"
database_name = "app-db"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

請將輸出的 `database_id` 複製，並貼入 [wrangler.jsonc](wrangler.jsonc) 中的 `database_id` 欄位。

---

### 步驟 3：本地資料庫遷移與開發測試

1. **本地執行資料庫遷移（建立本地 SQLite 模擬檔）**：
   ```bash
   npm run d1:migrate:local
   ```
2. **啟動本地開發伺服器**：
   ```bash
   npm run dev
   ```
   *伺服器啟動於 `http://localhost:8787`，可測試 GET `/api/records` 或 POST 新增資料。*

---

### 步驟 4：設定 GitHub Actions 自動化部署 (CI/CD)

當你將程式碼 `git push` 到 GitHub 時，GitHub Actions 會自動執行兩件事：
1. **自動將 `migrations/` 下的新 SQL 結構套用到 Cloudflare 線上 D1 資料庫**。
2. **自動部署最新 Worker 程式碼到 Cloudflare 全球邊緣節點**。

#### 所需的 GitHub Secrets：
前往 GitHub 專案儲存庫 > **Settings** > **Secrets and variables** > **Actions**，新增以下兩個密鑰：

1. **`CLOUDFLARE_API_TOKEN`**：
   - 前往 [Cloudflare 儀表板 > API 權杖](https://dash.cloudflare.com/profile/api-tokens)
   - 點擊「建立權杖」，選擇 **編輯 Cloudflare Workers** 範本。
   - 權限請確認包含：
     - `Account` - `Workers Scripts` - `Edit`
     - `Account` - `D1` - `Edit`
   - 複製生成的 Token 並填入 GitHub Secret。

2. **`CLOUDFLARE_ACCOUNT_ID`**：
   - 在 Cloudflare 儀表板右側邊欄即可看見您的「帳戶 ID (Account ID)」。

---

## 專案目錄結構

```
cf_d1_auto_deploy/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD 自動化工作流
├── migrations/
│   └── 0001_init.sql           # D1 資料庫結構遷移檔 (SQL)
├── src/
│   └── index.ts                # Cloudflare Worker 程式碼 (REST API)
├── package.json                # npm 腳本與相依套件
├── tsconfig.json               # TypeScript 組態設定
├── wrangler.jsonc              # Cloudflare 與 D1 核心配置檔
└── README.md                   # 本說明文件
```
