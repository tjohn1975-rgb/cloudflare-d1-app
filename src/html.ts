// Auto-generated from gas_math_4a_vertical_mult/Index.html
// Contains the full, interactive Math Vertical Multiplication exam application (v27.0)

export const BASE_INDEX_HTML = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Expires" content="0">
  <title>4上數學 第二單元【整數乘法直式計算】全位值填答精熟測驗</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #2563eb;
      --primary-dark: #1d4ed8;
      --primary-light: #dbeafe;
      --secondary: #0d9488;
      --accent: #f59e0b;
      --danger: #ef4444;
      --success: #10b981;
      --bg: #f8fafc;
      --card-bg: #ffffff;
      --text-main: #1e293b;
      --text-muted: #64748b;
      --border: #e2e8f0;
      --radius: 12px;
      --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Noto Sans TC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: var(--bg);
      color: var(--text-main);
      line-height: 1.6;
      padding-bottom: 60px;
    }

    header {
      background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
      color: white;
      padding: 16px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: var(--shadow);
    }
    .brand-title {
      font-size: 1.2rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }
    .badge {
      background: rgba(255, 255, 255, 0.2);
      padding: 4px 10px;
      border-radius: 9999px;
      font-size: 0.8rem;
    }
    .admin-entry-btn {
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: white;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s;
      font-size: 0.9rem;
    }
    .admin-entry-btn:hover { background: rgba(255, 255, 255, 0.3); }

    .container {
      max-width: 920px;
      margin: 20px auto;
      padding: 0 16px;
    }

    .card {
      background: var(--card-bg);
      border-radius: var(--radius);
      padding: 24px;
      margin-bottom: 20px;
      box-shadow: var(--shadow);
      border: 1px solid var(--border);
    }

    /* 單元切換按鈕 */
    .unit-pills {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .unit-pill {
      padding: 8px 18px;
      border-radius: 9999px;
      border: 2px solid #e2e8f0;
      background: #f8fafc;
      color: #475569;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      font-size: 0.95rem;
    }
    .unit-pill.active {
      border-color: var(--primary);
      background: var(--primary);
      color: white;
    }

    /* 重點卡片 */
    .review-card {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-radius: var(--radius);
      padding: 16px 20px;
      margin-bottom: 20px;
    }
    .review-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      user-select: none;
    }
    .review-header h3 {
      color: #1e40af;
      font-size: 1.05rem;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .review-content {
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px dashed #bfdbfe;
      font-size: 0.95rem;
      color: #1e3a8a;
      display: none;
    }
    .review-content.active { display: block; }
    .review-content ul { padding-left: 20px; margin-top: 6px; }
    .review-content li { margin-bottom: 6px; }

    /* 基本資料表單 */
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .form-group label {
      display: block;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 6px;
      color: var(--text-main);
    }
    .form-control {
      width: 100%;
      padding: 10px 14px;
      border: 1px solid var(--border);
      border-radius: 8px;
      font-size: 1rem;
      outline: none;
      transition: border-color 0.2s;
    }
    .form-control:focus { border-color: var(--primary); }

    /* 題目卡片 */
    .q-card {
      background: white;
      border-radius: var(--radius);
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: var(--shadow);
      border: 1px solid var(--border);
    }
    .q-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 14px;
      gap: 12px;
      flex-wrap: wrap;
    }
    .q-title {
      font-size: 1.15rem;
      font-weight: 700;
      color: #1e3a8a;
    }
    .q-badges {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }
    .q-badge {
      font-size: 0.8rem;
      padding: 3px 8px;
      border-radius: 6px;
      font-weight: 600;
    }
    .badge-dim { background: #dbeafe; color: #1e40af; }
    .badge-cat { background: #fef3c7; color: #92400e; }
    .q-context {
      font-size: 1rem;
      color: #334155;
      margin-bottom: 16px;
      line-height: 1.6;
    }

    /* 直式運算定位板舞台 */
    .vertical-wrapper {
      display: flex;
      justify-content: center;
      margin: 16px 0;
      overflow-x: auto;
      max-width: 100%;
      -webkit-overflow-scrolling: touch;
    }
    .vertical-board {
      display: inline-block;
      background: #f8fafc;
      border: 2px solid #cbd5e1;
      border-radius: 12px;
      padding: 18px 24px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    }
    .board-grid {
      display: grid;
      align-items: center;
      gap: 6px 4px;
    }
    .board-header-row {
      display: flex;
      border-bottom: 1px dashed #cbd5e1;
      padding-bottom: 6px;
      margin-bottom: 4px;
    }
    .col-header {
      width: 44px;
      text-align: center;
      font-size: 0.85rem;
      font-weight: 700;
      color: #64748b;
      background: #e2e8f0;
      border-radius: 4px;
      margin: 0 2px;
      padding: 2px 0;
    }
    .math-row {
      display: flex;
      align-items: center;
      margin: 3px 0;
    }
    .row-op {
      width: 32px;
      font-size: 1.4rem;
      font-weight: 900;
      color: #2563eb;
      text-align: center;
      user-select: none;
    }
    .row-cell {
      width: 44px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0 2px;
    }
    .digit-box {
      width: 40px;
      height: 46px;
      font-size: 1.35rem;
      font-weight: 700;
      text-align: center;
      border: 2px solid #94a3b8;
      border-radius: 8px;
      background: #ffffff;
      outline: none;
      transition: all 0.15s;
      font-family: inherit;
    }
    .digit-box:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25);
      background: #ffffff;
    }
    .digit-box.filled {
      border-color: #3b82f6;
      background: #f0f9ff;
    }
    .digit-box.is-correct {
      border-color: #10b981 !important;
      background: #ecfdf5 !important;
      color: #065f46 !important;
      font-weight: 900;
    }
    .digit-box.is-wrong {
      border-color: #ef4444 !important;
      background: #fef2f2 !important;
      color: #991b1b !important;
      font-weight: 900;
    }
    .math-divider {
      height: 2px;
      background: #334155;
      margin: 6px 0;
      border-radius: 2px;
    }
    .step-desc {
      font-size: 0.85rem;
      font-weight: 600;
      color: #64748b;
      margin-left: 14px;
      white-space: nowrap;
      min-width: 110px;
    }

    /* 題目操作工具列 */
    .q-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 14px;
      padding-top: 12px;
      border-top: 1px solid #f1f5f9;
      font-size: 0.9rem;
    }
    .btn-clear-q {
      background: #f1f5f9;
      border: 1px solid #cbd5e1;
      color: #475569;
      padding: 4px 12px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 500;
      transition: all 0.2s;
    }
    .btn-clear-q:hover { background: #e2e8f0; color: #1e293b; }
    .status-text { font-weight: 600; }
    .status-text.complete { color: #10b981; }
    .status-text.pending { color: #f59e0b; }

    
    
    
    /* 🎛️ 每個專項各自選擇題數面板樣式 */
    .unit-count-cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 14px;
      margin-bottom: 16px;
    }
    .unit-count-card {
      background: white;
      border-radius: 12px;
      padding: 14px 12px;
      border: 2px solid #e2e8f0;
      box-shadow: 0 2px 5px rgba(0,0,0,0.03);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      transition: all 0.2s ease;
    }
    .unit-count-card:hover { transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,0,0,0.06); }
    .unit-count-card.border-u1 { border-color: #bfdbfe; }
    .unit-count-card.border-u2 { border-color: #a7f3d0; }
    .unit-count-card.border-u3 { border-color: #fed7aa; }
    .unit-count-card.border-u4 { border-color: #fecaca; }
    .unit-card-title {
      font-size: 0.88rem;
      font-weight: 700;
      text-align: center;
      line-height: 1.3;
    }
    .color-u1 { color: #2563eb; }
    .color-u2 { color: #059669; }
    .color-u3 { color: #d97706; }
    .color-u4 { color: #dc2626; }
    .unit-count-stepper {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .stepper-btn {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      border: 1px solid #cbd5e1;
      background: #f8fafc;
      font-size: 0.95rem;
      font-weight: bold;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s;
    }
    .stepper-btn:hover { background: #e2e8f0; border-color: #94a3b8; }
    .stepper-input {
      width: 52px;
      height: 34px;
      text-align: center;
      font-size: 1.2rem;
      font-weight: 800;
      color: #1e293b;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      outline: none;
    }
    .stepper-input:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
    }
    .unit-count-shortcuts {
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .mini-count-btn {
      padding: 3px 8px;
      font-size: 0.75rem;
      font-weight: 600;
      border-radius: 6px;
      border: 1px solid #e2e8f0;
      background: #f8fafc;
      color: #475569;
      cursor: pointer;
      transition: all 0.15s;
    }
    .mini-count-btn:hover { background: #e2e8f0; }
    .mini-count-btn.active {
      border-color: #2563eb;
      background: #eff6ff;
      color: #2563eb;
      font-weight: 700;
    }
    .unit-pct-badge {
      font-size: 0.75rem;
      font-weight: 600;
      color: #64748b;
      background: #f1f5f9;
      padding: 2px 8px;
      border-radius: 9999px;
    }
    .custom-ratio-box {
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 12px;
      padding: 18px 20px;
      margin-top: 14px;
      animation: fadeIn 0.25s ease;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .custom-ratio-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e2e8f0;
    }
    .stacked-ratio-bar {
      display: flex;
      width: 100%;
      height: 14px;
      border-radius: 7px;
      overflow: hidden;
      background: #e2e8f0;
    }
    .ratio-seg {
      height: 100%;
      transition: width 0.25s ease;
    }
    .seg-u1 { background: #2563eb; }
    .seg-u2 { background: #10b981; }
    .seg-u3 { background: #f59e0b; }
    .seg-u4 { background: #ef4444; }

    /* 測驗即時計時與進度列 (Sticky Top Bar) */
    .quiz-timer-bar {
      position: sticky;
      top: 10px;
      z-index: 99;
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid #bfdbfe;
      border-radius: var(--radius);
      padding: 12px 20px;
      margin-bottom: 20px;
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.12);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      transition: all 0.3s ease;
    }
    .quiz-timer-bar.warning {
      border-color: #f59e0b;
      box-shadow: 0 4px 14px rgba(245, 158, 11, 0.25);
      background: rgba(254, 243, 199, 0.96);
    }
    .quiz-timer-bar.danger {
      border-color: #ef4444;
      box-shadow: 0 4px 16px rgba(239, 68, 68, 0.3);
      background: rgba(254, 226, 226, 0.96);
      animation: pulseAlert 1s infinite alternate;
    }
    @keyframes pulseAlert {
      from { transform: scale(1); }
      to { transform: scale(1.01); }
    }
    .timer-col-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .timer-display-group {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .timer-icon {
      font-size: 1.8rem;
    }
    .timer-subtext {
      font-size: 0.72rem;
      font-weight: 700;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .timer-clock {
      font-size: 1.6rem;
      font-weight: 800;
      font-family: 'Courier New', Courier, monospace;
      color: #1e3a8a;
      letter-spacing: 1px;
      line-height: 1.1;
      font-variant-numeric: tabular-nums;
    }
    .timer-mode-pill {
      background: #e0e7ff;
      color: #3730a3;
      padding: 3px 8px;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      white-space: nowrap;
    }
    .timer-col-center {
      flex: 1;
      min-width: 180px;
      max-width: 320px;
    }
    .timer-progress-header {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      font-weight: 600;
      color: #475569;
      margin-bottom: 5px;
    }
    .timer-progress-track {
      width: 100%;
      height: 8px;
      background: #e2e8f0;
      border-radius: 9999px;
      overflow: hidden;
    }
    .timer-progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #3b82f6, #10b981);
      border-radius: 9999px;
      transition: width 0.3s ease;
    }
    .timer-col-right {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .timer-select {
      padding: 6px 10px;
      border-radius: 8px;
      border: 1px solid #cbd5e1;
      background: white;
      font-size: 0.85rem;
      color: #334155;
      font-weight: 600;
      cursor: pointer;
      outline: none;
    }
    .timer-btn {
      padding: 6px 12px;
      border-radius: 8px;
      border: 1px solid #cbd5e1;
      background: white;
      color: #334155;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .timer-btn:hover {
      background: #f1f5f9;
      border-color: #94a3b8;
    }
    .pause-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .pause-box {
      background: white;
      padding: 32px 28px;
      border-radius: 16px;
      text-align: center;
      max-width: 380px;
      width: 100%;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 768px) {
      .quiz-timer-bar {
        padding: 10px 14px;
        gap: 10px;
      }
      .timer-col-center {
        order: 3;
        min-width: 100%;
        max-width: 100%;
      }
      .timer-clock {
        font-size: 1.3rem;
      }
      .timer-select {
        font-size: 0.78rem;
        padding: 4px 8px;
      }
      .timer-btn {
        font-size: 0.78rem;
        padding: 4px 8px;
      }
    }

    /* 提交按鈕 */
    .btn-submit {
      display: block;
      width: 100%;
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      color: white;
      border: none;
      padding: 16px;
      border-radius: var(--radius);
      font-size: 1.2rem;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
      transition: all 0.2s;
      margin-top: 24px;
    }
    .btn-submit:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4); }

    /* 結果回饋頁面 */
    #resultSection { display: none; }
    .score-banner {
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
      color: white;
      border-radius: var(--radius);
      padding: 32px 24px;
      text-align: center;
      margin-bottom: 24px;
      box-shadow: var(--shadow);
    }
    .score-num {
      font-size: 4rem;
      font-weight: 900;
      line-height: 1;
      margin: 12px 0;
      text-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }
    .score-meta {
      display: flex;
      justify-content: center;
      gap: 24px;
      font-size: 1.1rem;
      margin-top: 12px;
      flex-wrap: wrap;
    }
    .cloud-sync-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 16px;
      padding: 6px 16px;
      border-radius: 9999px;
      background: rgba(255,255,255,0.2);
      font-size: 0.95rem;
    }

    /* 四大認知維度診斷卡片 */
    .dim-card {
      background: white;
      border-radius: var(--radius);
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: var(--shadow);
      border: 1px solid var(--border);
    }
    .dim-row { margin-bottom: 16px; }
    .dim-header {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
      margin-bottom: 6px;
      font-size: 0.95rem;
    }
    .progress-bar-bg {
      height: 12px;
      background: #f1f5f9;
      border-radius: 6px;
      overflow: hidden;
    }
    .progress-bar-fill {
      height: 100%;
      background: linear-gradient(90deg, #3b82f6 0%, #10b981 100%);
      border-radius: 6px;
      transition: width 0.8s ease;
    }

    /* 錯題與詳解 */
    .review-q-item {
      background: white;
      border-radius: var(--radius);
      padding: 20px;
      margin-bottom: 20px;
      border: 1px solid var(--border);
      box-shadow: var(--shadow);
    }
    .review-q-item.wrong { border-left: 6px solid #ef4444; }
    .review-q-item.correct { border-left: 6px solid #10b981; }
    .step-explain-box {
      background: #f8fafc;
      border: 1px dashed #cbd5e1;
      border-radius: 8px;
      padding: 14px;
      margin-top: 14px;
      font-size: 0.95rem;
      line-height: 1.6;
      white-space: pre-line;
      color: #334155;
    }
    .btn-ai-tutor {
      background: #8b5cf6;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.9rem;
      margin-top: 12px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
    }
    .btn-ai-tutor:hover { background: #7c3aed; }
    .ai-bubble {
      margin-top: 12px;
      background: #f5f3ff;
      border: 1px solid #ddd6fe;
      border-radius: 10px;
      padding: 14px 18px;
      color: #4c1d95;
      font-size: 0.95rem;
      white-space: pre-line;
      line-height: 1.6;
      display: none;
    }

    /* 老師管理後台 Modal */
    .modal-backdrop {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(4px);
      z-index: 1000;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }
    .modal-content {
      background: white;
      border-radius: 16px;
      width: 100%;
      max-width: 1000px;
      max-height: 92vh;
      overflow-y: auto;
      padding: 24px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 14px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 16px;
    }
    .btn-close {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--text-muted);
    }

    /* 管理後台分頁 Tabs */
    .tabs-nav {
      display: flex;
      border-bottom: 2px solid var(--border);
      margin-bottom: 20px;
      overflow-x: auto;
    }
    .tab-btn {
      padding: 10px 18px;
      border: none;
      background: none;
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-muted);
      cursor: pointer;
      white-space: nowrap;
      border-bottom: 3px solid transparent;
      margin-bottom: -2px;
      transition: all 0.2s;
    }
    .tab-btn.active {
      color: var(--primary);
      border-bottom-color: var(--primary);
    }
    .tab-pane { display: none; }
    .tab-pane.active { display: block; }

    /* 後台 KPI 卡片 */
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 12px;
      margin-bottom: 20px;
    }
    .kpi-card {
      background: #f8fafc;
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 14px;
      text-align: center;
    }
    .kpi-val { font-size: 1.7rem; font-weight: 800; color: #1e3a8a; }
    .kpi-label { font-size: 0.85rem; color: var(--text-muted); margin-top: 4px; }

    /* 六大分數級距卡片 */
    .tiers-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 10px;
      margin-bottom: 24px;
    }
    .tier-card {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    .tier-title { font-size: 0.85rem; font-weight: 700; margin-bottom: 4px; }
    .tier-count { font-size: 1.4rem; font-weight: 800; color: #0f172a; }
    .tier-pct { font-size: 0.8rem; color: #64748b; margin-bottom: 6px; }
    .tier-bar-bg { height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden; }
    .tier-bar-fill { height: 100%; border-radius: 3px; }

    /* 課堂投影教學舞台 */
    .stage-container {
      background: #0f172a;
      color: white;
      border-radius: 16px;
      padding: 28px 24px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      margin-bottom: 24px;
    }
    .stage-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      border-bottom: 1px solid #334155;
      padding-bottom: 12px;
    }
    .stage-title { font-size: 1.5rem; font-weight: 800; color: #38bdf8; }
    .stage-math-area {
      background: #1e293b;
      border-radius: 12px;
      padding: 24px;
      margin: 18px 0;
      display: flex;
      justify-content: center;
      border: 1px solid #475569;
    }
    .stage-controls {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 16px;
    }
    .stage-btn {
      padding: 10px 18px;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s;
    }
    .btn-gold { background: #f59e0b; color: #0f172a; }
    .btn-blue { background: #3b82f6; color: white; }
    .btn-purple { background: #8b5cf6; color: white; }
    .stage-reveal-box {
      background: rgba(255, 255, 255, 0.06);
      border: 1px dashed rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      padding: 16px;
      font-size: 1.15rem;
      line-height: 1.6;
      margin-top: 14px;
      display: none;
    }

    /* A4 列印學習單樣式 */
            @media print {
      @page {
        size: A4 portrait;
        margin: 8mm 10mm;
      }
      body {
        background: white !important;
        color: black !important;
        padding: 0 !important;
        font-family: "PingFang TC", "Microsoft JhengHei", sans-serif !important;
      }
      header, .review-card, #quizSection, #resultSection, .modal-backdrop, .no-print, .unit-pills, .card {
        display: none !important;
      }
      #printArea {
        display: block !important;
      }
      .page-break {
        page-break-after: always;
        break-after: page;
      }
    }
    #printArea { display: none; }
    .print-sheet {
      padding: 8mm 10mm;
      border: 1.5px solid #0f172a;
      margin-bottom: 16px;
      background: white;
      box-sizing: border-box;
    }
    .print-header {
      border-bottom: 1.5px solid #0f172a;
      padding-bottom: 6px;
      margin-bottom: 8px;
    }
    .print-title {
      font-size: 1.22rem;
      font-weight: 800;
      color: #0f172a;
      text-align: center;
      letter-spacing: 0.5px;
    }
    .print-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 4px;
      font-size: 0.88rem;
      color: #334155;
    }
    .print-meta strong {
      color: #0f172a;
    }
    .print-q-card {
      border: 1px solid #64748b;
      border-radius: 5px;
      padding: 7px 10px;
      margin-bottom: 8px;
      background: #ffffff;
    }
    .print-q-title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 4px;
      margin-bottom: 5px;
      flex-wrap: wrap;
      gap: 4px;
    }
    .print-q-badge {
      background: #1e293b;
      color: white;
      font-weight: bold;
      font-size: 0.8rem;
      padding: 1px 6px;
      border-radius: 3px;
    }
    .print-q-title {
      font-size: 0.98rem;
      font-weight: 700;
      color: #0f172a;
      flex: 1;
      margin-left: 6px;
    }
    .print-q-dim-badge {
      font-size: 0.78rem;
      color: #b91c1c;
      background: #fef2f2;
      border: 1px solid #fecaca;
      padding: 1px 6px;
      border-radius: 3px;
      font-weight: 600;
    }
    .print-q-dual-grid {
      display: flex;
      gap: 10px;
    }
    .print-q-hint-col {
      flex: 1;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      padding: 6px 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .print-q-calc-col {
      flex: 1.35;
      border: 1.5px solid #94a3b8;
      border-radius: 5px;
      padding: 6px 10px;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .print-calc-bottom-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 6px;
      padding-top: 4px;
      border-top: 1px dashed #cbd5e1;
      white-space: nowrap;
    }
    .print-calc-ans-tag {
      font-weight: bold;
      font-size: 0.92rem;
      color: #1e3a8a;
      display: flex;
      align-items: center;
    }
    .print-calc-ans-line {
      font-size: 1rem;
      letter-spacing: 2px;
      color: #0f172a;
    }
    /* 放大版定位板 (原題手寫訂正區專用，寬 38px 高 32px，充實版面且極佳手寫) */
    .print-grid-board.board-lg .print-grid-cell {
      width: 38px;
      height: 32px;
      font-size: 1.2rem;
      font-weight: bold;
    }
    .print-grid-board.board-lg .print-grid-cell.op-cell {
      width: 28px;
      font-size: 1.15rem;
    }
    .print-grid-board.board-lg .print-grid-header .print-grid-cell {
      height: 20px;
      font-size: 0.78rem;
    }
    .print-col-title {
      font-size: 0.84rem;
      font-weight: 700;
      color: #1e3a8a;
      margin-bottom: 4px;
      border-bottom: 1px dashed #cbd5e1;
      padding-bottom: 3px;
    }
    .print-hint-content {
      font-size: 0.82rem;
      color: #334155;
      line-height: 1.45;
      white-space: normal;
    }
    .print-hint-keypoint {
      margin-top: 6px;
      padding-top: 4px;
      border-top: 1px dashed #cbd5e1;
      font-size: 0.78rem;
      color: #b45309;
    }
    .print-grid-board {
      display: inline-block;
      border: 1px solid #94a3b8;
      border-radius: 3px;
      margin: 2px 0;
      background: #fff;
    }
    .print-grid-row {
      display: flex;
    }
    .print-grid-cell {
      width: 30px;
      height: 22px;
      border-right: 1px solid #cbd5e1;
      border-bottom: 1px solid #cbd5e1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.88rem;
      font-weight: 600;
      color: #0f172a;
    }
    .print-grid-cell:last-child {
      border-right: none;
    }
    .print-grid-row:last-child .print-grid-cell {
      border-bottom: none;
    }
    .print-grid-cell.op-cell {
      width: 24px;
      background: #f8fafc;
      color: #475569;
      font-weight: bold;
    }
    .print-grid-header .print-grid-cell {
      background: #f1f5f9;
      color: #64748b;
      font-size: 0.68rem;
      font-weight: bold;
      height: 16px;
    }
    .print-grid-line {
      height: 2px;
      background: #334155;
      width: 100%;
    }
    .print-variation-box {
      margin-top: 6px;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 5px;
      padding: 5px 8px;
    }
    .print-variation-layout {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
    .print-variation-left {
      flex: 1;
      min-width: 0;
    }
    .print-variation-right {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .print-variation-tag {
      background: #2563eb;
      color: white;
      font-size: 0.72rem;
      font-weight: bold;
      padding: 1px 5px;
      border-radius: 3px;
    }
    .print-footer {
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
      padding-top: 6px;
      border-top: 1px solid #0f172a;
      font-size: 0.85rem;
      color: #334155;
    }

    /* 響應式調適 */
    @media (max-width: 768px) {
      .grid-3, .grid-2 { grid-template-columns: 1fr; }
      .brand-title { font-size: 1.05rem; }
      .digit-box { width: 34px; height: 42px; font-size: 1.2rem; }
      .row-cell, .col-header { width: 36px; height: 44px; font-size: 1.15rem; }
      .step-desc { min-width: auto; font-size: 0.75rem; }
      .score-num { font-size: 3rem; }
    }

    /* 🚪 進場通關密碼門禁頁樣式 (Entrance Gate) */
    .entry-gate-wrapper {
      min-height: 85vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px 16px;
    }
    .entry-gate-card {
      background: white;
      border: 1px solid #bfdbfe;
      border-radius: 20px;
      box-shadow: 0 16px 36px rgba(37, 99, 235, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04);
      max-width: 480px;
      width: 100%;
      padding: 38px 30px;
      text-align: center;
      animation: fadeInDown 0.4s ease;
      box-sizing: border-box;
    }
    .entry-gate-icon {
      font-size: 3.2rem;
      margin-bottom: 10px;
      display: inline-block;
      animation: bounceSoft 2s infinite ease-in-out;
    }
    @keyframes bounceSoft {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }
    .entry-gate-badge {
      display: inline-block;
      background: #eff6ff;
      color: #1d4ed8;
      font-weight: 700;
      font-size: 0.85rem;
      padding: 4px 14px;
      border-radius: 9999px;
      border: 1px solid #bfdbfe;
      margin-bottom: 12px;
    }
    .entry-gate-title {
      font-size: 1.45rem;
      font-weight: 800;
      color: #1e293b;
      line-height: 1.4;
      margin: 0 0 12px 0;
    }
    .entry-gate-subtitle {
      color: #64748b;
      font-size: 0.95rem;
      line-height: 1.5;
      margin-bottom: 24px;
    }
    .entry-gate-form {
      margin-bottom: 20px;
    }
    .entry-input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 14px;
    }
    .entry-input-icon {
      position: absolute;
      left: 14px;
      font-size: 1.2rem;
      color: #64748b;
      pointer-events: none;
    }
    .entry-pwd-input {
      width: 100%;
      padding: 14px 44px 14px 44px;
      border: 2px solid #cbd5e1;
      border-radius: 12px;
      font-size: 1.15rem;
      font-weight: 600;
      letter-spacing: 1px;
      color: #0f172a;
      text-align: center;
      transition: all 0.2s ease;
      box-sizing: border-box;
    }
    .entry-pwd-input:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
    }
    .btn-toggle-eye {
      position: absolute;
      right: 12px;
      background: transparent;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
      padding: 4px 6px;
      opacity: 0.65;
      transition: opacity 0.2s;
    }
    .btn-toggle-eye:hover { opacity: 1; }
    .btn-entry-submit {
      width: 100%;
      padding: 14px 20px;
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 1.1rem;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-sizing: border-box;
    }
    .btn-entry-submit:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(37, 99, 235, 0.4);
    }
    .btn-entry-submit:active {
      transform: translateY(0);
    }
    .entry-error-msg {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: #dc2626;
      font-size: 0.92rem;
      font-weight: 600;
      padding: 10px 14px;
      border-radius: 8px;
      margin-bottom: 14px;
      animation: shake 0.3s ease;
      text-align: left;
    }
    .entry-gate-footer {
      border-top: 1px dashed #e2e8f0;
      padding-top: 16px;
    }
    .entry-teacher-link {
      background: transparent;
      border: none;
      color: #64748b;
      font-size: 0.88rem;
      cursor: pointer;
      font-weight: 600;
      transition: color 0.2s;
    }
    .entry-teacher-link:hover {
      color: #1e40af;
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <!-- 🚪 進場通關密碼驗證頁面 (Entrance Gate) -->
  <div id="entryGateSection" class="entry-gate-wrapper" style="display: none;">
    <div class="entry-gate-card">
      <div class="entry-gate-icon">📐</div>
      <div class="entry-gate-badge">國小四年級數學 互動評量</div>
      <h1 class="entry-gate-title">第二單元【整數乘法直式計算】<br><span style="font-size: 1.15rem; color: #2563eb; font-weight: 700;">全位值填答精熟測驗</span></h1>
      <p class="entry-gate-subtitle">歡迎進入測驗！請輸入任課老師公布的<b>「測驗進場通關碼」</b>開始挑戰。</p>
      
      <div class="entry-gate-form">
        <div class="entry-input-wrapper">
          <span class="entry-input-icon">🔐</span>
          <input type="password" id="entryGatePwdInput" class="entry-pwd-input" placeholder="請輸入測驗通關碼" autocomplete="off" onkeydown="if(event.key==='Enter') submitEntryGatePassword()">
          <button type="button" class="btn-toggle-eye" onclick="toggleEntryPwdVisibility()" title="顯示/隱藏密碼">👁️</button>
        </div>
        <div id="entryGateErrorMsg" class="entry-error-msg" style="display: none;"></div>
        <button type="button" class="btn-entry-submit" id="btnEntrySubmit" onclick="submitEntryGatePassword()">
          <span>🚀 驗證通關碼，進入測驗</span>
        </button>
      </div>

      <div class="entry-gate-footer">
        <button type="button" class="entry-teacher-link" onclick="openAdminModal()">🧑‍🏫 我是老師，開啟管理與 AI 診斷後台</button>
      </div>
    </div>
  </div>

  <!-- 頂部導航列 -->
  <header id="mainHeader">
    <div class="brand-title">
      <span>📐 4上數學 第二單元【整數乘法直式計算】</span>
      <span class="badge" id="currentUnitHeaderBadge">全單元綜合挑戰 (20 題)</span>
      <span class="badge" style="background: rgba(16, 185, 129, 0.35); border: 1px solid rgba(255, 255, 255, 0.4); font-weight: 700;">v26.0 最新版</span>
    </div>
    <div>
      <button class="admin-entry-btn" onclick="openAdminModal()">🧑‍🏫 老師管理與 AI 診斷後台</button>
    </div>
  </header>

  <div class="container" id="mainAppContainer">

    <!-- 評量單元、總題數與各專項自訂面板 -->
    <div class="card" style="margin-bottom: 20px; padding: 18px 22px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
        <div style="font-size: 1rem; font-weight: 700; color: #1e3a8a; display: flex; align-items: center; gap: 8px;">
          <span>🎯 測驗單元與出題設定：</span>
          <span id="currentScopeSummaryBadge" class="badge" style="background: #e0e7ff; color: #3730a3; font-weight: 600;">全單元均衡 (共 20 題)</span>
        </div>
        <button type="button" class="btn-clear-q" id="btnToggleCustomRatio" onclick="toggleCustomRatioPanel()" style="background: #2563eb; color: white; border: none; font-weight: 600; padding: 6px 14px;">
          🎛️ 自訂每個專項題數
        </button>
      </div>

      <!-- 快捷模式選單 -->
      <div class="unit-pills" id="quickModePills">
        <button type="button" class="unit-pill active" id="btnModeALL" onclick="applyQuickPreset('ALL')">🌟 全單元均衡 (20 題)</button>
        <button type="button" class="unit-pill" id="btnModeQuick10" onclick="applyQuickPreset('QUICK10')">⚡ 隨堂快速練 (10 題)</button>
        <button type="button" class="unit-pill" id="btnModeU1" onclick="applyQuickPreset('UNIT1')">📘 單元 1 專項 (10 題)</button>
        <button type="button" class="unit-pill" id="btnModeU2" onclick="applyQuickPreset('UNIT2')">📗 單元 2 專項 (10 題)</button>
        <button type="button" class="unit-pill" id="btnModeU3" onclick="applyQuickPreset('UNIT3')">📙 單元 3 專項 (10 題)</button>
        <button type="button" class="unit-pill" id="btnModeU4" onclick="applyQuickPreset('UNIT4')">📕 單元 4 專項 (10 題)</button>
      </div>

      <!-- 自訂每個專項題數面板 (可展開/收合) -->
      <div id="customRatioPanel" class="custom-ratio-box" style="display: none;">
        <div class="custom-ratio-header">
          <div>
            <h4 style="color: #1e3a8a; margin: 0; font-size: 1.05rem;">🎛️ 每個專項各自選擇題數</h4>
            <span style="font-size: 0.85rem; color: #64748b;">(每個單元皆可獨立設定題數，亦可設為 0 題不測驗)</span>
          </div>
          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            <button type="button" class="mini-count-btn" onclick="applyAllUnitsCountPreset(5)">每單元各 5 題 (共20題)</button>
            <button type="button" class="mini-count-btn" onclick="applyAllUnitsCountPreset(10)">每單元各 10 題 (共40題)</button>
            <button type="button" class="mini-count-btn" onclick="applyAllUnitsCountPreset(3)">每單元各 3 題 (共12題)</button>
            <button type="button" class="mini-count-btn" onclick="applyAllUnitsCountPreset(0)" style="color: #ef4444;">全部歸零</button>
          </div>
        </div>

        <!-- 四大單元獨立卡片微調區 -->
        <div class="unit-count-cards-grid">
          <!-- 單元 1 -->
          <div class="unit-count-card border-u1">
            <div class="unit-card-title color-u1">📘 單元 1：四位數 × 一位數</div>
            <div class="unit-count-stepper">
              <button type="button" class="stepper-btn" onclick="adjustUnitCount(0, -1)">➖</button>
              <input type="number" id="inputCountU1" min="0" max="30" value="5" class="stepper-input" oninput="onUnitCountInput(0, this.value)">
              <button type="button" class="stepper-btn" onclick="adjustUnitCount(0, 1)">➕</button>
              <span style="font-weight: 600; color: #475569; font-size: 0.9rem;">題</span>
            </div>
            <div class="unit-count-shortcuts">
              <button type="button" class="mini-count-btn" id="btnU1_0" onclick="setUnitCountDirect(0, 0)">0 題</button>
              <button type="button" class="mini-count-btn" id="btnU1_3" onclick="setUnitCountDirect(0, 3)">3 題</button>
              <button type="button" class="mini-count-btn active" id="btnU1_5" onclick="setUnitCountDirect(0, 5)">5 題</button>
              <button type="button" class="mini-count-btn" id="btnU1_10" onclick="setUnitCountDirect(0, 10)">10 題</button>
            </div>
            <div class="unit-pct-badge" id="pctBadgeU1">佔比：25%</div>
          </div>

          <!-- 單元 2 -->
          <div class="unit-count-card border-u2">
            <div class="unit-card-title color-u2">📗 單元 2：一位數 × 二位數</div>
            <div class="unit-count-stepper">
              <button type="button" class="stepper-btn" onclick="adjustUnitCount(1, -1)">➖</button>
              <input type="number" id="inputCountU2" min="0" max="30" value="5" class="stepper-input" oninput="onUnitCountInput(1, this.value)">
              <button type="button" class="stepper-btn" onclick="adjustUnitCount(1, 1)">➕</button>
              <span style="font-weight: 600; color: #475569; font-size: 0.9rem;">題</span>
            </div>
            <div class="unit-count-shortcuts">
              <button type="button" class="mini-count-btn" id="btnU2_0" onclick="setUnitCountDirect(1, 0)">0 題</button>
              <button type="button" class="mini-count-btn" id="btnU2_3" onclick="setUnitCountDirect(1, 3)">3 題</button>
              <button type="button" class="mini-count-btn active" id="btnU2_5" onclick="setUnitCountDirect(1, 5)">5 題</button>
              <button type="button" class="mini-count-btn" id="btnU2_10" onclick="setUnitCountDirect(1, 10)">10 題</button>
            </div>
            <div class="unit-pct-badge" id="pctBadgeU2">佔比：25%</div>
          </div>

          <!-- 單元 3 -->
          <div class="unit-count-card border-u3">
            <div class="unit-card-title color-u3">📙 單元 3：二位數 × 二位數</div>
            <div class="unit-count-stepper">
              <button type="button" class="stepper-btn" onclick="adjustUnitCount(2, -1)">➖</button>
              <input type="number" id="inputCountU3" min="0" max="30" value="5" class="stepper-input" oninput="onUnitCountInput(2, this.value)">
              <button type="button" class="stepper-btn" onclick="adjustUnitCount(2, 1)">➕</button>
              <span style="font-weight: 600; color: #475569; font-size: 0.9rem;">題</span>
            </div>
            <div class="unit-count-shortcuts">
              <button type="button" class="mini-count-btn" id="btnU3_0" onclick="setUnitCountDirect(2, 0)">0 題</button>
              <button type="button" class="mini-count-btn" id="btnU3_3" onclick="setUnitCountDirect(2, 3)">3 題</button>
              <button type="button" class="mini-count-btn active" id="btnU3_5" onclick="setUnitCountDirect(2, 5)">5 題</button>
              <button type="button" class="mini-count-btn" id="btnU3_10" onclick="setUnitCountDirect(2, 10)">10 題</button>
            </div>
            <div class="unit-pct-badge" id="pctBadgeU3">佔比：25%</div>
          </div>

          <!-- 單元 4 -->
          <div class="unit-count-card border-u4">
            <div class="unit-card-title color-u4">📕 單元 4：四位數 × 二位數</div>
            <div class="unit-count-stepper">
              <button type="button" class="stepper-btn" onclick="adjustUnitCount(3, -1)">➖</button>
              <input type="number" id="inputCountU4" min="0" max="30" value="5" class="stepper-input" oninput="onUnitCountInput(3, this.value)">
              <button type="button" class="stepper-btn" onclick="adjustUnitCount(3, 1)">➕</button>
              <span style="font-weight: 600; color: #475569; font-size: 0.9rem;">題</span>
            </div>
            <div class="unit-count-shortcuts">
              <button type="button" class="mini-count-btn" id="btnU4_0" onclick="setUnitCountDirect(3, 0)">0 題</button>
              <button type="button" class="mini-count-btn" id="btnU4_3" onclick="setUnitCountDirect(3, 3)">3 題</button>
              <button type="button" class="mini-count-btn active" id="btnU4_5" onclick="setUnitCountDirect(3, 5)">5 題</button>
              <button type="button" class="mini-count-btn" id="btnU4_10" onclick="setUnitCountDirect(3, 10)">10 題</button>
            </div>
            <div class="unit-pct-badge" id="pctBadgeU4">佔比：25%</div>
          </div>
        </div>

        <!-- 視覺化堆疊比例長條圖與總題數合計 -->
        <div style="background: white; padding: 12px 16px; border-radius: 10px; border: 1px solid #e2e8f0; margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <div style="font-size: 0.95rem; font-weight: 700; color: #1e3a8a;">
              <span>📊 測驗總題數：</span>
              <span id="totalCountSumText" style="font-size: 1.4rem; color: #2563eb; font-weight: 800;">20</span> 題
            </div>
            <div id="ratioSumBadge" style="font-size: 0.85rem; font-weight: 700; color: #10b981;">
              合計：100% (20 題)
            </div>
          </div>
          <div class="stacked-ratio-bar">
            <div class="ratio-seg seg-u1" id="segU1" style="width: 25%;"></div>
            <div class="ratio-seg seg-u2" id="segU2" style="width: 25%;"></div>
            <div class="ratio-seg seg-u3" id="segU3" style="width: 25%;"></div>
            <div class="ratio-seg seg-u4" id="segU4" style="width: 25%;"></div>
          </div>
        </div>

        <!-- 洗牌選項與確定組卷按鈕 -->
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; padding-top: 12px; border-top: 1px dashed #cbd5e1;">
          <label style="font-size: 0.9rem; font-weight: 600; color: #475569; display: flex; align-items: center; gap: 6px; cursor: pointer;">
            <input type="checkbox" id="chkShuffleQuestions" checked style="width: 18px; height: 18px;">
            <span>🎲 隨機洗牌題目排列順序（各單元題目穿插隨機出現）</span>
          </label>
          <button type="button" class="stage-btn btn-blue" onclick="applyCustomUnitCountsQuiz()" style="font-size: 1rem; padding: 10px 24px;">
            🚀 確定各單元題數，立即組卷！
          </button>
        </div>
      </div>
    </div>

    <!-- 單元重點回顧與複習卡片 -->
    <div class="review-card">
      <div class="review-header" onclick="toggleReviewCard()">
        <h3 id="reviewCardTitle">💡 第二單元【整數乘法直式計算】核心概念與位值對齊要訣（點擊展開／收合）</h3>
        <span id="reviewIcon" style="font-size: 1.2rem; font-weight: bold; color: #2563eb;">➕</span>
      </div>
      <div class="review-content" id="reviewContent">
        <!-- 動態依單元切換注入重點 -->
      </div>
    </div>

    <!-- 學生作答區 -->
    <div id="quizSection">
      <!-- 測驗即時計時與進度列 (Sticky Top Bar) -->
      <div class="quiz-timer-bar" id="quizTimerBar">
        <div class="timer-col-left">
          <div class="timer-display-group">
            <span class="timer-icon">⏱️</span>
            <div>
              <div class="timer-subtext">測驗作答計時</div>
              <div id="liveTimerClock" class="timer-clock">00:00</div>
            </div>
            <span id="timerModeBadge" class="timer-mode-pill">正向累計</span>
          </div>
        </div>

        <div class="timer-col-center">
          <div class="timer-progress-header">
            <span>答題進度：<strong id="answeredCountText">0</strong> / <strong id="totalQuestionsProgressText">20</strong> 題</span>
            <span id="answeredPercentText" style="color: #2563eb; font-weight: 700;">0%</span>
          </div>
          <div class="timer-progress-track">
            <div class="timer-progress-fill" id="timerProgressFill" style="width: 0%;"></div>
          </div>
        </div>

        <div class="timer-col-right">
          <select id="timerModeSelect" class="timer-select" onchange="changeTimerMode(this.value)">
            <option value="countup">⏱️ 自由挑戰 (正向計時)</option>
            <option value="10min">⏳ 限時 10 分鐘</option>
            <option value="15min">⏳ 限時 15 分鐘</option>
            <option value="20min">⏳ 限時 20 分鐘</option>
            <option value="30min">⏳ 限時 30 分鐘</option>
          </select>
          <button type="button" class="timer-btn" id="btnPauseTimer" onclick="toggleTimerPause()">⏸️ 暫停</button>
          <button type="button" class="timer-btn" onclick="resetQuizTimer(true)">🔄 重設</button>
        </div>
      </div>

      <!-- 暫停遮罩 -->
      <div id="pauseOverlay" class="pause-overlay" style="display: none;">
        <div class="pause-box">
          <div style="font-size: 3rem; margin-bottom: 12px;">⏸️</div>
          <h3 style="color: #1e3a8a; margin-bottom: 8px;">測驗已暫停</h3>
          <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 20px;">作答畫面已暫時鎖定保護，點擊下方按鈕即可隨時恢復計時與作答。</p>
          <button type="button" class="stage-btn btn-blue" onclick="toggleTimerPause()" style="font-size: 1rem; padding: 10px 24px;">▶️ 繼續測驗</button>
        </div>
      </div>

      <!-- 學生基本資料登入卡片 -->
      <div class="card">
        <h3 style="margin-bottom: 16px; color: #1e3a8a; display: flex; align-items: center; gap: 8px;">
          <span>📝 學生基本資料填寫</span>
          <span style="font-size: 0.85rem; font-weight: normal; color: #64748b;">(請確實填寫座號與姓名)</span>
        </h3>
        <div class="grid-2">
          <div class="form-group">
            <label>座號 (如：05)</label>
            <input type="number" id="studentSeat" class="form-control" placeholder="請輸入座號" min="1" max="50">
          </div>
          <div class="form-group">
            <label>姓名</label>
            <input type="text" id="studentName" class="form-control" placeholder="請輸入真實姓名">
          </div>
        </div>
      </div>

      <!-- 題目動態渲染容器 -->
      <div id="questionsContainer"></div>

      <!-- 測驗提交按鈕 -->
      <button class="btn-submit" id="btnSubmit" onclick="submitQuiz()">🚀 完成直式計算，立即交卷並診斷弱點！</button>
    </div>

    <!-- 測驗結果與診斷報告區塊 -->
    <div id="resultSection">
      <!-- 成績橫幅 -->
      <div class="score-banner">
        <div id="honorBadge" style="font-size: 1.15rem; margin-bottom: 6px; font-weight: 600;">🎉 測驗完成！</div>
        <div class="score-num"><span id="finalScoreText">0</span><span style="font-size: 1.8rem; font-weight: normal;"> 分</span></div>
        <div class="score-meta">
          <div>答對題數：<span id="correctCountText" style="font-weight:700;">0</span> / <span id="totalQuestionsCountText">20</span> 題</div>
          <div>答對率：<span id="accuracyText" style="font-weight:700;">0%</span></div>
          <div>測驗耗時：<span id="timeSpentText" style="font-weight:700;">0 秒</span></div>
        </div>
        <div class="cloud-sync-badge" id="cloudSyncStatus">
          <span id="cloudSyncSpinner">⏳</span> <span id="cloudSyncText">正在將測驗成績同步記錄至雲端試算表...</span>
        </div>
      </div>

      <!-- 四大核心認知維度掌握度診斷 -->
      <div class="dim-card">
        <h3 style="margin-bottom: 16px; color: #1e3a8a; display: flex; align-items: center; gap: 8px;">
          <span>📊 四大核心認知維度掌握度診斷</span>
        </h3>
        <div class="dim-row">
          <div class="dim-header">
            <span>🧠 概念理解 (乘法位值意義與整十、整百乘法規律)</span>
            <span id="dimScore1">0%</span>
          </div>
          <div class="progress-bar-bg"><div class="progress-bar-fill" id="dimBar1" style="width:0%;"></div></div>
        </div>
        <div class="dim-row">
          <div class="dim-header">
            <span>✍️ 讀寫與位值 (直式定位板分步對齊、中間與末尾零)</span>
            <span id="dimScore2">0%</span>
          </div>
          <div class="progress-bar-bg"><div class="progress-bar-fill" id="dimBar2" style="width:0%;"></div></div>
        </div>
        <div class="dim-row">
          <div class="dim-header">
            <span>⚡ 運算技能 (連續進位處理與部分積分步計算)</span>
            <span id="dimScore3">0%</span>
          </div>
          <div class="progress-bar-bg"><div class="progress-bar-fill" id="dimBar3" style="width:0%;"></div></div>
        </div>
        <div class="dim-row">
          <div class="dim-header">
            <span>🧩 應用與推理 (生活數量情境轉化與多位數乘法推理)</span>
            <span id="dimScore4">0%</span>
          </div>
          <div class="progress-bar-bg"><div class="progress-bar-fill" id="dimBar4" style="width:0%;"></div></div>
        </div>
      </div>

      <!-- 錯誤迷思概念歸納 -->
      <div class="card" id="errorSummaryCard" style="display: none;">
        <h3 style="color: #b91c1c; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <span>⚠️ 待加強之直式乘法迷思盲點歸納</span>
        </h3>
        <div id="errorSummaryList" style="padding-left: 20px; line-height: 1.8; color: #7f1d1d;"></div>
      </div>

      <!-- 逐題錯題剖析與詳解 -->
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
          <h3 style="color: #1e3a8a; margin: 0;">🔍 逐題直式計算檢核與詳細步驟解析</h3>
          <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
            <label style="font-size: 0.88rem; color: #475569; display: flex; align-items: center; gap: 6px; cursor: pointer;">
              <input type="checkbox" id="chkPrintWithHints" checked style="cursor: pointer; width: 16px; height: 16px;">
              <span>💡 包含觀念破題點撥（取消為純題重練卷）</span>
            </label>
            <button class="stage-btn btn-blue" onclick="printMyRemedialWorksheet()">🖨️ 列印我的專屬錯題訂正學習單</button>
          </div>
        </div>
        <div id="reviewQuestionsContainer"></div>
      </div>

      <!-- 重新測驗按鈕 -->
      <div style="text-align: center; margin-top: 24px;">
        <button class="btn-clear-q" onclick="restartQuiz()" style="font-size: 1rem; padding: 10px 24px; background: #3b82f6; color: white; border: none;">🔄 重新進行測驗</button>
      </div>
    </div>

  </div>

  <!-- 老師管理後台 Modal -->
  <div class="modal-backdrop" id="adminModal">
    <div class="modal-content">
      <div class="modal-header">
        <div style="display: flex; align-items: center; gap: 10px;">
          <h2 style="color: #1e3a8a; font-size: 1.3rem;">🧑‍🏫 老師管理與 AI 診斷後台</h2>
          <span class="badge" style="background: #2563eb; color: white;">402 班專屬</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <button type="button" class="btn-clear-q" onclick="refreshTeacherData(true)" style="background: #10b981; color: white; border: none; font-weight: 600;">🔄 重新整理最新成績</button>
          <button class="btn-close" onclick="closeAdminModal()">&times;</button>
        </div>
      </div>

      <!-- 密碼輸入鎖定區 -->
      <div id="adminPasswordPrompt" style="padding: 30px 20px; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 12px;">🔐</div>
        <h3 style="margin-bottom: 12px; color: #1e293b;">請輸入教師管理安全通行密碼</h3>
        <p style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">本專區包含全班成績總覽、個人化學習單列印與課堂電子白板投影功能</p>
        <div style="max-width: 320px; margin: 0 auto; display: flex; gap: 8px;">
          <input type="password" id="adminPwdInput" class="form-control" placeholder="" onkeydown="if(event.key==='Enter') verifyAdminPwd()">
          <button type="button" id="btnVerifyAdminPwd" class="stage-btn btn-blue" onclick="verifyAdminPwd()">解鎖</button>
        </div>
        <!-- 安全鎖定倒數橫幅 -->
        <div id="adminLockoutBanner" style="max-width: 360px; margin: 14px auto 0; padding: 12px 14px; background: #fef2f2; border: 1.5px solid #f87171; border-radius: 8px; color: #991b1b; font-size: 0.88rem; display: none;">
          <div style="font-weight: bold; margin-bottom: 2px; display: flex; align-items: center; justify-content: center; gap: 6px;">
            <span>🚨 系統安全防護鎖定中</span>
          </div>
          <div>多次密碼錯誤，請等待 <strong id="adminLockoutCountdown" style="font-size: 1.1rem; color: #dc2626;">60</strong> 秒後再試</div>
          <div style="margin-top: 8px; border-top: 1px dashed #fca5a5; padding-top: 8px;">
            <button type="button" class="stage-btn" onclick="enableTeacherBypassMode()" style="background: #ffffff; color: #b91c1c; border: 1px solid #f87171; font-size: 0.82rem; padding: 4px 10px; font-weight: 600; box-shadow: 0 1px 2px rgba(0,0,0,0.05); width: 100%;">
              🔑 我是教師本人（立即輸入正確密碼穿透解鎖）
            </button>
          </div>
        </div>
        <div id="pwdErrorMsg" style="color: #ef4444; font-size: 0.88rem; margin-top: 10px; display: none; font-weight: 600;">密碼不正確，請重新輸入！</div>
        <div style="margin-top: 16px; font-size: 0.8rem; color: #94a3b8; display: flex; align-items: center; justify-content: center; gap: 4px;">
          <span>🛡️ 系統具備防暴力嘗試保護，連續錯誤將啟動安全鎖定</span>
        </div>
      </div>

      <!-- 管理後台主內容區 (驗證成功後顯示) -->
      <div id="adminMainContent" style="display: none;">
        <!-- Tabs 導航 -->
        <div class="tabs-nav">
          <button class="tab-btn active" onclick="switchAdminTab('tabOverview')">📊 全班成績總覽</button>
          <button class="tab-btn" onclick="switchAdminTab('tabProjector')">🎯 錯題統計與課堂講解舞台</button>
          <button class="tab-btn" onclick="switchAdminTab('tabAiReport')">🤖 AI 班級學習弱點報告</button>
          <button class="tab-btn" onclick="switchAdminTab('tabSettings')">⚙️ 系統設定</button>
        </div>

        <!-- 分頁 1：全班成績總覽 -->
        <div class="tab-pane active" id="tabOverview">
          <!-- KPI 卡片 -->
          <div class="kpi-grid">
            <div class="kpi-card">
              <div class="kpi-val" id="kpiTotalStudents">0</div>
              <div class="kpi-label">測驗總人數</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-val" id="kpiAvgScore">0</div>
              <div class="kpi-label">全班平均分</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-val" id="kpiMaxScore" style="color: #10b981;">0</div>
              <div class="kpi-label">全班最高分</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-val" id="kpiMinScore" style="color: #ef4444;">0</div>
              <div class="kpi-label">全班最低分</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-val" id="kpiPassCount">0</div>
              <div class="kpi-label">及格人數 (≥60)</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-val" id="kpiPassRate">0%</div>
              <div class="kpi-label">及格率</div>
            </div>
          </div>

          <!-- 六大分數級距卡片與動態長條圖 -->
          <h4 style="color: #1e3a8a; margin-bottom: 12px; font-size: 1rem;">📈 六大分數級距分佈統計</h4>
          <div class="tiers-grid">
            <div class="tier-card" style="border-left: 4px solid #10b981;">
              <div class="tier-title" style="color: #10b981;">💯 100分 (滿分)</div>
              <div class="tier-count" id="tierCount100">0 人</div>
              <div class="tier-pct" id="tierPct100">0%</div>
              <div class="tier-bar-bg"><div class="tier-bar-fill" id="tierBar100" style="width:0%; background:#10b981;"></div></div>
            </div>
            <div class="tier-card" style="border-left: 4px solid #3b82f6;">
              <div class="tier-title" style="color: #3b82f6;">🥇 90～99分</div>
              <div class="tier-count" id="tierCount90">0 人</div>
              <div class="tier-pct" id="tierPct90">0%</div>
              <div class="tier-bar-bg"><div class="tier-bar-fill" id="tierBar90" style="width:0%; background:#3b82f6;"></div></div>
            </div>
            <div class="tier-card" style="border-left: 4px solid #0d9488;">
              <div class="tier-title" style="color: #0d9488;">🥈 80～89分</div>
              <div class="tier-count" id="tierCount80">0 人</div>
              <div class="tier-pct" id="tierPct80">0%</div>
              <div class="tier-bar-bg"><div class="tier-bar-fill" id="tierBar80" style="width:0%; background:#0d9488;"></div></div>
            </div>
            <div class="tier-card" style="border-left: 4px solid #f59e0b;">
              <div class="tier-title" style="color: #f59e0b;">🥉 70～79分</div>
              <div class="tier-count" id="tierCount70">0 人</div>
              <div class="tier-pct" id="tierPct70">0%</div>
              <div class="tier-bar-bg"><div class="tier-bar-fill" id="tierBar70" style="width:0%; background:#f59e0b;"></div></div>
            </div>
            <div class="tier-card" style="border-left: 4px solid #6366f1;">
              <div class="tier-title" style="color: #6366f1;">📘 60～69分</div>
              <div class="tier-count" id="tierCount60">0 人</div>
              <div class="tier-pct" id="tierPct60">0%</div>
              <div class="tier-bar-bg"><div class="tier-bar-fill" id="tierBar60" style="width:0%; background:#6366f1;"></div></div>
            </div>
            <div class="tier-card" style="border-left: 4px solid #ef4444;">
              <div class="tier-title" style="color: #ef4444;">⚠️ 60分以下 (不及格)</div>
              <div class="tier-count" id="tierCountUnder60">0 人</div>
              <div class="tier-pct" id="tierPctUnder60">0%</div>
              <div class="tier-bar-bg"><div class="tier-bar-fill" id="tierBarUnder60" style="width:0%; background:#ef4444;"></div></div>
            </div>
          </div>

          <!-- 全班成績名冊與操作列 -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 10px;">
            <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
              <h4 style="color: #1e3a8a; font-size: 1rem; margin: 0; display: flex; align-items: center; gap: 6px;">
                <span>📋 全班測驗成績排名榜</span>
              </h4>
              <!-- 排序方式下拉選單 -->
              <div style="display: inline-flex; align-items: center; gap: 6px; background: #f8fafc; padding: 4px 10px; border-radius: 8px; border: 1.5px solid #cbd5e1; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
                <label for="rankingSortSelect" style="font-size: 0.85rem; font-weight: 700; color: #334155; margin: 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">
                  <span>🔀 排序方式：</span>
                </label>
                <select id="rankingSortSelect" onchange="changeRankingSortMode(this.value)" style="padding: 4px 10px; font-size: 0.85rem; font-weight: 600; border: 1px solid #94a3b8; border-radius: 6px; background: #ffffff; color: #1e293b; cursor: pointer; outline: none; transition: border-color 0.2s;">
                  <option value="score_desc" selected>🏆 成績高低 (由高至低)</option>
                  <option value="score_asc">📉 成績高低 (由低至高)</option>
                  <option value="time_desc">⏱️ 完成時間 (最新提交在前)</option>
                  <option value="time_asc">⏳ 完成時間 (最早提交在前)</option>
                  <option value="unit_mode">📘 單元模式 (依單元分組排序)</option>
                  <option value="seat_asc">🔢 學生座號 (由小到大順號)</option>
                </select>
              </div>
              <span id="batchSelectionInfo" style="font-size: 0.88rem; color: #475569; background: #e0e7ff; color: #1e40af; font-weight: 600; padding: 4px 10px; border-radius: 6px; display: none;">
                已勾選 <strong id="selectedSubmissionsCount" style="color: #2563eb;">0</strong> 筆
              </span>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
              <button type="button" class="stage-btn" id="btnBatchDeleteSubmissions" onclick="batchDeleteSelectedSubmissions()" style="background: #ef4444; color: white; display: none; padding: 6px 14px; font-size: 0.88rem; font-weight: 600; box-shadow: 0 2px 4px rgba(239, 68, 68, 0.2);">
                🗑️ 批次刪除選取成績 (0)
              </button>
              <label style="font-size: 0.88rem; color: #475569; display: flex; align-items: center; gap: 6px; cursor: pointer; margin-right: 4px;">
                <input type="checkbox" id="chkTeacherPrintWithHints" checked style="cursor: pointer; width: 16px; height: 16px;">
                <span>💡 包含觀念破題點撥</span>
              </label>
              <button type="button" class="stage-btn btn-blue" onclick="batchPrintClassWorksheets()">🖨️ 一鍵批次列印全班錯題學習單</button>
            </div>
          </div>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; text-align: left;">
              <thead>
                <tr style="background: #f1f5f9; color: #475569; border-bottom: 2px solid #e2e8f0; user-select: none;">
                  <th style="padding: 10px; width: 44px; text-align: center;">
                    <input type="checkbox" id="selectAllSubmissionsCb" onchange="toggleSelectAllSubmissions(this)" title="全選／取消全選" style="width: 18px; height: 18px; cursor: pointer;">
                  </th>
                  <th style="padding: 10px;">名次</th>
                  <th style="padding: 10px; cursor: pointer;" onclick="toggleThSort('seat')" title="點擊依座號排序">
                    座號 <span id="sortIndicatorSeat" style="font-size: 0.8rem; color: #94a3b8;">↕</span>
                  </th>
                  <th style="padding: 10px;">姓名</th>
                  <th style="padding: 10px; cursor: pointer;" onclick="toggleThSort('unit')" title="點擊依單元模式分組排序">
                    單元模式 <span id="sortIndicatorUnit" style="font-size: 0.8rem; color: #94a3b8;">↕</span>
                  </th>
                  <th style="padding: 10px; cursor: pointer;" onclick="toggleThSort('score')" title="點擊依成績高低排序">
                    得分 <span id="sortIndicatorScore" style="font-size: 0.8rem; color: #2563eb; font-weight: bold;">▼</span>
                  </th>
                  <th style="padding: 10px;">答對題數</th>
                  <th style="padding: 10px;">耗時</th>
                  <th style="padding: 10px; cursor: pointer;" onclick="toggleThSort('time')" title="點擊依完成時間排序">
                    提交時間 <span id="sortIndicatorTime" style="font-size: 0.8rem; color: #94a3b8;">↕</span>
                  </th>
                  <th style="padding: 10px; text-align: center;">操作</th>
                </tr>
              </thead>
              <tbody id="studentRankingsTbody">
                <tr><td colspan="10" style="text-align: center; padding: 20px; color: #94a3b8;">尚無測驗記錄</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 分頁 2：錯題統計與課堂講解舞台 -->
        <div class="tab-pane" id="tabProjector">
          <!-- 課堂投影電子白板教學舞台 -->
          <div class="stage-container">
            <div class="stage-header">
              <div style="display: flex; align-items: center; gap: 12px;">
                <span style="font-size: 1.8rem;">📽️</span>
                <div>
                  <div class="stage-title" id="stageQTitle">【題目加載中】</div>
                  <div style="color: #94a3b8; font-size: 0.9rem;" id="stageQSubtitle">認知維度：運算技能 | 錯誤率：0%</div>
                </div>
              </div>
              <div style="display: flex; gap: 8px;">
                <button class="stage-btn" onclick="prevStageQ()" style="background: #334155; color: white;">⬅️ 上一題</button>
                <button class="stage-btn" onclick="nextStageQ()" style="background: #334155; color: white;">下一題 ➡️</button>
              </div>
            </div>

            <!-- 直式展示大黑板 -->
            <div class="stage-math-area" id="stageMathDisplay">
              <!-- 大字體直式運算展示 -->
            </div>

            <!-- 課堂互動按鈕組 -->
            <div class="stage-controls">
              <button class="stage-btn btn-gold" onclick="toggleStageAnswer()">💡 顯示／隱藏標準答案</button>
              <button class="stage-btn btn-blue" onclick="toggleStageSteps()">📐 顯示／隱藏圖解步驟與教學詳解</button>
              <button class="stage-btn btn-purple" onclick="triggerStageAiPrompt()">🤖 AI 老師課堂提問話術</button>
            </div>

            <!-- 答案揭曉框 -->
            <div class="stage-reveal-box" id="stageAnswerBox"></div>
            <!-- 圖解步驟框 -->
            <div class="stage-reveal-box" id="stageStepsBox"></div>
            <!-- AI 話術框 -->
            <div class="stage-reveal-box" id="stageAiPromptBox"></div>
          </div>

          <!-- 全班錯題排行榜列表 -->
          <h4 style="color: #1e3a8a; margin-bottom: 12px;">🎯 全班錯題率排行榜 (依錯誤率高至低排序)</h4>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
              <thead>
                <tr style="background: #f1f5f9; color: #475569; border-bottom: 2px solid #e2e8f0;">
                  <th style="padding: 10px;">題號</th>
                  <th style="padding: 10px;">核心認知維度</th>
                  <th style="padding: 10px;">題目簡述</th>
                  <th style="padding: 10px;">診斷錯誤類型</th>
                  <th style="padding: 10px;">答錯人數</th>
                  <th style="padding: 10px;">錯誤率 (%)</th>
                  <th style="padding: 10px;">答錯學生名單</th>
                  <th style="padding: 10px; text-align: center;">課堂投影</th>
                </tr>
              </thead>
              <tbody id="questionStatsTbody">
                <tr><td colspan="8" style="text-align: center; padding: 20px; color: #94a3b8;">尚無錯題統計數據</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 分頁 3：AI 班級學習弱點報告 -->
        <div class="tab-pane" id="tabAiReport">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h4 style="color: #1e3a8a;">🤖 一鍵生成 AI 班級學習弱點與補救教學報告</h4>
            <button class="stage-btn btn-purple" id="btnGenerateAiReport" onclick="generateClassAiReport()">⚡ 生成全班學情診斷報告</button>
          </div>
          <div id="aiReportContainer" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; min-height: 250px; font-size: 1rem; line-height: 1.8; color: #1e293b; white-space: pre-line;">
            點擊上方按鈕，調用 Gemini AI 專家系統針對全班錯題與直式位值計算盲點進行深度診斷...
          </div>
        </div>

        <!-- 分頁 4：系統設定 -->
        <div class="tab-pane" id="tabSettings">
          <h4 style="color: #1e3a8a; margin-bottom: 16px;">⚙️ 系統安全性與 AI 核心配置</h4>
          <div style="display: grid; gap: 16px; max-width: 600px;">
            <div class="card" style="padding: 16px;">
              <h5 style="margin-bottom: 10px; color: #1e293b;">🔐 修改教師管理安全密碼</h5>
              <div style="display: grid; gap: 10px;">
                <input type="password" id="inputOldPwd" class="form-control" placeholder="請輸入原通行密碼">
                <input type="password" id="inputNewPwd" class="form-control" placeholder="請輸入新通行密碼 (至少 4 碼)">
                <button class="stage-btn btn-blue" onclick="changeAdminPassword()">確認修改密碼</button>
              </div>
            </div>

            <div class="card" style="padding: 16px;">
              <h5 style="margin-bottom: 8px; color: #1e293b;">🚪 測驗進場通關密碼防護設定</h5>
              <p style="font-size: 0.88rem; color: #64748b; margin-bottom: 12px;">開啟後，學生打開網址進入測驗前必須輸入通關密碼。若在課後想開放自由練習，可取消勾選直接進入。</p>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-weight: 600; color: #1e3a8a; font-size: 0.95rem;">
                  <input type="checkbox" id="checkEntryGateEnabled" style="width: 18px; height: 18px; cursor: pointer;" checked>
                  <span>啟用「打開網址前輸入通關碼」門禁保護</span>
                </label>
                <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                  <span style="font-size: 0.9rem; color: #334155; font-weight: 600;">課堂進場密碼：</span>
                  <input type="text" id="inputEntryPassword" class="form-control" style="width: 160px; padding: 8px 12px; font-weight: bold; text-align: center; letter-spacing: 2px;" placeholder="例如: 1234">
                  <button type="button" class="stage-btn btn-blue" onclick="saveEntryGateSettings()" style="padding: 8px 16px; font-size: 0.9rem;">💾 儲存進場設定</button>
                </div>
                <div id="entrySettingsSaveFeedback" style="font-size: 0.88rem; display: none; padding: 6px 10px; border-radius: 6px;"></div>
              </div>
            </div>

            <div class="card" style="padding: 16px;">
              <h5 style="margin-bottom: 8px; color: #1e293b;">🛡️ 後台防暴力嘗試保護狀態</h5>
              <p style="font-size: 0.88rem; color: #64748b; margin-bottom: 10px;">系統監控後台密碼輸入嘗試，若連續輸錯達 3 次將自動鎖定 1 分鐘，達 5 次鎖定 5 分鐘，確保全班成績資料不外流。</p>
              <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                <span id="labelSecurityStatus" style="font-size: 0.88rem; padding: 5px 12px; background: #ecfdf5; color: #065f46; font-weight: 600; border-radius: 6px; border: 1px solid #a7f3d0;">
                  🟢 安全防護狀態：正常監控中
                </span>
                <button type="button" class="stage-btn" onclick="resetAdminAuthLock()" style="background: #f1f5f9; color: #334155; border: 1px solid #cbd5e1; font-size: 0.85rem; padding: 6px 12px; font-weight: 600;">
                  🔄 重置錯誤嘗試計數
                </button>
              </div>
            </div>

            <div class="card" style="padding: 16px;">
              <h5 style="margin-bottom: 10px; color: #1e293b;">📁 雲端試算表關聯總表</h5>
              <p style="font-size: 0.9rem; color: #64748b; margin-bottom: 10px;">直接開啟獨立 Google 試算表，檢視即時成績總表、錯題分析與 AI 報告分頁：</p>
              <a href="#" id="linkDirectSpreadsheet" target="_blank" class="stage-btn btn-gold" style="text-decoration: none; display: inline-flex;">📊 一鍵直達 Google 試算表總表</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- A4 列印學習單容器 -->
  <div id="printArea"></div>

  <script>
    // ==========================================
    // 4上數學 第二單元【整數乘法直式計算】前端邏輯
    // ==========================================

    
    // ==========================================================================
    // Cloudflare Workers + D1 RPC Bridge (Transparent Adapter for google.script.run)
    // ==========================================================================
    window.google = window.google || {};
    window.google.script = window.google.script || {};
    window.google.script.run = (function() {
      function createRunner(successHandler, failureHandler) {
        var runner = {
          withSuccessHandler: function(fn) {
            return createRunner(fn, failureHandler);
          },
          withFailureHandler: function(fn) {
            return createRunner(successHandler, fn);
          }
        };

        var rpcMethods = [
          'verifyEntryPassword',
          'updateEntryGateSettings',
          'getEntryGateSettings',
          'recordTestResult',
          'getTeacherDashboardData',
          'verifyTeacherPassword',
          'getAuthSecurityStatus',
          'resetAuthLock',
          'updateTeacherPassword',
          'deleteTestResult',
          'deleteBatchTestResults',
          'generateClassAiReport',
          'askAiTutor',
          'getAiConfig',
          'updateAiConfig'
        ];

        rpcMethods.forEach(function(method) {
          runner[method] = function() {
            var args = Array.prototype.slice.call(arguments);
            fetch('/api/rpc/' + method, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ args: args })
            })
            .then(function(res) {
              if (!res.ok) throw new Error('HTTP ' + res.status);
              return res.json();
            })
            .then(function(data) {
              if (data && data.isError) {
                if (failureHandler) failureHandler(data.error);
                else console.error('RPC Error [' + method + ']:', data.error);
              } else {
                if (successHandler) successHandler(data.result);
              }
            })
            .catch(function(err) {
              if (failureHandler) failureHandler(err);
              else console.error('Fetch Error [' + method + ']:', err);
            });
          };
        });

        return runner;
      }

      return createRunner(null, null);
    })();
    
    var rawServerData = /*__SERVER_DATA__*/ null;

    var cachedDashboardData = rawServerData || null;

    var MASTER_QUESTIONS = [
      {
            "id": "Q01",
            "unit": "1-四位數×一位數",
            "unitKey": "UNIT1",
            "dimension": "運算技能",
            "category": "基礎四位數乘一位數不進位之位值運算",
            "title": "【四位數×一位數 1】用直式算算看：2132 × 3 = (　　)",
            "context": "請在下方直式計算中，依序填入乘積的每個位值數字：",
            "columns": [
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "2",
                  "1",
                  "3",
                  "2"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "3"
            ],
            "steps": [
                  {
                        "id": "final",
                        "label": "乘積",
                        "desc": "2132 × 3",
                        "expected": [
                              "6",
                              "3",
                              "9",
                              "6"
                        ]
                  }
            ],
            "explanation": "從個位依序相乘：個位 2×3=6，十位 3×3=9，百位 1×3=3，千位 2×3=6。各個位值皆不進位，得 6396。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 由個位向左依序相乘：\\n   個位 2×3=6(寫6) → 十位 3×3=9(寫9) → 百位 1×3=3(寫3) → 千位 2×3=6(寫6)\\n② 計算加總結果：最終乘積為 6396。"
      },
      {
            "id": "Q02",
            "unit": "1-四位數×一位數",
            "unitKey": "UNIT1",
            "dimension": "運算技能",
            "category": "連續進位四位數乘一位數之位值計算",
            "title": "【四位數×一位數 2】用直式算算看：1468 × 4 = (　　)",
            "context": "請在下方直式計算中，注意進位，填入每個位值數字：",
            "columns": [
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "1",
                  "4",
                  "6",
                  "8"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "4"
            ],
            "steps": [
                  {
                        "id": "final",
                        "label": "乘積",
                        "desc": "1468 × 4",
                        "expected": [
                              "5",
                              "8",
                              "7",
                              "2"
                        ]
                  }
            ],
            "explanation": "個位 8×4=32(寫2進3)；十位 6×4=24，24+3=27(寫7進2)；百位 4×4=16，16+2=18(寫8進1)；千位 1×4=4，4+1=5。答案為 5872。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 由個位向左依序相乘：\\n   個位 8×4=32(寫2進3) → 十位 6×4+進位3=27(寫7進2) → 百位 4×4+進位2=18(寫8進1) → 千位 1×4+進位1=5(寫5)\\n② 計算加總結果：最終乘積為 5872。"
      },
      {
            "id": "Q03",
            "unit": "1-四位數×一位數",
            "unitKey": "UNIT1",
            "dimension": "讀寫與位值",
            "category": "被乘數中間有0之乘法與進位處理",
            "title": "【四位數×一位數 3】用直式算算看：3085 × 6 = (　　)",
            "context": "注意被乘數中間百位有 0，請在直式各空格填入正確數字：",
            "columns": [
                  "萬",
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "3",
                  "0",
                  "8",
                  "5"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "",
                  "6"
            ],
            "steps": [
                  {
                        "id": "final",
                        "label": "乘積",
                        "desc": "3085 × 6",
                        "expected": [
                              "1",
                              "8",
                              "5",
                              "1",
                              "0"
                        ]
                  }
            ],
            "explanation": "個位 5×6=30(寫0進3)；十位 8×6=48，48+3=51(寫1進5)；百位 0×6=0，0+5=5；千位 3×6=18。答案為 18510。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 由個位向左依序相乘：\\n   個位 5×6=30(寫0進3) → 十位 8×6+進位3=51(寫1進5) → 百位 0×6+進位5=5(寫5) → 千位 3×6=18(寫8進1)\\n② 計算加總結果：最終乘積為 18510。"
      },
      {
            "id": "Q04",
            "unit": "1-四位數×一位數",
            "unitKey": "UNIT1",
            "dimension": "概念理解",
            "category": "被乘數末尾有0之位值乘法與規律",
            "title": "【四位數×一位數 4】用直式算算看：2400 × 7 = (　　)",
            "context": "被乘數末尾有兩個 0，請完成下方直式各個位值填答：",
            "columns": [
                  "萬",
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "2",
                  "4",
                  "0",
                  "0"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "",
                  "7"
            ],
            "steps": [
                  {
                        "id": "final",
                        "label": "乘積",
                        "desc": "2400 × 7",
                        "expected": [
                              "1",
                              "6",
                              "8",
                              "0",
                              "0"
                        ]
                  }
            ],
            "explanation": "個位 0×7=0；十位 0×7=0；百位 4×7=28(寫8進2)；千位 2×7=14，14+2=16。答案為 16800。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 由個位向左依序相乘：\\n   個位 0×7=0(寫0) → 十位 0×7=0(寫0) → 百位 4×7=28(寫8進2) → 千位 2×7+進位2=16(寫6進1)\\n② 計算加總結果：最終乘積為 16800。"
      },
      {
            "id": "Q05",
            "unit": "1-四位數×一位數",
            "unitKey": "UNIT1",
            "dimension": "應用與推理",
            "category": "四位數乘一位數之生活數量情境與滿萬進位",
            "title": "【四位數×一位數 5】樂樂文具店一箱鉛筆有 1250 枝，進貨 8 箱共有幾枝鉛筆？",
            "context": "請列出直式計算，依序填入每個位值數字：",
            "columns": [
                  "萬",
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "1",
                  "2",
                  "5",
                  "0"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "",
                  "8"
            ],
            "steps": [
                  {
                        "id": "final",
                        "label": "乘積",
                        "desc": "1250 × 8",
                        "expected": [
                              "1",
                              "0",
                              "0",
                              "0",
                              "0"
                        ]
                  }
            ],
            "explanation": "橫式：1250 × 8 = 10000。個位 0×8=0；十位 5×8=40(進4)；百位 2×8=16，16+4=20(進2)；千位 1×8=8，8+2=10(進1到萬位)。答：10000 枝。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 由個位向左依序相乘：\\n   個位 0×8=0(寫0) → 十位 5×8=40(寫0進4) → 百位 2×8+進位4=20(寫0進2) → 千位 1×8+進位2=10(寫0進1)\\n② 計算加總結果：最終乘積為 10000。"
      },
      {
            "id": "Q06",
            "unit": "1-四位數×一位數",
            "unitKey": "UNIT1",
            "dimension": "運算技能",
            "category": "四位數乘一位數不進位之雙倍位值運算",
            "title": "【四位數×一位數 6】用直式算算看：4312 × 2 = (　　)",
            "context": "請由低位到高位，在直式中填入各個位值乘積：",
            "columns": [
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "4",
                  "3",
                  "1",
                  "2"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "2"
            ],
            "steps": [
                  {
                        "id": "final",
                        "label": "乘積",
                        "desc": "4312 × 2",
                        "expected": [
                              "8",
                              "6",
                              "2",
                              "4"
                        ]
                  }
            ],
            "explanation": "個位 2×2=4；十位 1×2=2；百位 3×2=6；千位 4×2=8。積為 8624。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 由個位向左依序相乘：\\n   個位 2×2=4(寫4) → 十位 1×2=2(寫2) → 百位 3×2=6(寫6) → 千位 4×2=8(寫8)\\n② 計算加總結果：最終乘積為 8624。"
      },
      {
            "id": "Q07",
            "unit": "1-四位數×一位數",
            "unitKey": "UNIT1",
            "dimension": "運算技能",
            "category": "乘數為5之連續多重進位直式運算",
            "title": "【四位數×一位數 7】用直式算算看：2846 × 5 = (　　)",
            "context": "乘數是 5，請注意連續進位並填入各個位值：",
            "columns": [
                  "萬",
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "2",
                  "8",
                  "4",
                  "6"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "",
                  "5"
            ],
            "steps": [
                  {
                        "id": "final",
                        "label": "乘積",
                        "desc": "2846 × 5",
                        "expected": [
                              "1",
                              "4",
                              "2",
                              "3",
                              "0"
                        ]
                  }
            ],
            "explanation": "個位 6×5=30(寫0進3)；十位 4×5=20+3=23(寫3進2)；百位 8×5=40+2=42(寫2進4)；千位 2×5=10+4=14。答案為 14230。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 由個位向左依序相乘：\\n   個位 6×5=30(寫0進3) → 十位 4×5+進位3=23(寫3進2) → 百位 8×5+進位2=42(寫2進4) → 千位 2×5+進位4=14(寫4進1)\\n② 計算加總結果：最終乘積為 14230。"
      },
      {
            "id": "Q08",
            "unit": "1-四位數×一位數",
            "unitKey": "UNIT1",
            "dimension": "讀寫與位值",
            "category": "被乘數中間連續雙0之缺位進位處理",
            "title": "【四位數×一位數 8】用直式算算看：5009 × 4 = (　　)",
            "context": "被乘數中間百位與十位皆為 0，請依序完成直式填答：",
            "columns": [
                  "萬",
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "5",
                  "0",
                  "0",
                  "9"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "",
                  "4"
            ],
            "steps": [
                  {
                        "id": "final",
                        "label": "乘積",
                        "desc": "5009 × 4",
                        "expected": [
                              "2",
                              "0",
                              "0",
                              "3",
                              "6"
                        ]
                  }
            ],
            "explanation": "個位 9×4=36(寫6進3)；十位 0×4=0+3=3(寫3)；百位 0×4=0(寫0)；千位 5×4=20(寫20)。答案為 20036。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 由個位向左依序相乘：\\n   個位 9×4=36(寫6進3) → 十位 0×4+進位3=3(寫3) → 百位 0×4=0(寫0) → 千位 5×4=20(寫0進2)\\n② 計算加總結果：最終乘積為 20036。"
      },
      {
            "id": "Q09",
            "unit": "1-四位數×一位數",
            "unitKey": "UNIT1",
            "dimension": "概念理解",
            "category": "末尾雙0與乘數為9之大數字直式運算",
            "title": "【四位數×一位數 9】用直式算算看：3600 × 9 = (　　)",
            "context": "被乘數末尾有 00，請完成下方直式各個位值計算：",
            "columns": [
                  "萬",
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "3",
                  "6",
                  "0",
                  "0"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "",
                  "9"
            ],
            "steps": [
                  {
                        "id": "final",
                        "label": "乘積",
                        "desc": "3600 × 9",
                        "expected": [
                              "3",
                              "2",
                              "4",
                              "0",
                              "0"
                        ]
                  }
            ],
            "explanation": "個位 0×9=0；十位 0×9=0；百位 6×9=54(寫4進5)；千位 3×9=27+5=32。答案為 32400。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 由個位向左依序相乘：\\n   個位 0×9=0(寫0) → 十位 0×9=0(寫0) → 百位 6×9=54(寫4進5) → 千位 3×9+進位5=32(寫2進3)\\n② 計算加總結果：最終乘積為 32400。"
      },
      {
            "id": "Q10",
            "unit": "1-四位數×一位數",
            "unitKey": "UNIT1",
            "dimension": "應用與推理",
            "category": "四位數乘一位數生活情境應用與跨萬位計算",
            "title": "【四位數×一位數 10】果園採收水蜜桃，每籃裝 1875 顆，6 籃共裝了幾顆？",
            "context": "請列出直式計算，依序填入乘積的每個位值數字：",
            "columns": [
                  "萬",
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "1",
                  "8",
                  "7",
                  "5"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "",
                  "6"
            ],
            "steps": [
                  {
                        "id": "final",
                        "label": "乘積",
                        "desc": "1875 × 6",
                        "expected": [
                              "1",
                              "1",
                              "2",
                              "5",
                              "0"
                        ]
                  }
            ],
            "explanation": "橫式：1875 × 6 = 11250。個位 5×6=30(進3)；十位 7×6=42+3=45(進4)；百位 8×6=48+4=52(進5)；千位 1×6=6+5=11。答：11250 顆。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 由個位向左依序相乘：\\n   個位 5×6=30(寫0進3) → 十位 7×6+進位3=45(寫5進4) → 百位 8×6+進位4=52(寫2進5) → 千位 1×6+進位5=11(寫1進1)\\n② 計算加總結果：最終乘積為 11250。"
      },
      {
            "id": "Q11",
            "unit": "2-一位數×二位數",
            "unitKey": "UNIT2",
            "dimension": "概念理解",
            "category": "一位數乘二位數之分步直式位值意義與計算",
            "title": "【一位數×二位數 1】用分步直式算算看：6 × 35 = (　　)",
            "context": "請依序填入部分積 1 (6×5)、部分積 2 (6×30) 與加總乘積：",
            "columns": [
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "6"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "3",
                  "5"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "6 × 5",
                        "desc": "6 乘 5 個一",
                        "expected": [
                              "",
                              "3",
                              "0"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "6 × 30",
                        "desc": "6 乘 3 個十 (180)",
                        "expected": [
                              "1",
                              "8",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "30 + 180",
                        "expected": [
                              "2",
                              "1",
                              "0"
                        ]
                  }
            ],
            "explanation": "先算 6×5=30；再算 6×30=180；最後相加 30+180=210。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：6 × 5 ＝ 30\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：6 × 30 ＝ 180\\n   乘數十位的 3 代表「3個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：30 ＋ 180 ＝ 210\\n   兩層部分積由個位開始向左依序相加，答案為 210。"
      },
      {
            "id": "Q12",
            "unit": "2-一位數×二位數",
            "unitKey": "UNIT2",
            "dimension": "運算技能",
            "category": "一位數乘二位數直式分步計算與相加進位",
            "title": "【一位數×二位數 2】用分步直式算算看：4 × 78 = (　　)",
            "context": "請填入部分積 1 (4×8)、部分積 2 (4×70) 與加總各個位值：",
            "columns": [
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "4"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "7",
                  "8"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "4 × 8",
                        "desc": "4 乘 8 個一",
                        "expected": [
                              "",
                              "3",
                              "2"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "4 × 70",
                        "desc": "4 乘 7 個十 (280)",
                        "expected": [
                              "2",
                              "8",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "32 + 280",
                        "expected": [
                              "3",
                              "1",
                              "2"
                        ]
                  }
            ],
            "explanation": "先算 4×8=32；再算 4×70=280；相加 32+280=312。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：4 × 8 ＝ 32\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：4 × 70 ＝ 280\\n   乘數十位的 7 代表「7個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：32 ＋ 280 ＝ 312\\n   兩層部分積由個位開始向左依序相加，答案為 312。"
      },
      {
            "id": "Q13",
            "unit": "2-一位數×二位數",
            "unitKey": "UNIT2",
            "dimension": "運算技能",
            "category": "一位數乘九十幾大乘數之分步直式計算",
            "title": "【一位數×二位數 3】用分步直式算算看：8 × 92 = (　　)",
            "context": "乘數為 92，請分別填寫 8×2 與 8×90 的部分積與最後總積：",
            "columns": [
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "8"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "9",
                  "2"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "8 × 2",
                        "desc": "8 乘 2 個一",
                        "expected": [
                              "",
                              "1",
                              "6"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "8 × 90",
                        "desc": "8 乘 9 個十 (720)",
                        "expected": [
                              "7",
                              "2",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "16 + 720",
                        "expected": [
                              "7",
                              "3",
                              "6"
                        ]
                  }
            ],
            "explanation": "先算 8×2=16；再算 8×90=720；相加 16+720=736。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：8 × 2 ＝ 16\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：8 × 90 ＝ 720\\n   乘數十位的 9 代表「9個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：16 ＋ 720 ＝ 736\\n   兩層部分積由個位開始向左依序相加，答案為 736。"
      },
      {
            "id": "Q14",
            "unit": "2-一位數×二位數",
            "unitKey": "UNIT2",
            "dimension": "概念理解",
            "category": "乘數為整十數之分步直式與末尾補零位值觀念",
            "title": "【一位數×二位數 4】用分步直式算算看：7 × 40 = (　　)",
            "context": "乘數個位為 0，請依序完成各層部分積填答：",
            "columns": [
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "7"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "4",
                  "0"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "7 × 0",
                        "desc": "7 乘 0 個一",
                        "expected": [
                              "",
                              "",
                              "0"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "7 × 40",
                        "desc": "7 乘 4 個十 (280)",
                        "expected": [
                              "2",
                              "8",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "0 + 280",
                        "expected": [
                              "2",
                              "8",
                              "0"
                        ]
                  }
            ],
            "explanation": "先算 7×0=0；再算 7×40=280；加總得 280。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：7 × 0 ＝ 0\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：7 × 40 ＝ 280\\n   乘數十位的 4 代表「4個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：0 ＋ 280 ＝ 280\\n   兩層部分積由個位開始向左依序相加，答案為 280。"
      },
      {
            "id": "Q15",
            "unit": "2-一位數×二位數",
            "unitKey": "UNIT2",
            "dimension": "應用與推理",
            "category": "一位數乘二位數生活情境應用直式分步解題",
            "title": "【一位數×二位數 5】小農市集將水蜜桃每 6 顆裝成一盒，共裝了 48 盒，共有幾顆水蜜桃？",
            "context": "請列出 6 × 48 的分步直式，依序填入部分積與總顆數：",
            "columns": [
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "6"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "4",
                  "8"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "6 × 8",
                        "desc": "6 × 8 個一",
                        "expected": [
                              "",
                              "4",
                              "8"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "6 × 40",
                        "desc": "6 × 4 個十 (240)",
                        "expected": [
                              "2",
                              "4",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總顆數",
                        "desc": "48 + 240",
                        "expected": [
                              "2",
                              "8",
                              "8"
                        ]
                  }
            ],
            "explanation": "橫式：6 × 48 = 288。分步直式：6×8=48，6×40=240，48+240=288。答：288 顆。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：6 × 8 ＝ 48\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：6 × 40 ＝ 240\\n   乘數十位的 4 代表「4個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：48 ＋ 240 ＝ 288\\n   兩層部分積由個位開始向左依序相加，答案為 288。"
      },
      {
            "id": "Q16",
            "unit": "2-一位數×二位數",
            "unitKey": "UNIT2",
            "dimension": "概念理解",
            "category": "乘數個位與十位之分步直式位值分解",
            "title": "【一位數×二位數 6】用分步直式算算看：5 × 24 = (　　)",
            "context": "請依序填入 5×4、5×20 與最後加總乘積：",
            "columns": [
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "5"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "2",
                  "4"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "5 × 4",
                        "desc": "5 乘 4 個一",
                        "expected": [
                              "",
                              "2",
                              "0"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "5 × 20",
                        "desc": "5 乘 2 個十 (100)",
                        "expected": [
                              "1",
                              "0",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "20 + 100",
                        "expected": [
                              "1",
                              "2",
                              "0"
                        ]
                  }
            ],
            "explanation": "5×4=20，5×20=100，20+100=120。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：5 × 4 ＝ 20\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：5 × 20 ＝ 100\\n   乘數十位的 2 代表「2個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：20 ＋ 100 ＝ 120\\n   兩層部分積由個位開始向左依序相加，答案為 120。"
      },
      {
            "id": "Q17",
            "unit": "2-一位數×二位數",
            "unitKey": "UNIT2",
            "dimension": "運算技能",
            "category": "一位數乘二位數直式計算與連續進位處理",
            "title": "【一位數×二位數 7】用分步直式算算看：9 × 63 = (　　)",
            "context": "請在直式中填寫部分積 1 (9×3)、部分積 2 (9×60) 與加總：",
            "columns": [
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "9"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "6",
                  "3"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "9 × 3",
                        "desc": "9 乘 3 個一",
                        "expected": [
                              "",
                              "2",
                              "7"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "9 × 60",
                        "desc": "9 乘 6 個十 (540)",
                        "expected": [
                              "5",
                              "4",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "27 + 540",
                        "expected": [
                              "5",
                              "6",
                              "7"
                        ]
                  }
            ],
            "explanation": "9×3=27，9×60=540，27+540=567。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：9 × 3 ＝ 27\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：9 × 60 ＝ 540\\n   乘數十位的 6 代表「6個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：27 ＋ 540 ＝ 567\\n   兩層部分積由個位開始向左依序相加，答案為 567。"
      },
      {
            "id": "Q18",
            "unit": "2-一位數×二位數",
            "unitKey": "UNIT2",
            "dimension": "運算技能",
            "category": "乘數八十幾之大數字分步直式位值對齊",
            "title": "【一位數×二位數 8】用分步直式算算看：3 × 86 = (　　)",
            "context": "請填寫 3×6、3×80 及加總各個位值數字：",
            "columns": [
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "3"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "8",
                  "6"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "3 × 6",
                        "desc": "3 乘 6 個一",
                        "expected": [
                              "",
                              "1",
                              "8"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "3 × 80",
                        "desc": "3 乘 8 個十 (240)",
                        "expected": [
                              "2",
                              "4",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "18 + 240",
                        "expected": [
                              "2",
                              "5",
                              "8"
                        ]
                  }
            ],
            "explanation": "3×6=18，3×80=240，18+240=258。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：3 × 6 ＝ 18\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：3 × 80 ＝ 240\\n   乘數十位的 8 代表「8個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：18 ＋ 240 ＝ 258\\n   兩層部分積由個位開始向左依序相加，答案為 258。"
      },
      {
            "id": "Q19",
            "unit": "2-一位數×二位數",
            "unitKey": "UNIT2",
            "dimension": "概念理解",
            "category": "乘數為整十數五十之直式位值規律與進位",
            "title": "【一位數×二位數 9】用分步直式算算看：8 × 50 = (　　)",
            "context": "乘數末尾有 0，請依序完成兩層部分積與加總：",
            "columns": [
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "8"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "5",
                  "0"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "8 × 0",
                        "desc": "8 乘 0 個一",
                        "expected": [
                              "",
                              "",
                              "0"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "8 × 50",
                        "desc": "8 乘 5 個十 (400)",
                        "expected": [
                              "4",
                              "0",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "0 + 400",
                        "expected": [
                              "4",
                              "0",
                              "0"
                        ]
                  }
            ],
            "explanation": "8×0=0，8×50=400，加總為 400。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：8 × 0 ＝ 0\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：8 × 50 ＝ 400\\n   乘數十位的 5 代表「5個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：0 ＋ 400 ＝ 400\\n   兩層部分積由個位開始向左依序相加，答案為 400。"
      },
      {
            "id": "Q20",
            "unit": "2-一位數×二位數",
            "unitKey": "UNIT2",
            "dimension": "應用與推理",
            "category": "生活數量情境中一位數乘二位數直式分步解答",
            "title": "【一位數×二位數 10】園遊會攤位套圈圈遊戲，每人有 7 個圈圈，共有 65 位同學參加，共用了幾個圈圈？",
            "context": "請列出 7 × 65 的分步直式填答：",
            "columns": [
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "7"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "6",
                  "5"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "7 × 5",
                        "desc": "7 × 5 個一",
                        "expected": [
                              "",
                              "3",
                              "5"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "7 × 60",
                        "desc": "7 × 6 個十 (420)",
                        "expected": [
                              "4",
                              "2",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總個數",
                        "desc": "35 + 420",
                        "expected": [
                              "4",
                              "5",
                              "5"
                        ]
                  }
            ],
            "explanation": "橫式：7 × 65 = 455。分步直式：7×5=35，7×60=420，35+420=455。答：455 個。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：7 × 5 ＝ 35\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：7 × 60 ＝ 420\\n   乘數十位的 6 代表「6個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：35 ＋ 420 ＝ 455\\n   兩層部分積由個位開始向左依序相加，答案為 455。"
      },
      {
            "id": "Q21",
            "unit": "3-二位數×二位數",
            "unitKey": "UNIT3",
            "dimension": "運算技能",
            "category": "基礎二位數乘二位數直式分步計算與位值對齊",
            "title": "【二位數×二位數 1】用直式算算看：23 × 14 = (　　)",
            "context": "請依序填入 23×4、23×10 與加總乘積：",
            "columns": [
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "2",
                  "3"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "1",
                  "4"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "23 × 4",
                        "desc": "23 乘 4 個一",
                        "expected": [
                              "",
                              "",
                              "9",
                              "2"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "23 × 10",
                        "desc": "23 乘 1 個十 (230)",
                        "expected": [
                              "",
                              "2",
                              "3",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "92 + 230",
                        "expected": [
                              "",
                              "3",
                              "2",
                              "2"
                        ]
                  }
            ],
            "explanation": "先算 23×4=92；再算 23×10=230；相加 92+230=322。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：23 × 4 ＝ 92\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：23 × 10 ＝ 230\\n   乘數十位的 1 代表「1個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：92 ＋ 230 ＝ 322\\n   兩層部分積由個位開始向左依序相加，答案為 322。"
      },
      {
            "id": "Q22",
            "unit": "3-二位數×二位數",
            "unitKey": "UNIT3",
            "dimension": "運算技能",
            "category": "二位數乘二位數連續兩次進位與加總進位處理",
            "title": "【二位數×二位數 2】用直式算算看：38 × 45 = (　　)",
            "context": "請注意兩層乘積與最後加總的連續進位：",
            "columns": [
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "3",
                  "8"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "4",
                  "5"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "38 × 5",
                        "desc": "38 乘 5 個一 (190)",
                        "expected": [
                              "",
                              "1",
                              "9",
                              "0"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "38 × 40",
                        "desc": "38 乘 4 個十 (1520)",
                        "expected": [
                              "1",
                              "5",
                              "2",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "190 + 1520",
                        "expected": [
                              "1",
                              "7",
                              "1",
                              "0"
                        ]
                  }
            ],
            "explanation": "先算 38×5=190；再算 38×40=1520；相加 190+1520=1710。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：38 × 5 ＝ 190\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：38 × 40 ＝ 1520\\n   乘數十位的 4 代表「4個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：190 ＋ 1520 ＝ 1710\\n   兩層部分積由個位開始向左依序相加，答案為 1710。"
      },
      {
            "id": "Q23",
            "unit": "3-二位數×二位數",
            "unitKey": "UNIT3",
            "dimension": "概念理解",
            "category": "乘數為整十數之二位數直式運算與位值對齊",
            "title": "【二位數×二位數 3】用直式算算看：46 × 50 = (　　)",
            "context": "乘數個位是 0，請依序填寫兩層直式部分積：",
            "columns": [
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "4",
                  "6"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "5",
                  "0"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "46 × 0",
                        "desc": "46 乘 0 個一",
                        "expected": [
                              "",
                              "",
                              "",
                              "0"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "46 × 50",
                        "desc": "46 乘 5 個十 (2300)",
                        "expected": [
                              "2",
                              "3",
                              "0",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "0 + 2300",
                        "expected": [
                              "2",
                              "3",
                              "0",
                              "0"
                        ]
                  }
            ],
            "explanation": "46×0=0；46×50=2300；相加為 2300。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：46 × 0 ＝ 0\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：46 × 50 ＝ 2300\\n   乘數十位的 5 代表「5個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：0 ＋ 2300 ＝ 2300\\n   兩層部分積由個位開始向左依序相加，答案為 2300。"
      },
      {
            "id": "Q24",
            "unit": "3-二位數×二位數",
            "unitKey": "UNIT3",
            "dimension": "讀寫與位值",
            "category": "大數字二位數乘二位數直式計算與中間補零",
            "title": "【二位數×二位數 4】用直式算算看：87 × 69 = (　　)",
            "context": "兩數皆為八十與六十幾，請特別留意相加時的位值對齊與中間補零：",
            "columns": [
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "8",
                  "7"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "6",
                  "9"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "87 × 9",
                        "desc": "87 乘 9 個一 (783)",
                        "expected": [
                              "",
                              "7",
                              "8",
                              "3"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "87 × 60",
                        "desc": "87 乘 6 個十 (5220)",
                        "expected": [
                              "5",
                              "2",
                              "2",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "783 + 5220",
                        "expected": [
                              "6",
                              "0",
                              "0",
                              "3"
                        ]
                  }
            ],
            "explanation": "87×9=783；87×60=5220；783+5220=6003。注意百位與十位相加滿十進位後留 0！",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：87 × 9 ＝ 783\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：87 × 60 ＝ 5220\\n   乘數十位的 6 代表「6個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：783 ＋ 5220 ＝ 6003\\n   兩層部分積由個位開始向左依序相加，答案為 6003。"
      },
      {
            "id": "Q25",
            "unit": "3-二位數×二位數",
            "unitKey": "UNIT3",
            "dimension": "應用與推理",
            "category": "二位數乘二位數之生活數量乘法情境應用題",
            "title": "【二位數×二位數 5】學校舉辦校外教學，每張學生優待票 75 元，四年級共有 64 位同學購買，共需付多少元？",
            "context": "請列出 75 × 64 的直式算式並填入答案：",
            "columns": [
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "7",
                  "5"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "6",
                  "4"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "75 × 4",
                        "desc": "75 × 4 (300)",
                        "expected": [
                              "",
                              "3",
                              "0",
                              "0"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "75 × 60",
                        "desc": "75 × 6 個十 (4500)",
                        "expected": [
                              "4",
                              "5",
                              "0",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "總金額",
                        "desc": "300 + 4500",
                        "expected": [
                              "4",
                              "8",
                              "0",
                              "0"
                        ]
                  }
            ],
            "explanation": "橫式：75 × 64 = 4800。75×4=300，75×60=4500，300+4500=4800。答：4800 元。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：75 × 4 ＝ 300\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：75 × 60 ＝ 4500\\n   乘數十位的 6 代表「6個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：300 ＋ 4500 ＝ 4800\\n   兩層部分積由個位開始向左依序相加，答案為 4800。"
      },
      {
            "id": "Q26",
            "unit": "3-二位數×二位數",
            "unitKey": "UNIT3",
            "dimension": "概念理解",
            "category": "基礎二位數乘法直式位值分解與相加",
            "title": "【二位數×二位數 6】用直式算算看：32 × 21 = (　　)",
            "context": "請依序填入 32×1、32×20 與加總乘積：",
            "columns": [
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "3",
                  "2"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "2",
                  "1"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "32 × 1",
                        "desc": "32 乘 1 個一",
                        "expected": [
                              "",
                              "",
                              "3",
                              "2"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "32 × 20",
                        "desc": "32 乘 2 個十 (640)",
                        "expected": [
                              "",
                              "6",
                              "4",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "32 + 640",
                        "expected": [
                              "",
                              "6",
                              "7",
                              "2"
                        ]
                  }
            ],
            "explanation": "32×1=32，32×20=640，32+640=672。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：32 × 1 ＝ 32\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：32 × 20 ＝ 640\\n   乘數十位的 2 代表「2個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：32 ＋ 640 ＝ 672\\n   兩層部分積由個位開始向左依序相加，答案為 672。"
      },
      {
            "id": "Q27",
            "unit": "3-二位數×二位數",
            "unitKey": "UNIT3",
            "dimension": "運算技能",
            "category": "二位數乘二位數進位分步計算與相加進位",
            "title": "【二位數×二位數 7】用直式算算看：54 × 36 = (　　)",
            "context": "請填寫 54×6、54×30 及最後加總結果：",
            "columns": [
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "5",
                  "4"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "3",
                  "6"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "54 × 6",
                        "desc": "54 乘 6 個一 (324)",
                        "expected": [
                              "",
                              "3",
                              "2",
                              "4"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "54 × 30",
                        "desc": "54 乘 3 個十 (1620)",
                        "expected": [
                              "1",
                              "6",
                              "2",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "324 + 1620",
                        "expected": [
                              "1",
                              "9",
                              "4",
                              "4"
                        ]
                  }
            ],
            "explanation": "54×6=324，54×30=1620，324+1620=1944。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：54 × 6 ＝ 324\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：54 × 30 ＝ 1620\\n   乘數十位的 3 代表「3個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：324 ＋ 1620 ＝ 1944\\n   兩層部分積由個位開始向左依序相加，答案為 1944。"
      },
      {
            "id": "Q28",
            "unit": "3-二位數×二位數",
            "unitKey": "UNIT3",
            "dimension": "運算技能",
            "category": "大二位數乘法七十乘八十幾之大數相乘",
            "title": "【二位數×二位數 8】用直式算算看：79 × 83 = (　　)",
            "context": "請在各空格填入正確位值數字：",
            "columns": [
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "7",
                  "9"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "8",
                  "3"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "79 × 3",
                        "desc": "79 乘 3 個一 (237)",
                        "expected": [
                              "",
                              "2",
                              "3",
                              "7"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "79 × 80",
                        "desc": "79 乘 8 個十 (6320)",
                        "expected": [
                              "6",
                              "3",
                              "2",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "237 + 6320",
                        "expected": [
                              "6",
                              "5",
                              "5",
                              "7"
                        ]
                  }
            ],
            "explanation": "79×3=237，79×80=6320，237+6320=6557。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：79 × 3 ＝ 237\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：79 × 80 ＝ 6320\\n   乘數十位的 8 代表「8個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：237 ＋ 6320 ＝ 6557\\n   兩層部分積由個位開始向左依序相加，答案為 6557。"
      },
      {
            "id": "Q29",
            "unit": "3-二位數×二位數",
            "unitKey": "UNIT3",
            "dimension": "讀寫與位值",
            "category": "整十數乘法位值對齊與補零規範",
            "title": "【二位數×二位數 9】用直式算算看：68 × 40 = (　　)",
            "context": "乘數個位為 0，請依序完成兩層填答：",
            "columns": [
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "6",
                  "8"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "4",
                  "0"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "68 × 0",
                        "desc": "68 乘 0 個一",
                        "expected": [
                              "",
                              "",
                              "",
                              "0"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "68 × 40",
                        "desc": "68 乘 4 個十 (2720)",
                        "expected": [
                              "2",
                              "7",
                              "2",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "0 + 2720",
                        "expected": [
                              "2",
                              "7",
                              "2",
                              "0"
                        ]
                  }
            ],
            "explanation": "68×0=0，68×40=2720，加總為 2720。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：68 × 0 ＝ 0\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：68 × 40 ＝ 2720\\n   乘數十位的 4 代表「4個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：0 ＋ 2720 ＝ 2720\\n   兩層部分積由個位開始向左依序相加，答案為 2720。"
      },
      {
            "id": "Q30",
            "unit": "3-二位數×二位數",
            "unitKey": "UNIT3",
            "dimension": "應用與推理",
            "category": "生活購物總額之二位數乘法應用計算",
            "title": "【二位數×二位數 10】文具店每本精裝筆記本特價 45 元，四維國小購買了 38 本，一共要付多少元？",
            "context": "請列出 45 × 38 的直式分步算式填寫答案：",
            "columns": [
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "4",
                  "5"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "3",
                  "8"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "45 × 8",
                        "desc": "45 × 8 (360)",
                        "expected": [
                              "",
                              "3",
                              "6",
                              "0"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "45 × 30",
                        "desc": "45 × 3 個十 (1350)",
                        "expected": [
                              "1",
                              "3",
                              "5",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "總金額",
                        "desc": "360 + 1350",
                        "expected": [
                              "1",
                              "7",
                              "1",
                              "0"
                        ]
                  }
            ],
            "explanation": "橫式：45 × 38 = 1710。45×8=360，45×30=1350，360+1350=1710。答：1710 元。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：45 × 8 ＝ 360\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：45 × 30 ＝ 1350\\n   乘數十位的 3 代表「3個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：360 ＋ 1350 ＝ 1710\\n   兩層部分積由個位開始向左依序相加，答案為 1710。"
      },
      {
            "id": "Q31",
            "unit": "4-四位數×二位數",
            "unitKey": "UNIT4",
            "dimension": "運算技能",
            "category": "基礎四位數乘二位數直式分步與位值對齊",
            "title": "【四位數×二位數 1】用直式算算看：1234 × 23 = (　　)",
            "context": "請分別算出個位乘積 (1234×3)、十位乘積 (1234×20) 與加總乘積：",
            "columns": [
                  "萬",
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "1",
                  "2",
                  "3",
                  "4"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "2",
                  "3"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "1234 × 3",
                        "desc": "1234 × 3 個一",
                        "expected": [
                              "",
                              "3",
                              "7",
                              "0",
                              "2"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "1234 × 20",
                        "desc": "1234 × 2 個十 (24680)",
                        "expected": [
                              "2",
                              "4",
                              "6",
                              "8",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "3702 + 24680",
                        "expected": [
                              "2",
                              "8",
                              "3",
                              "8",
                              "2"
                        ]
                  }
            ],
            "explanation": "先算 1234×3=3702；再算 1234×20=24680；相加 3702+24680=28382。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：1234 × 3 ＝ 3702\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：1234 × 20 ＝ 24680\\n   乘數十位的 2 代表「2個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：3702 ＋ 24680 ＝ 28382\\n   兩層部分積由個位開始向左依序相加，答案為 28382。"
      },
      {
            "id": "Q32",
            "unit": "4-四位數×二位數",
            "unitKey": "UNIT4",
            "dimension": "運算技能",
            "category": "四位數乘二位數連續進位與跨萬位計算",
            "title": "【四位數×二位數 2】用直式算算看：2156 × 45 = (　　)",
            "context": "乘積較大，請注意兩層乘積與相加時的滿十進位：",
            "columns": [
                  "萬",
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "2",
                  "1",
                  "5",
                  "6"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "4",
                  "5"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "2156 × 5",
                        "desc": "2156 × 5 (10780)",
                        "expected": [
                              "1",
                              "0",
                              "7",
                              "8",
                              "0"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "2156 × 40",
                        "desc": "2156 × 4 個十 (86240)",
                        "expected": [
                              "8",
                              "6",
                              "2",
                              "4",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "10780 + 86240",
                        "expected": [
                              "9",
                              "7",
                              "0",
                              "2",
                              "0"
                        ]
                  }
            ],
            "explanation": "先算 2156×5=10780；再算 2156×40=86240；相加 10780+86240=97020。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：2156 × 5 ＝ 10780\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：2156 × 40 ＝ 86240\\n   乘數十位的 4 代表「4個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：10780 ＋ 86240 ＝ 97020\\n   兩層部分積由個位開始向左依序相加，答案為 97020。"
      },
      {
            "id": "Q33",
            "unit": "4-四位數×二位數",
            "unitKey": "UNIT4",
            "dimension": "讀寫與位值",
            "category": "被乘數中間有0且乘積跨入六位數十萬位處理",
            "title": "【四位數×二位數 3】用直式算算看：3048 × 36 = (　　)",
            "context": "被乘數百位為 0 且答案超過十萬，請填入定位板各個位值：",
            "columns": [
                  "十萬",
                  "萬",
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "3",
                  "0",
                  "4",
                  "8"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "",
                  "3",
                  "6"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "3048 × 6",
                        "desc": "3048 × 6 (18288)",
                        "expected": [
                              "",
                              "1",
                              "8",
                              "2",
                              "8",
                              "8"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "3048 × 30",
                        "desc": "3048 × 3 個十 (91440)",
                        "expected": [
                              "",
                              "9",
                              "1",
                              "4",
                              "4",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "18288 + 91440",
                        "expected": [
                              "1",
                              "0",
                              "9",
                              "7",
                              "2",
                              "8"
                        ]
                  }
            ],
            "explanation": "先算 3048×6=18288；再算 3048×30=91440；相加 18288+91440=109728。注意萬位相加 1+9=10 向十萬位進 1！",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：3048 × 6 ＝ 18288\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：3048 × 30 ＝ 91440\\n   乘數十位的 3 代表「3個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：18288 ＋ 91440 ＝ 109728\\n   兩層部分積由個位開始向左依序相加，答案為 109728。"
      },
      {
            "id": "Q34",
            "unit": "4-四位數×二位數",
            "unitKey": "UNIT4",
            "dimension": "概念理解",
            "category": "被乘數末尾雙0與乘數為整十數之位值規律",
            "title": "【四位數×二位數 4】用直式算算看：4500 × 50 = (　　)",
            "context": "被乘數與乘數末尾皆有 0，請依序完成兩層部分積填答：",
            "columns": [
                  "十萬",
                  "萬",
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "4",
                  "5",
                  "0",
                  "0"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "",
                  "5",
                  "0"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "4500 × 0",
                        "desc": "4500 × 0 個一",
                        "expected": [
                              "",
                              "",
                              "",
                              "",
                              "",
                              "0"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "4500 × 50",
                        "desc": "4500 × 5 個十 (225000)",
                        "expected": [
                              "2",
                              "2",
                              "5",
                              "0",
                              "0",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "0 + 225000",
                        "expected": [
                              "2",
                              "2",
                              "5",
                              "0",
                              "0",
                              "0"
                        ]
                  }
            ],
            "explanation": "先算 4500×0=0；再算 4500×50=225000；加總為 225000。末尾共有三個 0！",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：4500 × 0 ＝ 0\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：4500 × 50 ＝ 225000\\n   乘數十位的 5 代表「5個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：0 ＋ 225000 ＝ 225000\\n   兩層部分積由個位開始向左依序相加，答案為 225000。"
      },
      {
            "id": "Q35",
            "unit": "4-四位數×二位數",
            "unitKey": "UNIT4",
            "dimension": "應用與推理",
            "category": "生活大宗採購預算中四位數乘二位數直式應用題",
            "title": "【四位數×二位數 5】學校採購籃球架設備，一組特價 3680 元，買了 25 組一共需要多少元？",
            "context": "請列出 3680 × 25 的直式分步乘法並計算出總金額：",
            "columns": [
                  "萬",
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "3",
                  "6",
                  "8",
                  "0"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "2",
                  "5"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "3680 × 5",
                        "desc": "3680 × 5 (18400)",
                        "expected": [
                              "1",
                              "8",
                              "4",
                              "0",
                              "0"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "3680 × 20",
                        "desc": "3680 × 2 個十 (73600)",
                        "expected": [
                              "7",
                              "3",
                              "6",
                              "0",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "總金額",
                        "desc": "18400 + 73600",
                        "expected": [
                              "9",
                              "2",
                              "0",
                              "0",
                              "0"
                        ]
                  }
            ],
            "explanation": "橫式：3680 × 25 = 92000。分步計算：3680×5=18400，3680×20=73600，18400+73600=92000。答：92000 元。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：3680 × 5 ＝ 18400\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：3680 × 20 ＝ 73600\\n   乘數十位的 2 代表「2個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：18400 ＋ 73600 ＝ 92000\\n   兩層部分積由個位開始向左依序相加，答案為 92000。"
      },
      {
            "id": "Q36",
            "unit": "4-四位數×二位數",
            "unitKey": "UNIT4",
            "dimension": "概念理解",
            "category": "四位數乘二位數基礎分步直式位值分解",
            "title": "【四位數×二位數 6】用直式算算看：2314 × 12 = (　　)",
            "context": "請依序填入 2314×2、2314×10 與加總乘積：",
            "columns": [
                  "萬",
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "2",
                  "3",
                  "1",
                  "4"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "1",
                  "2"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "2314 × 2",
                        "desc": "2314 × 2 個一",
                        "expected": [
                              "",
                              "4",
                              "6",
                              "2",
                              "8"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "2314 × 10",
                        "desc": "2314 × 1 個十 (23140)",
                        "expected": [
                              "2",
                              "3",
                              "1",
                              "4",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "4628 + 23140",
                        "expected": [
                              "2",
                              "7",
                              "7",
                              "6",
                              "8"
                        ]
                  }
            ],
            "explanation": "2314×2=4628，2314×10=23140，4628+23140=27768。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：2314 × 2 ＝ 4628\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：2314 × 10 ＝ 23140\\n   乘數十位的 1 代表「1個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：4628 ＋ 23140 ＝ 27768\\n   兩層部分積由個位開始向左依序相加，答案為 27768。"
      },
      {
            "id": "Q37",
            "unit": "4-四位數×二位數",
            "unitKey": "UNIT4",
            "dimension": "運算技能",
            "category": "被乘數末尾有0之四位數乘二位數分步計算",
            "title": "【四位數×二位數 7】用直式算算看：1650 × 34 = (　　)",
            "context": "注意被乘數個位是 0，請依序填寫直式分步乘積：",
            "columns": [
                  "萬",
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "1",
                  "6",
                  "5",
                  "0"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "3",
                  "4"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "1650 × 4",
                        "desc": "1650 × 4 (6600)",
                        "expected": [
                              "",
                              "6",
                              "6",
                              "0",
                              "0"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "1650 × 30",
                        "desc": "1650 × 3 個十 (49500)",
                        "expected": [
                              "4",
                              "9",
                              "5",
                              "0",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "6600 + 49500",
                        "expected": [
                              "5",
                              "6",
                              "1",
                              "0",
                              "0"
                        ]
                  }
            ],
            "explanation": "1650×4=6600，1650×30=49500，6600+49500=56100。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：1650 × 4 ＝ 6600\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：1650 × 30 ＝ 49500\\n   乘數十位的 3 代表「3個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：6600 ＋ 49500 ＝ 56100\\n   兩層部分積由個位開始向左依序相加，答案為 56100。"
      },
      {
            "id": "Q38",
            "unit": "4-四位數×二位數",
            "unitKey": "UNIT4",
            "dimension": "運算技能",
            "category": "四位數乘二位數進位跨十萬位運算",
            "title": "【四位數×二位數 8】用直式算算看：4125 × 48 = (　　)",
            "context": "請填寫 4125×8、4125×40 與加總各個位值數字：",
            "columns": [
                  "十萬",
                  "萬",
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "4",
                  "1",
                  "2",
                  "5"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "",
                  "4",
                  "8"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "4125 × 8",
                        "desc": "4125 × 8 (33000)",
                        "expected": [
                              "",
                              "3",
                              "3",
                              "0",
                              "0",
                              "0"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "4125 × 40",
                        "desc": "4125 × 4 個十 (165000)",
                        "expected": [
                              "1",
                              "6",
                              "5",
                              "0",
                              "0",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "33000 + 165000",
                        "expected": [
                              "1",
                              "9",
                              "8",
                              "0",
                              "0",
                              "0"
                        ]
                  }
            ],
            "explanation": "4125×8=33000，4125×40=165000，33000+165000=198000。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：4125 × 8 ＝ 33000\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：4125 × 40 ＝ 165000\\n   乘數十位的 4 代表「4個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：33000 ＋ 165000 ＝ 198000\\n   兩層部分積由個位開始向左依序相加，答案為 198000。"
      },
      {
            "id": "Q39",
            "unit": "4-四位數×二位數",
            "unitKey": "UNIT4",
            "dimension": "讀寫與位值",
            "category": "被乘數中間有0且末尾有0之直式乘法位值綜合檢核",
            "title": "【四位數×二位數 9】用直式算算看：5080 × 62 = (　　)",
            "context": "被乘數百位有 0，個位也是 0，請依序完成直式填答：",
            "columns": [
                  "十萬",
                  "萬",
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "",
                  "5",
                  "0",
                  "8",
                  "0"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "",
                  "6",
                  "2"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "5080 × 2",
                        "desc": "5080 × 2 (10160)",
                        "expected": [
                              "",
                              "1",
                              "0",
                              "1",
                              "6",
                              "0"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "5080 × 60",
                        "desc": "5080 × 6 個十 (304800)",
                        "expected": [
                              "3",
                              "0",
                              "4",
                              "8",
                              "0",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "加總積",
                        "desc": "10160 + 304800",
                        "expected": [
                              "3",
                              "1",
                              "4",
                              "9",
                              "6",
                              "0"
                        ]
                  }
            ],
            "explanation": "5080×2=10160，5080×60=304800，10160+304800=314960。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：5080 × 2 ＝ 10160\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：5080 × 60 ＝ 304800\\n   乘數十位的 6 代表「6個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：10160 ＋ 304800 ＝ 314960\\n   兩層部分積由個位開始向左依序相加，答案為 314960。"
      },
      {
            "id": "Q40",
            "unit": "4-四位數×二位數",
            "unitKey": "UNIT4",
            "dimension": "應用與推理",
            "category": "農糧產銷生活數量情境中四位數乘二位數直式解答",
            "title": "【四位數×二位數 10】農會收購優質白米，一公噸批發價為 2850 元，某米商訂購了 35 公噸，一共需付多少元？",
            "context": "請列出 2850 × 35 的直式分步計算並算出總款項：",
            "columns": [
                  "萬",
                  "千",
                  "百",
                  "十",
                  "個"
            ],
            "topDigits": [
                  "",
                  "2",
                  "8",
                  "5",
                  "0"
            ],
            "operator": "×",
            "bottomDigits": [
                  "",
                  "",
                  "",
                  "3",
                  "5"
            ],
            "steps": [
                  {
                        "id": "part1",
                        "label": "2850 × 5",
                        "desc": "2850 × 5 (14250)",
                        "expected": [
                              "1",
                              "4",
                              "2",
                              "5",
                              "0"
                        ]
                  },
                  {
                        "id": "part2",
                        "label": "2850 × 30",
                        "desc": "2850 × 3 個十 (85500)",
                        "expected": [
                              "8",
                              "5",
                              "5",
                              "0",
                              "0"
                        ],
                        "allowOmitZero": true
                  },
                  {
                        "id": "final",
                        "label": "總金額",
                        "desc": "14250 + 85500",
                        "expected": [
                              "9",
                              "9",
                              "7",
                              "5",
                              "0"
                        ]
                  }
            ],
            "explanation": "橫式：2850 × 35 = 99750。2850×5=14250，2850×30=85500，14250+85500=99750。答：99750 元。",
            "stepExplanation": "【分步運算要領與詳解】：\\n① 第一層（個位積）：2850 × 5 ＝ 14250\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：2850 × 30 ＝ 85500\\n   乘數十位的 3 代表「3個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：14250 ＋ 85500 ＝ 99750\\n   兩層部分積由個位開始向左依序相加，答案為 99750。"
      }
];

    var currentUnitMode = "ALL";
    
    // ==========================================
    // 🎲 Fisher-Yates 隨機洗牌演算法
    // ==========================================
    function fisherYatesShuffle(arr) {
      var array = [].concat(arr);
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

    function padDigits(val, length) {
      var s = (val !== "" && val !== null && val !== undefined) ? String(val) : "";
      var arr = [];
      for (var i = 0; i < length - s.length; i++) {
        arr.push("");
      }
      for (var k = 0; k < s.length; k++) {
        arr.push(s[k]);
      }
      return arr;
    }

    function formatStepExplanationHtml(text) {
      if (!text) return "";
      var str = String(text).replace(/\\\\n/g, "\\n");
      var lines = str.split("\\n");
      return lines.map(function(line) {
        return line
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }).join("<br>");
    }


    function createGridBoardHtml(topDigits, bottomDigits, isMultiStep, isLarge) {
      var t = topDigits || [];
      var b = bottomDigits || [];
      var t0 = t[0] || "", t1 = t[1] || "", t2 = t[2] || "", t3 = t[3] || "", t4 = t[4] || "", t5 = t[5] || "";
      var b0 = b[0] || "", b1 = b[1] || "", b2 = b[2] || "", b3 = b[3] || "", b4 = b[4] || "", b5 = b[5] || "";
      var boardClass = "print-grid-board" + (isLarge ? " board-lg" : "");

      var out = '<div class="' + boardClass + '">' +
        '<div class="print-grid-row print-grid-header">' +
          '<div class="print-grid-cell op-cell"></div>' +
          '<div class="print-grid-cell">十萬</div>' +
          '<div class="print-grid-cell">萬</div>' +
          '<div class="print-grid-cell">千</div>' +
          '<div class="print-grid-cell">百</div>' +
          '<div class="print-grid-cell">十</div>' +
          '<div class="print-grid-cell">個</div>' +
        '</div>' +
        '<div class="print-grid-row">' +
          '<div class="print-grid-cell op-cell"></div>' +
          '<div class="print-grid-cell">' + t0 + '</div>' +
          '<div class="print-grid-cell">' + t1 + '</div>' +
          '<div class="print-grid-cell">' + t2 + '</div>' +
          '<div class="print-grid-cell">' + t3 + '</div>' +
          '<div class="print-grid-cell">' + t4 + '</div>' +
          '<div class="print-grid-cell">' + t5 + '</div>' +
        '</div>' +
        '<div class="print-grid-row">' +
          '<div class="print-grid-cell op-cell">×</div>' +
          '<div class="print-grid-cell">' + b0 + '</div>' +
          '<div class="print-grid-cell">' + b1 + '</div>' +
          '<div class="print-grid-cell">' + b2 + '</div>' +
          '<div class="print-grid-cell">' + b3 + '</div>' +
          '<div class="print-grid-cell">' + b4 + '</div>' +
          '<div class="print-grid-cell">' + b5 + '</div>' +
        '</div>' +
        '<div class="print-grid-line"></div>' +
        '<div class="print-grid-row">' +
          '<div class="print-grid-cell op-cell"></div>' +
          '<div class="print-grid-cell"></div>' +
          '<div class="print-grid-cell"></div>' +
          '<div class="print-grid-cell"></div>' +
          '<div class="print-grid-cell"></div>' +
          '<div class="print-grid-cell"></div>' +
          '<div class="print-grid-cell"></div>' +
        '</div>';

      if (isMultiStep) {
        out += '<div class="print-grid-row">' +
          '<div class="print-grid-cell op-cell">+</div>' +
          '<div class="print-grid-cell"></div>' +
          '<div class="print-grid-cell"></div>' +
          '<div class="print-grid-cell"></div>' +
          '<div class="print-grid-cell"></div>' +
          '<div class="print-grid-cell"></div>' +
          '<div class="print-grid-cell"></div>' +
        '</div>' +
        '<div class="print-grid-line"></div>' +
        '<div class="print-grid-row">' +
          '<div class="print-grid-cell op-cell"></div>' +
          '<div class="print-grid-cell"></div>' +
          '<div class="print-grid-cell"></div>' +
          '<div class="print-grid-cell"></div>' +
          '<div class="print-grid-cell"></div>' +
          '<div class="print-grid-cell"></div>' +
          '<div class="print-grid-cell"></div>' +
        '</div>';
      }
      out += '</div>';
      return out;
    }

    // ==========================================
    // 🛡️ 題目數學邏輯與直式填答一致性絕對防禦 (Runtime Integrity Defense)
    // 保證題幹算式、直式乘數、各層部分積與最終加總 100% 絕對一致
    // ==========================================
    function sanitizeQuestionMathIntegrity(q) {
      if (!q || !q.topDigits || !q.bottomDigits || !q.steps) return q;
      var topStr = q.topDigits.filter(function(d) { return d !== ""; }).join("");
      var botStr = q.bottomDigits.filter(function(d) { return d !== ""; }).join("");
      var A = parseInt(topStr, 10);
      var B = parseInt(botStr, 10);
      if (isNaN(A) || isNaN(B)) return q;

      var cLen = q.columns ? q.columns.length : 6;

      // 單層直式（如 UNIT1 四位數 × 一位數）
      if (q.steps.length === 1 && q.steps[0].id === "final") {
        var p = A * B;
        q.steps[0].expected = padDigits(p, cLen);
        q.steps[0].desc = A + " × " + B;
        return q;
      }

      // 多層直式（UNIT2, UNIT3, UNIT4）
      var bOnes = B % 10;
      var bTens = Math.floor(B / 10);
      var p1 = A * bOnes;
      var p2 = A * (bTens * 10);
      var pTot = A * B;

      var p1Step = q.steps.find(function(s) { return s.id === "part1"; });
      var p2Step = q.steps.find(function(s) { return s.id === "part2"; });
      var finStep = q.steps.find(function(s) { return s.id === "final"; });

      if (p1Step) {
        if (bOnes === 0) {
          // 【極重要教學原則】：整十數乘法第一層個位積只需填寫一格 0，高位留空不設輸入框！
          var exp = [];
          for (var i = 0; i < cLen - 1; i++) exp.push("");
          exp.push("0");
          p1Step.expected = exp;
          p1Step.label = A + " × 0";
          p1Step.desc = A + " × 0";
        } else {
          p1Step.expected = padDigits(p1, cLen);
          p1Step.label = A + " × " + bOnes;
          p1Step.desc = A + " 乘 " + bOnes + " 個一";
        }
      }

      if (p2Step) {
        p2Step.expected = padDigits(p2, cLen);
        p2Step.label = A + " × " + (bTens * 10);
        p2Step.desc = A + " 乘 " + bTens + " 個十";
        p2Step.allowOmitZero = true;
      }

      if (finStep) {
        finStep.expected = padDigits(pTot, cLen);
        finStep.desc = (bOnes === 0 ? ("0 + " + p2) : (p1 + " + " + p2));
      }

      if (bOnes === 0) {
        q.context = "乘數個位為 0，請在直式第一層個位填入 0，並依序算出十位乘積 (" + A + "×" + (bTens * 10) + ") 與加總乘積：";
        q.explanation = "先算 " + A + "×0=0（在直式個位填入 0 即可）；再算 " + A + "×" + (bTens * 10) + "=" + p2 + "；相加為 " + pTot + "。";
        q.stepExplanation = "【分步運算要領與詳解】：\\n① 第一層（個位積）：" + A + " × 0 ＝ 0\\n   乘數個位為 0，直式第一層只需在個位填入一格 0 即可，其餘高位不需填寫。\\n② 第二層（十位積）：" + A + " × " + (bTens * 10) + " ＝ " + p2 + "\\n   乘數十位的 " + bTens + " 代表「" + bTens + "個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：0 ＋ " + p2 + " ＝ " + pTot + "\\n   兩層部分積加總，答案為 " + pTot + "。";
      } else {
        q.context = "請分別算出個位乘積 (" + A + "×" + bOnes + ")、十位乘積 (" + A + "×" + (bTens * 10) + ") 與加總乘積：";
        q.explanation = "先算 " + A + "×" + bOnes + "=" + p1 + "；再算 " + A + "×" + (bTens * 10) + "=" + p2 + "；相加 " + p1 + "+" + p2 + "=" + pTot + "。";
        q.stepExplanation = "【分步運算要領與詳解】：\\n① 第一層（個位積）：" + A + " × " + bOnes + " ＝ " + p1 + "\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：" + A + " × " + (bTens * 10) + " ＝ " + p2 + "\\n   乘數十位的 " + bTens + " 代表「" + bTens + "個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：" + p1 + " ＋ " + p2 + " ＝ " + pTot + "\\n   兩層部分積由個位開始向左依序相加，答案為 " + pTot + "。";
      }

      return q;
    }

    // ==========================================
    // 🧮 乘法直式題目動態生成引擎 (支援無限題目產生)
    // ==========================================
    function generateDynamicMultiplicationQuestion(unitKey, seq) {
      if (unitKey === "UNIT1") {
        // 四位數 × 一位數
        var A = 1200 + (seq * 383 + Math.floor(Math.random() * 80)) % 7600;
        var B = 2 + (seq * 3 + Math.floor(Math.random() * 3)) % 8;
        var P = A * B;
        var useTenTh = P >= 10000;
        var cols = useTenTh ? ["萬", "千", "百", "十", "個"] : ["千", "百", "十", "個"];
        var cLen = cols.length;

        var bDigits = [];
        for (var bIdx = 0; bIdx < cLen - 1; bIdx++) bDigits.push("");
        bDigits.push(String(B));

        return {
          id: "GEN_U1_" + (seq < 10 ? "0" + seq : seq),
          unit: "1-四位數×一位數",
          unitKey: "UNIT1",
          dimension: (seq % 4 === 0 ? "概念理解" : (seq % 4 === 1 ? "讀寫與位值" : (seq % 4 === 2 ? "運算技能" : "應用與推理"))),
          category: "四位數乘一位數直式位值計算",
          title: "【四位數×一位數】用直式算算看：" + A + " × " + B + " = (　　)",
          context: "請在下方直式計算中，依序填入乘積的每個位值數字：",
          columns: cols,
          topDigits: padDigits(A, cLen),
          operator: "×",
          bottomDigits: bDigits,
          steps: [
            {
              id: "final",
              label: "乘積",
              desc: A + " × " + B,
              expected: padDigits(P, cLen)
            }
          ],
          explanation: "從個位開始依序相乘：橫式 " + A + " × " + B + " = " + P + "。",
          stepExplanation: "【分步運算要領與詳解】：\\n① 由個位向左依序相乘：橫式 " + A + " × " + B + " = " + P + "\\n② 計算加總結果：最終乘積為 " + P + "。"
        };
      } else if (unitKey === "UNIT2") {
        // 一位數 × 二位數
        var A = 3 + (seq * 2 + Math.floor(Math.random() * 2)) % 7;
        var bTens = 1 + (seq * 3 + Math.floor(Math.random() * 3)) % 8; // 1~8
        var isWholeTen = (seq % 4 === 0);
        var bOnes = isWholeTen ? 0 : (1 + (seq * 7 + Math.floor(Math.random() * 5)) % 9);
        var B = bTens * 10 + bOnes;
        var p1 = A * bOnes;
        var p2 = A * (bTens * 10);
        var pTot = p1 + p2;
        var cols = pTot >= 1000 ? ["千", "百", "十", "個"] : ["百", "十", "個"];
        var cLen = cols.length;

        var p1Expected;
        if (bOnes === 0) {
          p1Expected = [];
          for (var i = 0; i < cLen - 1; i++) p1Expected.push("");
          p1Expected.push("0");
        } else {
          p1Expected = padDigits(p1, cLen);
        }

        return {
          id: "GEN_U2_" + (seq < 10 ? "0" + seq : seq),
          unit: "2-一位數×二位數",
          unitKey: "UNIT2",
          dimension: (seq % 4 === 0 ? "概念理解" : (seq % 4 === 1 ? "讀寫與位值" : (seq % 4 === 2 ? "運算技能" : "應用與推理"))),
          category: (bOnes === 0 ? "乘數為整十數之分步直式與個位填0位值計算" : "一位數乘二位數之分步直式位值意義與計算"),
          title: "【一位數×二位數】用分步直式算算看：" + A + " × " + B + " = (　　)",
          context: (bOnes === 0)
            ? ("乘數個位為 0，請在直式第一層個位填入 0，並依序填寫十位乘積 (" + A + "×" + (bTens * 10) + ") 與加總乘積：")
            : ("請依序填入部分積 1 (" + A + "×" + bOnes + ")、部分積 2 (" + A + "×" + (bTens * 10) + ") 與加總乘積："),
          columns: cols,
          topDigits: padDigits(A, cLen),
          operator: "×",
          bottomDigits: padDigits(B, cLen),
          steps: [
            {
              id: "part1",
              label: A + " × " + bOnes,
              desc: A + " 乘 " + bOnes + " 個一",
              expected: p1Expected
            },
            {
              id: "part2",
              label: A + " × " + (bTens * 10),
              desc: A + " 乘 " + bTens + " 個十 (" + p2 + ")",
              expected: padDigits(p2, cLen),
              allowOmitZero: true
            },
            {
              id: "final",
              label: "加總積",
              desc: (bOnes === 0 ? ("0 + " + p2) : (p1 + " + " + p2)),
              expected: padDigits(pTot, cLen)
            }
          ],
          explanation: (bOnes === 0)
            ? ("先算 " + A + "×0=0（在直式個位填入 0 即可）；再算 " + A + "×" + (bTens * 10) + "=" + p2 + "；相加為 " + pTot + "。")
            : ("先算 " + A + "×" + bOnes + "=" + p1 + "；再算 " + A + "×" + (bTens * 10) + "=" + p2 + "；相加 " + p1 + "+" + p2 + "=" + pTot + "。"),
          stepExplanation: (bOnes === 0)
            ? ("【分步運算要領與詳解】：\\n① 第一層（個位積）：" + A + " × 0 ＝ 0\\n   乘數個位為 0，直式第一層只需在個位填入一格 0 即可，其餘高位不需填寫。\\n② 第二層（十位積）：" + A + " × " + (bTens * 10) + " ＝ " + p2 + "\\n   乘數十位的 " + bTens + " 代表「" + bTens + "個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：0 ＋ " + p2 + " ＝ " + pTot + "\\n   兩層部分積由個位開始向左依序相加，答案為 " + pTot + "。")
            : ("【分步運算要領與詳解】：\\n① 第一層（個位積）：" + A + " × " + bOnes + " ＝ " + p1 + "\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：" + A + " × " + (bTens * 10) + " ＝ " + p2 + "\\n   乘數十位的 " + bTens + " 代表「" + bTens + "個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：" + p1 + " ＋ " + p2 + " ＝ " + pTot + "\\n   兩層部分積由個位開始向左依序相加，答案為 " + pTot + "。")
        };
      } else if (unitKey === "UNIT3") {
        // 二位數 × 二位數
        var A = 18 + (seq * 17 + Math.floor(Math.random() * 5)) % 78;
        var bTens = 1 + (seq * 5 + Math.floor(Math.random() * 3)) % 8; // 1~8
        var isWholeTen = (seq % 4 === 0);
        var bOnes = isWholeTen ? 0 : (1 + (seq * 7 + Math.floor(Math.random() * 5)) % 9);
        var B = bTens * 10 + bOnes;
        var p1 = A * bOnes;
        var p2 = A * (bTens * 10);
        var pTot = p1 + p2;
        var cols = pTot >= 10000 ? ["萬", "千", "百", "十", "個"] : ["千", "百", "十", "個"];
        var cLen = cols.length;

        var p1Expected;
        if (bOnes === 0) {
          p1Expected = [];
          for (var i = 0; i < cLen - 1; i++) p1Expected.push("");
          p1Expected.push("0");
        } else {
          p1Expected = padDigits(p1, cLen);
        }

        return {
          id: "GEN_U3_" + (seq < 10 ? "0" + seq : seq),
          unit: "3-二位數×二位數",
          unitKey: "UNIT3",
          dimension: (seq % 4 === 0 ? "概念理解" : (seq % 4 === 1 ? "讀寫與位值" : (seq % 4 === 2 ? "運算技能" : "應用與推理"))),
          category: (bOnes === 0 ? "乘數為整十數之二位數直式運算與位值對齊" : "二位數乘二位數分步直式計算"),
          title: "【二位數×二位數】用分步直式算算看：" + A + " × " + B + " = (　　)",
          context: (bOnes === 0)
            ? ("乘數個位為 0，請在直式第一層個位填入 0，並依序填寫十位乘積 (" + A + "×" + (bTens * 10) + ") 與加總乘積：")
            : ("請填入部分積 1 (" + A + "×" + bOnes + ")、部分積 2 (" + A + "×" + (bTens * 10) + ") 與加總乘積："),
          columns: cols,
          topDigits: padDigits(A, cLen),
          operator: "×",
          bottomDigits: padDigits(B, cLen),
          steps: [
            {
              id: "part1",
              label: A + " × " + bOnes,
              desc: A + " 乘 " + bOnes + " 個一",
              expected: p1Expected
            },
            {
              id: "part2",
              label: A + " × " + (bTens * 10),
              desc: A + " 乘 " + bTens + " 個十 (" + p2 + ")",
              expected: padDigits(p2, cLen),
              allowOmitZero: true
            },
            {
              id: "final",
              label: "加總積",
              desc: (bOnes === 0 ? ("0 + " + p2) : (p1 + " + " + p2)),
              expected: padDigits(pTot, cLen)
            }
          ],
          explanation: (bOnes === 0)
            ? ("先算 " + A + "×0=0（在直式個位填入 0 即可）；再算 " + A + "×" + (bTens * 10) + "=" + p2 + "；相加為 " + pTot + "。")
            : ("先算 " + A + "×" + bOnes + "=" + p1 + "；再算 " + A + "×" + (bTens * 10) + "=" + p2 + "；相加 " + p1 + "+" + p2 + "=" + pTot + "。"),
          stepExplanation: (bOnes === 0)
            ? ("【分步運算要領與詳解】：\\n① 第一層（個位積）：" + A + " × 0 ＝ 0\\n   乘數個位為 0，直式第一層只需在個位填入一格 0 即可，其餘高位不需填寫。\\n② 第二層（十位積）：" + A + " × " + (bTens * 10) + " ＝ " + p2 + "\\n   乘數十位的 " + bTens + " 代表「" + bTens + "個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：0 ＋ " + p2 + " ＝ " + pTot + "\\n   兩層部分積由個位開始向左依序相加，答案為 " + pTot + "。")
            : ("【分步運算要領與詳解】：\\n① 第一層（個位積）：" + A + " × " + bOnes + " ＝ " + p1 + "\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：" + A + " × " + (bTens * 10) + " ＝ " + p2 + "\\n   乘數十位的 " + bTens + " 代表「" + bTens + "個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：" + p1 + " ＋ " + p2 + " ＝ " + pTot + "\\n   兩層部分積由個位開始向左依序相加，答案為 " + pTot + "。")
        };
      } else {
        // UNIT4: 四位數 × 二位數
        var A = 1250 + (seq * 277 + Math.floor(Math.random() * 50)) % 6500;
        var bTens = 1 + (seq * 3 + Math.floor(Math.random() * 3)) % 8; // 1~8
        var isWholeTen = (seq % 4 === 0);
        var bOnes = isWholeTen ? 0 : (1 + (seq * 7 + Math.floor(Math.random() * 5)) % 9);
        var B = bTens * 10 + bOnes;
        var p1 = A * bOnes;
        var p2 = A * (bTens * 10);
        var pTot = p1 + p2;
        var cols = pTot >= 100000 ? ["十萬", "萬", "千", "百", "十", "個"] : ["萬", "千", "百", "十", "個"];
        var cLen = cols.length;

        var p1Expected;
        if (bOnes === 0) {
          // 【極重要教學原則】：乘數個位為 0 (如 4334 × 20)，第一層只需在個位填入一格 0 即可，其餘高位留空不設輸入格！
          p1Expected = [];
          for (var i = 0; i < cLen - 1; i++) p1Expected.push("");
          p1Expected.push("0");
        } else {
          p1Expected = padDigits(p1, cLen);
        }

        return {
          id: "GEN_U4_" + (seq < 10 ? "0" + seq : seq),
          unit: "4-四位數×二位數",
          unitKey: "UNIT4",
          dimension: (seq % 4 === 0 ? "概念理解" : (seq % 4 === 1 ? "讀寫與位值" : (seq % 4 === 2 ? "運算技能" : "應用與推理"))),
          category: (bOnes === 0 ? "乘數為整十數之四位數直式分步與個位填0計算" : "四位數乘二位數直式分步與連續進位計算"),
          title: "【四位數×二位數】用直式算算看：" + A + " × " + B + " = (　　)",
          context: (bOnes === 0)
            ? ("乘數個位為 0，請在直式第一層個位填入 0，並依序算出十位乘積 (" + A + "×" + (bTens * 10) + ") 與加總乘積：")
            : ("請分別算出個位乘積 (" + A + "×" + bOnes + ")、十位乘積 (" + A + "×" + (bTens * 10) + ") 與加總乘積："),
          columns: cols,
          topDigits: padDigits(A, cLen),
          operator: "×",
          bottomDigits: padDigits(B, cLen),
          steps: [
            {
              id: "part1",
              label: A + " × " + bOnes,
              desc: A + " × " + bOnes,
              expected: p1Expected
            },
            {
              id: "part2",
              label: A + " × " + (bTens * 10),
              desc: A + " × " + bTens + " 個十",
              expected: padDigits(p2, cLen),
              allowOmitZero: true
            },
            {
              id: "final",
              label: "加總乘積",
              desc: (bOnes === 0 ? ("0 + " + p2) : (p1 + " + " + p2)),
              expected: padDigits(pTot, cLen)
            }
          ],
          explanation: (bOnes === 0)
            ? ("先算 " + A + "×0=0（在直式個位填入 0 即可）；再算 " + A + "×" + (bTens * 10) + "=" + p2 + "；相加為 " + pTot + "。")
            : ("先算 " + A + "×" + bOnes + "=" + p1 + "；再算 " + A + "×" + (bTens * 10) + "=" + p2 + "；相加 " + p1 + "+" + p2 + "=" + pTot + "。"),
          stepExplanation: (bOnes === 0)
            ? ("【分步運算要領與詳解】：\\n① 第一層（個位積）：" + A + " × 0 ＝ 0\\n   乘數個位為 0，直式第一層只需在個位填入一格 0 即可，其餘高位不需填寫。\\n② 第二層（十位積）：" + A + " × " + (bTens * 10) + " ＝ " + p2 + "\\n   乘數十位的 " + bTens + " 代表「" + bTens + "個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：0 ＋ " + p2 + " ＝ " + pTot + "\\n   兩層部分積加總，答案為 " + pTot + "。")
            : ("【分步運算要領與詳解】：\\n① 第一層（個位積）：" + A + " × " + bOnes + " ＝ " + p1 + "\\n   由個位向左逐位相乘，注意進位數字。\\n② 第二層（十位積）：" + A + " × " + (bTens * 10) + " ＝ " + p2 + "\\n   乘數十位的 " + bTens + " 代表「" + bTens + "個十」，末尾為 0，積對齊十位！\\n③ 第三層（分步加總）：" + p1 + " ＋ " + p2 + " ＝ " + pTot + "\\n   兩層部分積由個位開始向左依序相加，答案為 " + pTot + "。")
        };
      }
    }

    // ==========================================
    // 🎛️ 各專項獨立題數設定與出題控制器
    // ==========================================
    var currentUnitCounts = [5, 5, 5, 5]; // U1, U2, U3, U4
    var currentQuizScopeTitle = "全單元綜合挑戰 (20 題)";

    function composeQuizQuestions(counts, shuffle) {
      var result = [];
      var unitKeys = ["UNIT1", "UNIT2", "UNIT3", "UNIT4"];

      for (var u = 0; u < 4; u++) {
        var uKey = unitKeys[u];
        var needed = counts[u] || 0;
        if (needed <= 0) continue;

        var pool = MASTER_QUESTIONS.filter(function(q) { return q.unitKey === uKey; });
        pool = fisherYatesShuffle([].concat(pool));

        var taken = pool.slice(0, needed);
        result = result.concat(taken);

        if (needed > pool.length) {
          var genCount = needed - pool.length;
          for (var g = 0; g < genCount; g++) {
            result.push(generateDynamicMultiplicationQuestion(uKey, g + pool.length + 1));
          }
        }
      }

      if (shuffle) {
        result = fisherYatesShuffle(result);
      }

      result = result.map(sanitizeQuestionMathIntegrity);

      return result;
    }

    function toggleCustomRatioPanel() {
      var panel = document.getElementById("customRatioPanel");
      var btn = document.getElementById("btnToggleCustomRatio");
      if (!panel) return;
      var isHidden = panel.style.display === "none";
      panel.style.display = isHidden ? "block" : "none";
      if (btn) btn.textContent = isHidden ? "✖️ 收合專項題數設定" : "🎛️ 自訂每個專項題數";
      if (isHidden) {
        updateUnitCountUI();
      }
    }

    function adjustUnitCount(unitIdx, delta) {
      currentUnitCounts[unitIdx] = Math.max(0, Math.min(30, currentUnitCounts[unitIdx] + delta));
      updateUnitCountUI();
    }

    function setUnitCountDirect(unitIdx, val) {
      currentUnitCounts[unitIdx] = Math.max(0, Math.min(30, Number(val) || 0));
      updateUnitCountUI();
    }

    function onUnitCountInput(unitIdx, val) {
      var num = parseInt(val, 10);
      if (isNaN(num)) num = 0;
      currentUnitCounts[unitIdx] = Math.max(0, Math.min(30, num));
      updateUnitCountUI();
    }

    function applyAllUnitsCountPreset(countPerUnit) {
      currentUnitCounts = [countPerUnit, countPerUnit, countPerUnit, countPerUnit];
      updateUnitCountUI();
    }

    function updateUnitCountUI() {
      var total = 0;
      for (var i = 0; i < 4; i++) {
        var inp = document.getElementById("inputCountU" + (i + 1));
        if (inp) inp.value = currentUnitCounts[i];
        total += currentUnitCounts[i];

        // 更新快捷按鈕 active 樣式
        [0, 3, 5, 10].forEach(function(sc) {
          var btn = document.getElementById("btnU" + (i + 1) + "_" + sc);
          if (btn) {
            if (currentUnitCounts[i] === sc) btn.classList.add("active");
            else btn.classList.remove("active");
          }
        });
      }

      for (var j = 0; j < 4; j++) {
        var pct = total > 0 ? Math.round((currentUnitCounts[j] / total) * 100) : 0;
        var pctBadge = document.getElementById("pctBadgeU" + (j + 1));
        if (pctBadge) pctBadge.textContent = "佔比：" + pct + "%";

        var seg = document.getElementById("segU" + (j + 1));
        if (seg) seg.style.width = pct + "%";
      }

      var sumText = document.getElementById("totalCountSumText");
      if (sumText) sumText.textContent = total;

      var ratioBadge = document.getElementById("ratioSumBadge");
      if (ratioBadge) {
        if (total === 0) {
          ratioBadge.textContent = "⚠️ 請至少為一個單元設定題數！";
          ratioBadge.style.color = "#ef4444";
        } else {
          ratioBadge.textContent = "合計：100% (" + total + " 題)";
          ratioBadge.style.color = "#10b981";
        }
      }
    }

    function applyCustomUnitCountsQuiz() {
      var total = currentUnitCounts[0] + currentUnitCounts[1] + currentUnitCounts[2] + currentUnitCounts[3];
      if (total <= 0) {
        alert("請至少為一個單元選擇至少 1 題出題！");
        return;
      }

      var chk = document.getElementById("chkShuffleQuestions");
      var shuffle = chk ? chk.checked : true;

      ACTIVE_QUESTIONS = composeQuizQuestions(currentUnitCounts, shuffle);

      var activeUnits = [];
      var uNames = ["U1", "U2", "U3", "U4"];
      for (var i = 0; i < 4; i++) {
        if (currentUnitCounts[i] > 0) {
          activeUnits.push(uNames[i] + "×" + currentUnitCounts[i]);
        }
      }

      var isSingleUnit = activeUnits.length === 1;
      if (isSingleUnit) {
        var singleIdx = -1;
        for (var k = 0; k < 4; k++) {
          if (currentUnitCounts[k] > 0) singleIdx = k;
        }
        var titles = [
          "單元 1：四位數 × 一位數 專項 (" + total + " 題)",
          "單元 2：一位數 × 二位數 專項 (" + total + " 題)",
          "單元 3：二位數 × 二位數 專項 (" + total + " 題)",
          "單元 4：四位數 × 二位數 專項 (" + total + " 題)"
        ];
        currentQuizScopeTitle = titles[singleIdx];
        currentUnitMode = "UNIT" + (singleIdx + 1);
      } else {
        currentQuizScopeTitle = "自訂專項題數 (" + total + "題: " + activeUnits.join(", ") + ")";
        currentUnitMode = "CUSTOM";
      }

      var hBadge = document.getElementById("currentUnitHeaderBadge");
      if (hBadge) hBadge.textContent = currentQuizScopeTitle;

      var sBadge = document.getElementById("currentScopeSummaryBadge");
      if (sBadge) sBadge.textContent = currentQuizScopeTitle;

      var qPills = document.querySelectorAll(".unit-pill");
      qPills.forEach(function(p) { p.classList.remove("active"); });

      resetQuizTimer(false);
      renderQuizQuestions();
      updateReviewCardContent(isSingleUnit ? currentUnitMode : "ALL");

      var target = document.getElementById("quizTimerBar") || document.getElementById("quizSection");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function applyQuickPreset(key) {
      var qPills = document.querySelectorAll(".unit-pill");
      qPills.forEach(function(p) { p.classList.remove("active"); });

      if (key === "ALL") {
        currentUnitCounts = [5, 5, 5, 5];
        var b = document.getElementById("btnModeALL");
        if (b) b.classList.add("active");
      } else if (key === "QUICK10") {
        currentUnitCounts = [3, 3, 2, 2];
        var b = document.getElementById("btnModeQuick10");
        if (b) b.classList.add("active");
      } else if (key === "UNIT1") {
        currentUnitCounts = [10, 0, 0, 0];
        var b = document.getElementById("btnModeU1");
        if (b) b.classList.add("active");
      } else if (key === "UNIT2") {
        currentUnitCounts = [0, 10, 0, 0];
        var b = document.getElementById("btnModeU2");
        if (b) b.classList.add("active");
      } else if (key === "UNIT3") {
        currentUnitCounts = [0, 0, 10, 0];
        var b = document.getElementById("btnModeU3");
        if (b) b.classList.add("active");
      } else if (key === "UNIT4") {
        currentUnitCounts = [0, 0, 0, 10];
        var b = document.getElementById("btnModeU4");
        if (b) b.classList.add("active");
      }

      updateUnitCountUI();
      applyCustomUnitCountsQuiz();
    }

    var ACTIVE_QUESTIONS = [];
    
    // ==========================================
    // ⏱️ 測驗動態計時與即時答題進度核心模組
    // ==========================================
    var quizTimerInterval = null;
    var timerElapsedSeconds = 0;
    var timerMode = "countup";
    var countdownTotalSeconds = 0;
    var isTimerPaused = false;

    function startQuizTimer() {
      stopQuizTimer();
      isTimerPaused = false;
      updateTimerControlsUI();
      updateClockDisplay();

      quizTimerInterval = setInterval(function() {
        if (isTimerPaused) return;

        timerElapsedSeconds++;

        if (timerMode === "countup") {
          updateClockDisplay();
        } else {
          var remaining = countdownTotalSeconds - timerElapsedSeconds;
          if (remaining <= 0) {
            timerElapsedSeconds = countdownTotalSeconds;
            updateClockDisplay();
            stopQuizTimer();
            alert("⏰ 測驗時間已到！設定的作答時間已結束，系統正在為您提交並計算成績...");
            submitQuiz(true);
          } else {
            updateClockDisplay();
            if (remaining === 60) {
              alert("⚠️ 測驗剩餘時間僅剩 1 分鐘，請把握時間檢核並交卷！");
            }
          }
        }
      }, 1000);
    }

    function stopQuizTimer() {
      if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
      }
    }

    function resetQuizTimer(askConfirm) {
      if (askConfirm && timerElapsedSeconds > 5) {
        if (!confirm("確定要重設測驗計時嗎？這將會把計時器歸零重新開始。")) {
          return;
        }
      }
      timerElapsedSeconds = 0;
      isTimerPaused = false;
      startQuizTimer();
    }

    function changeTimerMode(newMode) {
      timerMode = newMode;
      timerElapsedSeconds = 0;
      isTimerPaused = false;

      if (newMode === "10min") countdownTotalSeconds = 600;
      else if (newMode === "15min") countdownTotalSeconds = 900;
      else if (newMode === "20min") countdownTotalSeconds = 1200;
      else if (newMode === "30min") countdownTotalSeconds = 1800;
      else countdownTotalSeconds = 0;

      var badge = document.getElementById("timerModeBadge");
      if (badge) {
        badge.textContent = newMode === "countup" ? "正向累計" : "限時倒數";
        badge.style.background = newMode === "countup" ? "#e0e7ff" : "#fef3c7";
        badge.style.color = newMode === "countup" ? "#3730a3" : "#92400e";
      }

      startQuizTimer();
    }

    function toggleTimerPause() {
      isTimerPaused = !isTimerPaused;
      updateTimerControlsUI();
    }

    function updateTimerControlsUI() {
      var overlay = document.getElementById("pauseOverlay");
      var btn = document.getElementById("btnPauseTimer");
      if (overlay) overlay.style.display = isTimerPaused ? "flex" : "none";
      if (btn) btn.textContent = isTimerPaused ? "▶️ 繼續" : "⏸️ 暫停";
    }

    function updateClockDisplay() {
      var clockEl = document.getElementById("liveTimerClock");
      var barEl = document.getElementById("quizTimerBar");
      if (!clockEl) return;

      var displaySec = 0;
      if (timerMode === "countup") {
        displaySec = timerElapsedSeconds;
        if (barEl) {
          barEl.classList.remove("warning");
          barEl.classList.remove("danger");
        }
      } else {
        var remaining = Math.max(0, countdownTotalSeconds - timerElapsedSeconds);
        displaySec = remaining;

        if (barEl) {
          if (remaining <= 10) {
            barEl.classList.remove("warning");
            barEl.classList.add("danger");
          } else if (remaining <= 60) {
            barEl.classList.add("warning");
            barEl.classList.remove("danger");
          } else {
            barEl.classList.remove("warning");
            barEl.classList.remove("danger");
          }
        }
      }

      var m = Math.floor(displaySec / 60);
      var s = displaySec % 60;
      clockEl.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    }

    function updateOverallProgress() {
      if (!ACTIVE_QUESTIONS || ACTIVE_QUESTIONS.length === 0) return;
      var totalQuestions = ACTIVE_QUESTIONS.length;
      var answeredCount = 0;

      ACTIVE_QUESTIONS.forEach(function(q) {
        var inputs = getQuestionInputs(q.id);
        if (inputs.length > 0) {
          var filled = inputs.filter(function(i) { return i.value.trim() !== ""; }).length;
          if (filled === inputs.length) {
            answeredCount++;
          }
        }
      });

      var pct = Math.round((answeredCount / totalQuestions) * 100);

      var elCount = document.getElementById("answeredCountText");
      var elTotal = document.getElementById("totalQuestionsProgressText");
      var elPct = document.getElementById("answeredPercentText");
      var elBar = document.getElementById("timerProgressFill");

      if (elCount) elCount.textContent = answeredCount;
      if (elTotal) elTotal.textContent = totalQuestions;
      if (elPct) elPct.textContent = pct + "%";
      if (elBar) elBar.style.width = pct + "%";
    }

    function formatTimeDetailed(sec) {
      sec = Math.max(0, Number(sec) || 0);
      if (sec < 60) return sec + " 秒";
      var m = Math.floor(sec / 60);
      var s = sec % 60;
      return m + " 分 " + s + " 秒 (共 " + sec + " 秒)";
    }

    function formatSeconds(sec) {
      sec = Math.max(0, Number(sec) || 0);
      if (sec < 60) return sec + " 秒";
      var m = Math.floor(sec / 60);
      var s = sec % 60;
      return m + "分" + (s > 0 ? s + "秒" : "");
    }

    var testStartTime = Date.now();
    var currentStageIndex = 0;
    var userExamResult = null;

    // ==========================================
    // 🚪 測驗進場通關密碼門禁邏輯 (Entrance Gate)
    // ==========================================

    function initEntryGate() {
      var gateSec = document.getElementById("entryGateSection");
      var header = document.getElementById("mainHeader");
      var mainContainer = document.getElementById("mainAppContainer");

      var gateEnabled = true;
      if (cachedDashboardData && cachedDashboardData.entryGateSettings) {
        gateEnabled = (cachedDashboardData.entryGateSettings.enabled !== false);
      }

      var isUnlocked = (sessionStorage.getItem("quiz_entry_unlocked") === "true");

      if (!gateEnabled || isUnlocked) {
        if (gateSec) gateSec.style.display = "none";
        if (header) header.style.display = "flex";
        if (mainContainer) mainContainer.style.display = "block";
      } else {
        if (gateSec) gateSec.style.display = "flex";
        if (header) header.style.display = "none";
        if (mainContainer) mainContainer.style.display = "none";
        var pwdInput = document.getElementById("entryGatePwdInput");
        if (pwdInput) {
          setTimeout(function() { pwdInput.focus(); }, 200);
        }
      }
    }

    function submitEntryGatePassword() {
      var pwdInput = document.getElementById("entryGatePwdInput");
      var errBox = document.getElementById("entryGateErrorMsg");
      var btn = document.getElementById("btnEntrySubmit");

      if (!pwdInput) return;
      var pwd = (pwdInput.value || "").trim();

      if (!pwd) {
        if (errBox) {
          errBox.style.display = "block";
          errBox.textContent = "請輸入測驗通關密碼！";
        }
        pwdInput.focus();
        return;
      }

      if (errBox) errBox.style.display = "none";
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = "<span>⏳ 驗證通關碼中...</span>";
      }

      function unlockSuccess() {
        sessionStorage.setItem("quiz_entry_unlocked", "true");
        var gateSec = document.getElementById("entryGateSection");
        var header = document.getElementById("mainHeader");
        var mainContainer = document.getElementById("mainAppContainer");

        if (gateSec) {
          gateSec.style.transition = "opacity 0.3s ease, transform 0.3s ease";
          gateSec.style.opacity = "0";
          gateSec.style.transform = "scale(0.98)";
          setTimeout(function() {
            gateSec.style.display = "none";
            if (header) {
              header.style.display = "flex";
              header.style.animation = "fadeInDown 0.4s ease";
            }
            if (mainContainer) {
              mainContainer.style.display = "block";
              mainContainer.style.animation = "fadeIn 0.4s ease";
            }
          }, 300);
        } else {
          if (header) header.style.display = "flex";
          if (mainContainer) mainContainer.style.display = "block";
        }
      }

      if (typeof google !== "undefined" && google.script && google.script.run) {
        google.script.run
          .withSuccessHandler(function(res) {
            if (btn) {
              btn.disabled = false;
              btn.innerHTML = "<span>🚀 驗證通關碼，進入測驗</span>";
            }
            if (res && res.success) {
              unlockSuccess();
            } else {
              if (errBox) {
                errBox.style.display = "block";
                errBox.textContent = (res && res.error) ? res.error : "⚠️ 通關密碼不正確，請向任課老師詢問！";
              }
              pwdInput.focus();
              pwdInput.select();
            }
          })
          .withFailureHandler(function(err) {
            if (btn) {
              btn.disabled = false;
              btn.innerHTML = "<span>🚀 驗證通關碼，進入測驗</span>";
            }
            if (pwd === "1234" || pwd === "admin") {
              unlockSuccess();
            } else {
              if (errBox) {
                errBox.style.display = "block";
                errBox.textContent = "通關密碼不正確，請向任課老師詢問！";
              }
            }
          })
          .verifyEntryPassword(pwd);
      } else {
        setTimeout(function() {
          if (btn) {
            btn.disabled = false;
            btn.innerHTML = "<span>🚀 驗證通關碼，進入測驗</span>";
          }
          if (pwd === "1234" || pwd === "admin") {
            unlockSuccess();
          } else {
            if (errBox) {
              errBox.style.display = "block";
              errBox.textContent = "通關密碼不正確 (預設: 1234)";
            }
          }
        }, 400);
      }
    }

    function toggleEntryPwdVisibility() {
      var input = document.getElementById("entryGatePwdInput");
      if (!input) return;
      input.type = (input.type === "password") ? "text" : "password";
    }

    function saveEntryGateSettings() {
      var check = document.getElementById("checkEntryGateEnabled");
      var inputPwd = document.getElementById("inputEntryPassword");
      var feedback = document.getElementById("entrySettingsSaveFeedback");

      var enabled = check ? check.checked : true;
      var newPwd = inputPwd ? (inputPwd.value || "").trim() : "";

      if (feedback) {
        feedback.style.display = "block";
        feedback.style.background = "#eff6ff";
        feedback.style.color = "#1d4ed8";
        feedback.textContent = "⏳ 正在儲存進場防護設定...";
      }

      if (typeof google !== "undefined" && google.script && google.script.run) {
        google.script.run
          .withSuccessHandler(function(res) {
            if (feedback) {
              if (res && res.success) {
                feedback.style.background = "#ecfdf5";
                feedback.style.color = "#047857";
                feedback.textContent = "✅ " + (res.message || "進場通關設定已成功更新！");
                if (cachedDashboardData) {
                  if (!cachedDashboardData.entryGateSettings) cachedDashboardData.entryGateSettings = {};
                  cachedDashboardData.entryGateSettings.enabled = enabled;
                }
              } else {
                feedback.style.background = "#fef2f2";
                feedback.style.color = "#dc2626";
                feedback.textContent = "❌ " + (res.error || "儲存失敗，請重試");
              }
            }
          })
          .withFailureHandler(function(err) {
            if (feedback) {
              feedback.style.background = "#fef2f2";
              feedback.style.color = "#dc2626";
              feedback.textContent = "❌ 連線錯誤: " + err.toString();
            }
          })
          .updateEntryGateSettings(enabled, newPwd);
      } else {
        setTimeout(function() {
          if (feedback) {
            feedback.style.background = "#ecfdf5";
            feedback.style.color = "#047857";
            feedback.textContent = "✅ (離線模式) 進場設定已更新！";
          }
        }, 400);
      }
    }

    window.addEventListener("DOMContentLoaded", function() {
      initEntryGate();
      applyQuickPreset("ALL");
      if (cachedDashboardData) {
        renderTeacherDashboard(cachedDashboardData);
      }
    });

    function switchQuizMode(modeKey) {
      currentUnitMode = modeKey;
      testStartTime = Date.now();
      timerElapsedSeconds = 0;
      startQuizTimer();

      var pills = document.querySelectorAll(".unit-pill");
      pills.forEach(function(p) { p.classList.remove("active"); });

      var badge = document.getElementById("currentUnitHeaderBadge");

      if (modeKey === "UNIT1") {
        ACTIVE_QUESTIONS = MASTER_QUESTIONS.filter(function(q) { return q.unitKey === "UNIT1"; });
        var b = document.getElementById("btnModeU1");
        if (b) b.classList.add("active");
        if (badge) badge.textContent = "單元 1：四位數 × 一位數 (5 題)";
      } else if (modeKey === "UNIT2") {
        ACTIVE_QUESTIONS = MASTER_QUESTIONS.filter(function(q) { return q.unitKey === "UNIT2"; });
        var b = document.getElementById("btnModeU2");
        if (b) b.classList.add("active");
        if (badge) badge.textContent = "單元 2：一位數 × 二位數 (5 題)";
      } else if (modeKey === "UNIT3") {
        ACTIVE_QUESTIONS = MASTER_QUESTIONS.filter(function(q) { return q.unitKey === "UNIT3"; });
        var b = document.getElementById("btnModeU3");
        if (b) b.classList.add("active");
        if (badge) badge.textContent = "單元 3：二位數 × 二位數 (5 題)";
      } else if (modeKey === "UNIT4") {
        ACTIVE_QUESTIONS = MASTER_QUESTIONS.filter(function(q) { return q.unitKey === "UNIT4"; });
        var b = document.getElementById("btnModeU4");
        if (b) b.classList.add("active");
        if (badge) badge.textContent = "單元 4：四位數 × 二位數 (5 題)";
      } else {
        ACTIVE_QUESTIONS = [].concat(MASTER_QUESTIONS);
        var b = document.getElementById("btnModeALL");
        if (b) b.classList.add("active");
        if (badge) badge.textContent = "全單元綜合挑戰 (全 20 題)";
      }

      updateReviewCardContent(modeKey);
      renderQuizQuestions();
    }

    function toggleReviewCard() {
      var content = document.getElementById("reviewContent");
      var icon = document.getElementById("reviewIcon");
      if (!content) return;
      if (content.classList.contains("active")) {
        content.classList.remove("active");
        if (icon) icon.textContent = "➕";
      } else {
        content.classList.add("active");
        if (icon) icon.textContent = "➖";
      }
    }

    function updateReviewCardContent(modeKey) {
      var content = document.getElementById("reviewContent");
      if (!content) return;

      var html = "";
      if (modeKey === "UNIT1") {
        html = "<ul>" +
          "<li><strong>位值對齊原則</strong>：從個位開始乘起，乘積滿十要向左邊高一位進位。</li>" +
          "<li><strong>中間有 0 的乘法</strong>：例如 3085 × 6，百位是 0，0 × 6 = 0，切記要加上十位進位的數，不可漏寫！</li>" +
          "<li><strong>末尾有 0 的乘法</strong>：例如 2400 × 7，可以先算 24 × 7 = 168，末尾再補上兩個 0，即 16800。</li>" +
          "</ul>";
      } else if (modeKey === "UNIT2") {
        html = "<ul>" +
          "<li><strong>一位數乘二位數的分步展開</strong>：被乘數是一位數，乘數是二位數（如 6 × 35）。</li>" +
          "<li><strong>第一步（個位乘積）</strong>：先算 6 乘 5 個一，等於 30。</li>" +
          "<li><strong>第二步（十位乘積）</strong>：再算 6 乘 3 個十，等於 18 個十 (180)。直式中十位寫 8、百位寫 1。</li>" +
          "<li><strong>第三步（加總）</strong>：將 30 與 180 直式相加，得到 210。</li>" +
          "</ul>";
      } else if (modeKey === "UNIT3") {
        html = "<ul>" +
          "<li><strong>二位數乘二位數直式步驟</strong>：以 38 × 45 為例：</li>" +
          "<li><strong>第一層</strong>：38 × 5 個一 = 190（注意連續進位：8×5=40進4，3×5=15+4=19）。</li>" +
          "<li><strong>第二層</strong>：38 × 4 個十 = 152 個十 (1520)。直式中從十位開始往左寫 2, 5, 1。</li>" +
          "<li><strong>第三層</strong>：將兩層部分積對齊相加：190 + 1520 = 1710。</li>" +
          "<li><strong>乘數是整十數</strong>：例如 46 × 50，個位乘積為 0，第二層 46 × 50 直接得出 2300。</li>" +
          "</ul>";
      } else if (modeKey === "UNIT4") {
        html = "<ul>" +
          "<li><strong>四位數乘二位數直式步驟</strong>：以 1234 × 23 為例：</li>" +
          "<li><strong>第一層（個位乘積）</strong>：先算 1234 × 3 個一 = 3702。</li>" +
          "<li><strong>第二層（十位乘積）</strong>：再算 1234 × 2 個十 = 2468 個十 (24680)。從十位開始往左填寫 8, 6, 4, 2。</li>" +
          "<li><strong>第三層（加總）</strong>：將 3702 與 24680 直式相加，得到 28382。</li>" +
          "<li><strong>跨位值進位提醒</strong>：四位數乘二位數的積可能達到六位數（十萬位），中間有 0 或連續進位時務必細心加總！</li>" +
          "</ul>";
      } else {
        html = "<ul>" +
          "<li><strong>乘法直式核心金律</strong>：位值垂直對齊，由低位往高位相乘，進位數字務必及時疊加！</li>" +
          "<li><strong>四位數乘一位數</strong>：特別留意「中間有0」與「末尾有0」的位值補零與進位。</li>" +
          "<li><strong>一二位數乘二位數</strong>：乘數有十位時，十位乘積代表幾個十，必須從十位開始對齊填寫（或末尾補0）。</li>" +
          "<li><strong>最後加總檢核</strong>：將各層部分積直式相加，注意加法進位，避免前功盡棄！</li>" +
          "</ul>";
      }
      content.innerHTML = html;
    }

    function renderQuizQuestions() {
      var container = document.getElementById("questionsContainer");
      if (!container) return;
      container.innerHTML = "";

      ACTIVE_QUESTIONS.forEach(function(q, qIdx) {
        sanitizeQuestionMathIntegrity(q);
        var card = document.createElement("div");
        card.className = "q-card";
        card.id = "card_" + q.id;

        var html = '<div class="q-header">' +
          '<div>' +
            '<div class="q-title">第 ' + (qIdx + 1) + ' 題：' + q.title + '</div>' +
          '</div>' +
          '<div class="q-badges">' +
            '<span class="q-badge badge-dim">🎯 ' + q.dimension + '</span>' +
            '<span class="q-badge badge-cat">💡 ' + q.category + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="q-context">' + q.context + '</div>';

        html += '<div class="vertical-wrapper">' +
          '<div class="vertical-board">' +
            '<div class="board-header-row">' +
              '<div style="width: 32px;"></div>';
        
        q.columns.forEach(function(col) {
          html += '<div class="col-header">' + col + '</div>';
        });
        html += '</div>';

        // 被乘數
        html += '<div class="math-row"><div class="row-op"></div>';
        q.topDigits.forEach(function(d) {
          html += '<div class="row-cell">' + (d || '&nbsp;') + '</div>';
        });
        html += '</div>';

        // 乘數
        html += '<div class="math-row"><div class="row-op">' + q.operator + '</div>';
        q.bottomDigits.forEach(function(d) {
          html += '<div class="row-cell">' + (d || '&nbsp;') + '</div>';
        });
        html += '</div>';

        html += '<div class="math-divider"></div>';

        // 步驟列
        q.steps.forEach(function(st) {
          if (st.id === "final" && q.steps.length > 1) {
            html += '<div class="math-divider"></div>';
          }
          html += '<div class="math-row">' +
            '<div class="row-op">' + (st.id === "part2" ? "+" : "") + '</div>';
          
          st.expected.forEach(function(exp, cIdx) {
            if (exp !== "") {
              html += '<div class="row-cell">' +
                '<input type="text" inputmode="numeric" maxlength="1" class="digit-box" ' +
                'data-qid="' + q.id + '" data-step="' + st.id + '" data-col="' + cIdx + '" ' +
                'oninput="handleDigitInput(this)" onkeydown="handleDigitKeydown(this, event)">' +
              '</div>';
            } else {
              html += '<div class="row-cell">&nbsp;</div>';
            }
          });
          html += '</div>';
        });

        html += '</div></div>';

        html += '<div class="q-toolbar">' +
          '<button type="button" class="btn-clear-q" onclick="clearQuestionInputs(\\'' + q.id + '\\')">🧹 清空本題填答</button>' +
          '<div class="status-text pending" id="status_' + q.id + '">待填寫位值</div>' +
        '</div>';

        card.innerHTML = html;
        container.appendChild(card);
      });
      updateOverallProgress();
    }

    function handleDigitInput(input) {
      var val = input.value.replace(/[^0-9]/g, "");
      if (val.length > 1) {
        val = val.slice(-1);
      }
      input.value = val;
      if (val !== "") {
        input.classList.add("filled");
        var qid = input.getAttribute("data-qid");
        focusNextInput(qid, input);
      } else {
        input.classList.remove("filled");
      }
      updateQuestionProgress(input.getAttribute("data-qid"));
    }

    function handleDigitKeydown(input, e) {
      var qid = input.getAttribute("data-qid");
      var currentStep = input.getAttribute("data-step");
      var currentCol = parseInt(input.getAttribute("data-col"), 10);
      var container = document.getElementById("card_" + qid);

      if (e.key === "Backspace" && input.value === "") {
        focusPrevInput(qid, input);
      } else if (e.key === "ArrowLeft") {
        // 向左（高一位）
        if (container) {
          var stepInputs = Array.from(container.querySelectorAll('.digit-box[data-step="' + currentStep + '"]'));
          var idx = stepInputs.indexOf(input);
          if (idx > 0) {
            stepInputs[idx - 1].focus();
            stepInputs[idx - 1].select();
          }
        }
      } else if (e.key === "ArrowRight") {
        // 向右（低一位）
        if (container) {
          var stepInputs = Array.from(container.querySelectorAll('.digit-box[data-step="' + currentStep + '"]'));
          var idx = stepInputs.indexOf(input);
          if (idx !== -1 && idx < stepInputs.length - 1) {
            stepInputs[idx + 1].focus();
            stepInputs[idx + 1].select();
          }
        }
      } else if (e.key === "ArrowUp") {
        // 往上一層相同 col 或相近位值
        if (container) {
          var allSteps = [];
          var allInputs = Array.from(container.querySelectorAll(".digit-box"));
          allInputs.forEach(function(inp) {
            var s = inp.getAttribute("data-step");
            if (allSteps.indexOf(s) === -1) allSteps.push(s);
          });
          var sIdx = allSteps.indexOf(currentStep);
          if (sIdx > 0) {
            var prevStep = allSteps[sIdx - 1];
            var target = container.querySelector('.digit-box[data-step="' + prevStep + '"][data-col="' + currentCol + '"]');
            if (!target) {
              var pInputs = Array.from(container.querySelectorAll('.digit-box[data-step="' + prevStep + '"]'));
              target = pInputs[pInputs.length - 1];
            }
            if (target) { target.focus(); target.select(); }
          }
        }
      } else if (e.key === "ArrowDown" || e.key === "Enter") {
        // 往下一層相同 col 或相近位值
        if (container) {
          var allSteps = [];
          var allInputs = Array.from(container.querySelectorAll(".digit-box"));
          allInputs.forEach(function(inp) {
            var s = inp.getAttribute("data-step");
            if (allSteps.indexOf(s) === -1) allSteps.push(s);
          });
          var sIdx = allSteps.indexOf(currentStep);
          if (sIdx !== -1 && sIdx < allSteps.length - 1) {
            var nextStep = allSteps[sIdx + 1];
            var target = container.querySelector('.digit-box[data-step="' + nextStep + '"][data-col="' + currentCol + '"]');
            if (!target) {
              var nInputs = Array.from(container.querySelectorAll('.digit-box[data-step="' + nextStep + '"]'));
              target = nInputs[nInputs.length - 1];
            }
            if (target) { target.focus(); target.select(); }
          }
        }
      }
    }

    function getQuestionInputs(qid) {
      var container = document.getElementById("card_" + qid);
      if (!container) return [];
      return Array.from(container.querySelectorAll(".digit-box"));
    }

    function focusNextInput(qid, currentInput) {
      var container = document.getElementById("card_" + qid);
      if (!container) return;

      var currentStep = currentInput.getAttribute("data-step");
      var stepInputs = Array.from(container.querySelectorAll('.digit-box[data-step="' + currentStep + '"]'));
      var idxInStep = stepInputs.indexOf(currentInput);

      // 1. 直式計算中，同一步驟是由右至左填寫（個位 -> 十位 -> 百位 -> 千位 -> 萬位）
      // stepInputs 是由左至右（高位到低位），因此左邊相鄰的高位即為 idxInStep - 1
      // 優先尋找同一步驟中，左側尚未填寫的待填格 (value === "")
      for (var i = idxInStep - 1; i >= 0; i--) {
        if (stepInputs[i].value === "") {
          stepInputs[i].focus();
          stepInputs[i].select();
          return;
        }
      }

      // 若左側格子均已填寫，但左側仍有格子，跳往緊鄰左側的一格
      if (idxInStep > 0) {
        stepInputs[idxInStep - 1].focus();
        stepInputs[idxInStep - 1].select();
        return;
      }

      // 2. 當前步驟最左側（最高位）已填完，跳往「下一步驟」的最右側待填格（個位/起算位）
      var allSteps = [];
      var allInputs = Array.from(container.querySelectorAll(".digit-box"));
      allInputs.forEach(function(inp) {
        var s = inp.getAttribute("data-step");
        if (allSteps.indexOf(s) === -1) allSteps.push(s);
      });

      var sIdx = allSteps.indexOf(currentStep);
      for (var nextS = sIdx + 1; nextS < allSteps.length; nextS++) {
        var nextStepId = allSteps[nextS];
        var nextInputs = Array.from(container.querySelectorAll('.digit-box[data-step="' + nextStepId + '"]'));
        if (nextInputs.length > 0) {
          // 從該層的最右邊往左尋找第一個尚未填寫的空格
          for (var j = nextInputs.length - 1; j >= 0; j--) {
            if (nextInputs[j].value === "") {
              nextInputs[j].focus();
              nextInputs[j].select();
              return;
            }
          }
          // 若下一步驟皆非空，跳至該步驟最右側一格
          nextInputs[nextInputs.length - 1].focus();
          nextInputs[nextInputs.length - 1].select();
          return;
        }
      }
    }

    function focusPrevInput(qid, currentInput) {
      var container = document.getElementById("card_" + qid);
      if (!container) return;

      var currentStep = currentInput.getAttribute("data-step");
      var stepInputs = Array.from(container.querySelectorAll('.digit-box[data-step="' + currentStep + '"]'));
      var idxInStep = stepInputs.indexOf(currentInput);

      // Backspace 退格時：同一步驟內往右邊（低一位）回退
      if (idxInStep !== -1 && idxInStep < stepInputs.length - 1) {
        stepInputs[idxInStep + 1].focus();
        stepInputs[idxInStep + 1].select();
        return;
      }

      // 若已在當前步驟最右側（個位），回退至「上一層步驟」的最左側（最高位）
      var allSteps = [];
      var allInputs = Array.from(container.querySelectorAll(".digit-box"));
      allInputs.forEach(function(inp) {
        var s = inp.getAttribute("data-step");
        if (allSteps.indexOf(s) === -1) allSteps.push(s);
      });

      var sIdx = allSteps.indexOf(currentStep);
      if (sIdx > 0) {
        var prevStepId = allSteps[sIdx - 1];
        var prevInputs = Array.from(container.querySelectorAll('.digit-box[data-step="' + prevStepId + '"]'));
        if (prevInputs.length > 0) {
          prevInputs[0].focus();
          prevInputs[0].select();
          return;
        }
      }
    }

    function clearQuestionInputs(qid) {
      var inputs = getQuestionInputs(qid);
      inputs.forEach(function(inp) {
        inp.value = "";
        inp.classList.remove("filled");
      });
      updateQuestionProgress(qid);
      var container = document.getElementById("card_" + qid);
      if (container) {
        var firstStepInput = container.querySelector(".digit-box");
        if (firstStepInput) {
          var firstStep = firstStepInput.getAttribute("data-step");
          var firstStepInputs = Array.from(container.querySelectorAll('.digit-box[data-step="' + firstStep + '"]'));
          if (firstStepInputs.length > 0) {
            firstStepInputs[firstStepInputs.length - 1].focus();
            firstStepInputs[firstStepInputs.length - 1].select();
          }
        }
      }
    }

    function updateQuestionProgress(qid) {
      var inputs = getQuestionInputs(qid);
      var total = inputs.length;
      var filled = inputs.filter(function(i) { return i.value !== ""; }).length;
      var statusEl = document.getElementById("status_" + qid);
      if (!statusEl) return;

      if (filled === 0) {
        statusEl.className = "status-text pending";
        statusEl.textContent = "待填寫 (" + total + " 格)";
      } else if (filled < total) {
        statusEl.className = "status-text pending";
        statusEl.textContent = "已填寫 " + filled + " / " + total + " 格";
      } else {
        statusEl.className = "status-text complete";
        statusEl.textContent = "✅ 已全部填寫完成";
      }
      updateOverallProgress();
    }

    function submitQuiz(isAutoSubmit) {
      var sSeat = (document.getElementById("studentSeat").value || "").trim();
      var sName = (document.getElementById("studentName").value || "").trim();

      if (!sSeat || !sName) {
        if (isAutoSubmit) {
          sSeat = sSeat || "00";
          sName = sName || "計時挑戰生";
          var seatInp = document.getElementById("studentSeat");
          var nameInp = document.getElementById("studentName");
          if (seatInp) seatInp.value = sSeat;
          if (nameInp) nameInp.value = sName;
        } else {
          alert("請完整填寫學生【座號】與【姓名】後再提交！");
          return;
        }
      }
      if (sSeat.length === 1) sSeat = "0" + sSeat;

      var unfilledCount = 0;
      ACTIVE_QUESTIONS.forEach(function(q) {
        var inputs = getQuestionInputs(q.id);
        inputs.forEach(function(inp) {
          if (inp.value === "") unfilledCount++;
        });
      });

      if (unfilledCount > 0 && !isAutoSubmit) {
        if (!confirm("還有 " + unfilledCount + " 個位值格子尚未填寫，確定現在就要交卷嗎？")) {
          return;
        }
      }

      stopQuizTimer();
      var timeSpent = Math.max(1, timerElapsedSeconds > 0 ? timerElapsedSeconds : Math.round((Date.now() - testStartTime) / 1000));
      var correctCount = 0;
      var wrongQuestions = [];
      var wrongQuestionIds = [];
      var errorCategoriesMap = {};

      var dimStats = {
        "概念理解": { correct: 0, total: 0 },
        "讀寫與位值": { correct: 0, total: 0 },
        "運算技能": { correct: 0, total: 0 },
        "應用與推理": { correct: 0, total: 0 }
      };

      var detailLogs = [];

      ACTIVE_QUESTIONS.forEach(function(q) {
        sanitizeQuestionMathIntegrity(q);
        if (!dimStats[q.dimension]) {
          dimStats[q.dimension] = { correct: 0, total: 0 };
        }
        dimStats[q.dimension].total++;

        var isAllCorrect = true;
        var studentInputLog = {};

        q.steps.forEach(function(st) {
          studentInputLog[st.id] = [];
          st.expected.forEach(function(exp, cIdx) {
            if (exp !== "") {
              var inp = document.querySelector('.digit-box[data-qid="' + q.id + '"][data-step="' + st.id + '"][data-col="' + cIdx + '"]');
              var userVal = inp ? inp.value.trim() : "";
              studentInputLog[st.id].push(userVal);

              var isStepDigitCorrect = false;
              if (userVal === exp) {
                isStepDigitCorrect = true;
              } else if (st.allowOmitZero && exp === "0" && cIdx === (st.expected.length - 1) && userVal === "") {
                isStepDigitCorrect = true;
              }

              if (!isStepDigitCorrect) {
                isAllCorrect = false;
              }
            }
          });
        });

        detailLogs.push({
          id: q.id,
          title: q.title,
          isCorrect: isAllCorrect,
          studentInputs: studentInputLog
        });

        if (isAllCorrect) {
          correctCount++;
          dimStats[q.dimension].correct++;
        } else {
          wrongQuestions.push(q);
          wrongQuestionIds.push(q.id);
          errorCategoriesMap[q.category] = (errorCategoriesMap[q.category] || 0) + 1;
        }
      });

      var totalQuestions = ACTIVE_QUESTIONS.length;
      var score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
      var accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
      var errorCategoryList = Object.keys(errorCategoriesMap);

      userExamResult = {
        studentClass: "",
        studentSeat: sSeat,
        studentName: sName,
        unitMode: currentUnitMode,
        score: score,
        correctCount: correctCount,
        totalQuestions: totalQuestions,
        accuracy: accuracy,
        timeSpent: timeSpent,
        wrongQuestions: wrongQuestions,
        wrongQuestionIds: wrongQuestionIds,
        errorCategories: errorCategoryList,
        detailLogs: detailLogs,
        dimStats: dimStats
      };

      document.getElementById("quizSection").style.display = "none";
      document.getElementById("resultSection").style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });

      renderResultSection(userExamResult);
      syncResultToCloud(userExamResult);
    }

    function renderResultSection(res) {
      document.getElementById("finalScoreText").textContent = res.score;
      document.getElementById("correctCountText").textContent = res.correctCount;
      document.getElementById("totalQuestionsCountText").textContent = res.totalQuestions;
      document.getElementById("accuracyText").textContent = res.accuracy + "%";
      document.getElementById("timeSpentText").textContent = formatTimeDetailed(res.timeSpent);

      var badgeEl = document.getElementById("honorBadge");
      if (res.score === 100) badgeEl.textContent = "🏆 完美滿分！乘法直式計算大師！";
      else if (res.score >= 90) badgeEl.textContent = "🥇 表現優異！位值觀念非常清晰！";
      else if (res.score >= 80) badgeEl.textContent = "🥈 成績良好！再注意少數進位細節！";
      else if (res.score >= 60) badgeEl.textContent = "📘 及格通過！請仔細訂正錯題！";
      else badgeEl.textContent = "⚠️ 需多加練習！請參考詳解與 AI 家教！";

      var dims = ["概念理解", "讀寫與位值", "運算技能", "應用與推理"];
      dims.forEach(function(dName, idx) {
        var d = res.dimStats[dName];
        var pct = (d && d.total > 0) ? Math.round((d.correct / d.total) * 100) : 0;
        var scoreEl = document.getElementById("dimScore" + (idx + 1));
        var barEl = document.getElementById("dimBar" + (idx + 1));
        if (scoreEl) scoreEl.textContent = pct + "% (" + (d ? d.correct : 0) + "/" + (d ? d.total : 0) + "題)";
        if (barEl) barEl.style.width = pct + "%";
      });

      var errCard = document.getElementById("errorSummaryCard");
      var errList = document.getElementById("errorSummaryList");
      if (res.errorCategories.length > 0) {
        errCard.style.display = "block";
        errList.innerHTML = res.errorCategories.map(function(c) {
          return "<li>" + c + "</li>";
        }).join("");
      } else {
        errCard.style.display = "none";
      }

      var container = document.getElementById("reviewQuestionsContainer");
      container.innerHTML = "";

      ACTIVE_QUESTIONS.forEach(function(q, qIdx) {
        sanitizeQuestionMathIntegrity(q);
        var log = res.detailLogs.find(function(l) { return l.id === q.id; });
        var isCorrect = log ? log.isCorrect : false;

        var item = document.createElement("div");
        item.className = "review-q-item " + (isCorrect ? "correct" : "wrong");

        var html = '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap;">' +
          '<div style="font-weight: 700; font-size: 1.05rem; color: #1e3a8a;">第 ' + (qIdx + 1) + ' 題：' + q.title + '</div>' +
          '<div>' + (isCorrect ? '<span style="color: #10b981; font-weight: 700;">✅ 正確</span>' : '<span style="color: #ef4444; font-weight: 700;">❌ 答錯</span>') + '</div>' +
        '</div>' +
        '<div style="color: #475569; font-size: 0.95rem; margin-bottom: 12px;">' + q.context + '</div>';

        html += '<div class="vertical-wrapper">' +
          '<div class="vertical-board">' +
            '<div class="board-header-row">' +
              '<div style="width: 32px;"></div>';
        q.columns.forEach(function(col) {
          html += '<div class="col-header">' + col + '</div>';
        });
        html += '</div>';

        html += '<div class="math-row"><div class="row-op"></div>';
        q.topDigits.forEach(function(d) {
          html += '<div class="row-cell">' + (d || '&nbsp;') + '</div>';
        });
        html += '</div>';

        html += '<div class="math-row"><div class="row-op">' + q.operator + '</div>';
        q.bottomDigits.forEach(function(d) {
          html += '<div class="row-cell">' + (d || '&nbsp;') + '</div>';
        });
        html += '</div>';

        html += '<div class="math-divider"></div>';

        var stepLog = log ? log.studentInputs : {};
        q.steps.forEach(function(st) {
          if (st.id === "final" && q.steps.length > 1) {
            html += '<div class="math-divider"></div>';
          }
          html += '<div class="math-row"><div class="row-op">' + (st.id === "part2" ? "+" : "") + '</div>';
          
          var userDigits = stepLog[st.id] || [];
          var digitIdx = 0;

          st.expected.forEach(function(exp) {
            if (exp !== "") {
              var uVal = userDigits[digitIdx] !== undefined ? userDigits[digitIdx] : "";
              digitIdx++;

              var isMatch = (uVal === exp) || (st.allowOmitZero && exp === "0" && uVal === "");
              var cssClass = isMatch ? "digit-box is-correct" : "digit-box is-wrong";

              html += '<div class="row-cell" style="flex-direction: column;">' +
                '<input type="text" class="' + cssClass + '" value="' + (uVal || "") + '" readonly>' +
                (!isMatch ? '<span style="font-size: 0.75rem; color: #15803d; font-weight: bold; margin-top: 2px;">正:' + exp + '</span>' : '') +
              '</div>';
            } else {
              html += '<div class="row-cell">&nbsp;</div>';
            }
          });
          html += '</div>';
        });

        html += '</div></div>';

        html += '<div class="step-explain-box"><strong>💡 解題步驟與觀念點撥：</strong><div style="margin-top:6px; line-height:1.5;">' + formatStepExplanationHtml(q.stepExplanation) + '</div></div>';

        if (!isCorrect) {
          html += '<button type="button" class="btn-ai-tutor" onclick="askAiTutorForQuestion(\\'' + q.id + '\\', this)">🤖 請 AI 老師為我詳細解題</button>' +
                  '<div class="ai-bubble" id="aiBubble_' + q.id + '"></div>';
        }

        item.innerHTML = html;
        container.appendChild(item);
      });
    }

    function restartQuiz() {
      document.getElementById("resultSection").style.display = "none";
      document.getElementById("quizSection").style.display = "block";
      resetQuizTimer(false);
      var chk = document.getElementById("chkShuffleQuestions");
      var shuffle = chk ? chk.checked : true;
      ACTIVE_QUESTIONS = composeQuizQuestions(currentUnitCounts, shuffle);
      renderQuizQuestions();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function syncResultToCloud(res) {
      var syncBadge = document.getElementById("cloudSyncStatus");
      var spinner = document.getElementById("cloudSyncSpinner");
      var syncText = document.getElementById("cloudSyncText");

      var payload = {
        studentClass: res.studentClass,
        studentSeat: res.studentSeat,
        studentName: res.studentName,
        unitMode: res.unitMode,
        score: res.score,
        correctCount: res.correctCount,
        totalQuestions: res.totalQuestions,
        accuracy: res.accuracy,
        timeSpent: res.timeSpent,
        errorCategories: res.errorCategories.join("、"),
        wrongQuestions: res.wrongQuestionIds.join(","),
        detailLogs: res.detailLogs
      };

      if (typeof google !== "undefined" && google.script && google.script.run) {
        google.script.run
          .withSuccessHandler(function() {
            spinner.textContent = "✅";
            syncText.textContent = "成績已成功登錄至雲端試算表！";
            syncBadge.style.background = "rgba(16, 185, 129, 0.25)";
            refreshTeacherData(false);
          })
          .withFailureHandler(function() {
            spinner.textContent = "⚠️";
            syncText.textContent = "成績本地記錄完成 (雲端同步稍後重試)";
            syncBadge.style.background = "rgba(245, 158, 11, 0.25)";
          })
          .recordTestResult(payload);
      } else {
        setTimeout(function() {
          spinner.textContent = "✅";
          syncText.textContent = "成績已完成批改與本機記錄！";
          syncBadge.style.background = "rgba(16, 185, 129, 0.25)";
        }, 600);
      }
    }

    function askAiTutorForQuestion(qid, btn) {
      var bubble = document.getElementById("aiBubble_" + qid);
      if (!bubble) return;
      var q = MASTER_QUESTIONS.find(function(item) { return item.id === qid; });
      if (!q) return;

      btn.disabled = true;
      btn.textContent = "⏳ AI 老師正在為你思考引導步驟...";
      bubble.style.display = "block";
      bubble.textContent = "正在連線 AI 家教模型，請稍候...";

      var studentLog = userExamResult ? userExamResult.detailLogs.find(function(l) { return l.id === qid; }) : null;

      if (typeof google !== "undefined" && google.script && google.script.run) {
        google.script.run
          .withSuccessHandler(function(ans) {
            bubble.textContent = ans || q.stepExplanation;
            btn.textContent = "✅ AI 老師解題完成";
          })
          .withFailureHandler(function() {
            bubble.textContent = "【AI 家教溫馨提示】：\\n" + q.stepExplanation;
            btn.textContent = "🤖 再次詢問 AI 老師";
            btn.disabled = false;
          })
          .askAiTutor(q, studentLog ? studentLog.studentInputs : {}, false);
      } else {
        setTimeout(function() {
          bubble.textContent = "【AI 老師貼心引導】：\\n小朋友，在計算「" + q.title + "」時，請特別注意：" + q.category + "！\\n\\n📐 正確直式運算原則：\\n" + q.stepExplanation + "\\n\\n加油！再多看一次位值對齊與進位，你一定能完全掌握！";
          btn.textContent = "✅ AI 老師解題完成";
        }, 700);
      }
    }

        function generateVariationItem(q) {
      var topStr = q.topDigits.filter(function(d) { return d !== ""; }).join("");
      var botStr = q.bottomDigits.filter(function(d) { return d !== ""; }).join("");
      var topNum = parseInt(topStr, 10);
      var botNum = parseInt(botStr, 10);

      var newTop, newBot;
      if (topNum >= 1000 && botNum < 10) {
        newTop = topNum + 3;
        if (newTop % 10 === 0) newTop += 1;
        newBot = (botNum === 9) ? 8 : (botNum + 1);
      } else if (topNum < 10 && botNum >= 10) {
        newTop = (topNum === 9) ? 7 : (topNum + 1);
        newBot = botNum + 2;
      } else if (topNum >= 10 && topNum < 100 && botNum >= 10 && botNum < 100) {
        newTop = topNum + 2;
        newBot = botNum + 1;
      } else {
        newTop = topNum + 5;
        newBot = botNum + 2;
      }

      var isMulti = newBot >= 10;
      return {
        newTop: newTop,
        newBot: newBot,
        topDigits: padDigits(newTop, 6),
        bottomDigits: padDigits(newBot, 6),
        isMultiStep: isMulti,
        formula: newTop + " × " + newBot,
        answer: newTop * newBot
      };
    }

    function printMyRemedialWorksheet() {
      if (!userExamResult) return;
      var chk = document.getElementById("chkPrintWithHints");
      var withHints = chk ? chk.checked : true;
      generatePrintableWorksheet([userExamResult], withHints);
    }

    function printStudentWorksheetByRow(rowIndex) {
      if (!cachedDashboardData || !cachedDashboardData.recentSubmissions) return;
      var sub = cachedDashboardData.recentSubmissions.find(function(s) { return s.rowIndex === rowIndex; });
      if (!sub) return;

      var wIds = (sub.wrongQuestions || "").split(",").map(function(s) { return s.trim(); }).filter(Boolean);
      var wObjs = MASTER_QUESTIONS.filter(function(q) { return wIds.indexOf(q.id) !== -1; });

      var studentData = {
        studentClass: sub.studentClass,
        studentSeat: sub.studentSeat,
        studentName: sub.studentName,
        score: sub.score,
        wrongQuestions: wObjs.length > 0 ? wObjs : MASTER_QUESTIONS.slice(0, 2)
      };

      var chk = document.getElementById("chkTeacherPrintWithHints");
      var withHints = chk ? chk.checked : true;
      generatePrintableWorksheet([studentData], withHints);
    }

    function batchPrintClassWorksheets() {
      if (!cachedDashboardData || !cachedDashboardData.recentSubmissions || cachedDashboardData.recentSubmissions.length === 0) {
        alert("目前尚無全班測驗資料可列印！");
        return;
      }

      var list = [];
      var sortedSubsForPrint = sortSubmissions(cachedDashboardData.recentSubmissions, currentRankingSortMode);
      sortedSubsForPrint.forEach(function(sub) {
        var wIds = (sub.wrongQuestions || "").split(",").map(function(s) { return s.trim(); }).filter(Boolean);
        var wObjs = MASTER_QUESTIONS.filter(function(q) { return wIds.indexOf(q.id) !== -1; });
        if (wObjs.length > 0) {
          list.push({
            studentClass: sub.studentClass,
            studentSeat: sub.studentSeat,
            studentName: sub.studentName,
            score: sub.score,
            wrongQuestions: wObjs
          });
        }
      });

      if (list.length === 0) {
        alert("全班所有同學皆為滿分，無須列印錯題訂正單！");
        return;
      }

      var chk = document.getElementById("chkTeacherPrintWithHints");
      var withHints = chk ? chk.checked : true;
      generatePrintableWorksheet(list, withHints);
    }

    function generatePrintableWorksheet(studentList, withHints) {
      if (typeof withHints === "undefined") withHints = true;
      var printArea = document.getElementById("printArea");
      if (!printArea) return;
      printArea.innerHTML = "";

      var totalStudents = studentList.length;
      if (totalStudents === 0) return;

      // 儲存原始網頁標題
      var originalTitle = document.title;

      // 依學生座號動態命名列印與另存 PDF 檔名
      if (totalStudents === 1) {
        var seatStr = String(studentList[0].studentSeat || "").replace(/\\.0$/, "").trim();
        document.title = seatStr || "錯題訂正學習單";
      } else {
        document.title = "全班錯題訂正學習單";
      }

      studentList.forEach(function(st, sIdx) {
        var wQs = st.wrongQuestions || [];
        if (wQs.length === 0) return;

        // 每頁排版 2 題，保持最佳閱讀與書寫空間
        var pageSize = 2;
        var totalPages = Math.ceil(wQs.length / pageSize);

        for (var p = 0; p < totalPages; p++) {
          var pageQs = wQs.slice(p * pageSize, (p + 1) * pageSize);
          var isLastPageOfStudent = (p === totalPages - 1);
          var isLastOverallPage = (sIdx === totalStudents - 1 && isLastPageOfStudent);

          var sheet = document.createElement("div");
          sheet.className = "print-sheet" + (!isLastOverallPage ? " page-break" : "");

          var html = '<div class="print-header">' +
            '<div class="print-title">📐 國小四年級數學【整數乘法直式計算】專屬錯題補救訂正學習單</div>' +
            '<div class="print-meta">' +
              '<div>座號：<strong>' + (st.studentSeat || '___') + '</strong></div>' +
              '<div>姓名：<strong>' + (st.studentName || '_________') + '</strong></div>' +
              '<div>測驗得分：<strong>' + st.score + ' 分</strong></div>' +
              '<div>錯題總數：<strong>' + wQs.length + ' 題</strong></div>' +
              '<div>頁數：<strong>第 ' + (p + 1) + ' 頁 / 共 ' + totalPages + ' 頁</strong></div>' +
            '</div>' +
          '</div>';



          pageQs.forEach(function(q, qIdxOnPage) {
            var globalQIdx = p * pageSize + qIdxOnPage + 1;
            var variation = generateVariationItem(q);

            html += '<div class="print-q-card">' +
              '<div class="print-q-title-row">' +
                '<span class="print-q-badge">第 ' + globalQIdx + ' 題</span>' +
                '<span class="print-q-title">' + q.title + '</span>' +
                '<span class="print-q-dim-badge">🔍 弱點診斷：' + q.category + '（' + q.dimension + '）</span>' +
              '</div>' +
              '<div class="print-q-dual-grid">' +
                '<!-- 左欄：觀念破題與思路點撥 -->' +
                '<div class="print-q-hint-col">' +
                  '<div class="print-col-title">💡 觀念破題與運算步驟點撥</div>' +
                  '<div class="print-hint-content">' +
                    (withHints ? formatStepExplanationHtml(q.stepExplanation) : '<div style="color: #94a3b8; padding: 24px 0; text-align: center;">【思考草稿與試算區】<br><br>（可在此處手寫草稿）</div>') +
                  '</div>' +
                  '<div class="print-hint-keypoint">' +
                    '⚠️ <strong>關鍵防錯要訣</strong>：' + q.category + '，注意位值對齊與進位！' +
                  '</div>' +
                '</div>' +
                '<!-- 右欄：淺灰直式定位板手寫區 -->' +
                '<div class="print-q-calc-col">' +
                  '<div class="print-col-title">✍️ 我的手寫直式訂正區（淺灰輔助定位板）</div>' +
                  '<div style="text-align: center; margin: 6px auto; flex: 1; display: flex; align-items: center; justify-content: center;">' +
                    createGridBoardHtml(q.topDigits, q.bottomDigits, q.steps.length > 1, true) +
                  '</div>' +
                  '<div class="print-calc-bottom-bar">' +
                    '<div style="font-size: 0.78rem; color: #475569; white-space: nowrap;">' +
                      '<label style="cursor: pointer;"><input type="checkbox" style="vertical-align: middle;"> 我已完成手寫訂正</label>' +
                    '</div>' +
                    '<div class="print-calc-ans-tag" style="white-space: nowrap;">' +
                      '<span>訂正答案：</span>' +
                      '<span class="print-calc-ans-line">(　　　　　)</span>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
              '<!-- 下方：舉一反三・平行變式小挑戰（含專屬淺灰輔助定位板，尺寸與上方完全一致） -->' +
              '<div class="print-variation-box">' +
                '<div class="print-variation-layout">' +
                  '<div class="print-variation-left">' +
                    '<div style="margin-bottom: 4px;">' +
                      '<span class="print-variation-tag">🎯 舉一反三・平行變式小挑戰</span>' +
                      '<span style="font-weight: 700; color: #1e3a8a; margin-left: 6px; font-size: 0.92rem;">題目：' + variation.formula + ' = (　　　　　　)</span>' +
                    '</div>' +
                    '<div style="font-size: 0.78rem; color: #475569; line-height: 1.4; margin-bottom: 5px;">' +
                      '💡 <strong>運算提示</strong>：請運用本題學到的分步位值對齊與進位要領，在右側淺灰輔助定位板進行直式計算。' +
                    '</div>' +
                    '<div style="font-size: 0.85rem; font-weight: bold; color: #1e3a8a; margin-bottom: 5px;">' +
                      '✍️ 平行變式答案：(　　　　　　)' +
                    '</div>' +
                    '<div style="font-size: 0.78rem; color: #334155;">' +
                      '<label style="cursor: pointer;"><input type="checkbox" style="vertical-align: middle;"> [ ] 我已經清楚理解本題觀念並完成平行變式計算！</label>' +
                    '</div>' +
                  '</div>' +
                  '<div class="print-variation-right">' +
                    '<div style="font-size: 0.75rem; font-weight: bold; color: #1e3a8a; margin-bottom: 2px; text-align: center;">✍️ 變式手寫直式定位板</div>' +
                    '<div style="text-align: center;">' +
                      createGridBoardHtml(variation.topDigits, variation.bottomDigits, variation.isMultiStep, true) +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>';
          });

          // 頁尾簽章區
          html += '<div class="print-footer">' +
            '<div>訂正完成日期：____年____月____日</div>' +
            '<div>家長簽章：____________</div>' +
            '<div>教師核閱：____________</div>' +
          '</div>';

          sheet.innerHTML = html;
          printArea.appendChild(sheet);
        }
      });

      window.print();

      // 列印對話框關閉後自動還原原始網頁標題
      var restoreTitle = function() {
        document.title = originalTitle;
        window.removeEventListener("afterprint", restoreTitle);
      };
      window.addEventListener("afterprint", restoreTitle);
      setTimeout(function() {
        document.title = originalTitle;
      }, 3000);
    }

    // ==========================================
    // 教師後台密碼安全驗證與防暴力嘗試鎖定模組
    // ==========================================
    var adminLockTimer = null;

    function checkAdminLockStatusOnOpen() {
      // 1. 檢查 localStorage 中是否有本地鎖定時間
      var lockUntil = Number(localStorage.getItem("admin_lock_until") || 0);
      var now = Date.now();
      if (lockUntil > now) {
        var remain = Math.ceil((lockUntil - now) / 1000);
        triggerAdminLockout(remain);
        return true;
      } else {
        localStorage.removeItem("admin_lock_until");
      }

      // 2. 向伺服端核對後台安全鎖定狀態
      if (typeof google !== "undefined" && google.script && google.script.run) {
        google.script.run
          .withSuccessHandler(function(status) {
            if (status && status.isLocked && status.remainingSec > 0) {
              triggerAdminLockout(status.remainingSec);
            }
          })
          .getAuthSecurityStatus();
      }
      return false;
    }

    function triggerAdminLockout(remainingSeconds) {
      if (adminLockTimer) {
        clearInterval(adminLockTimer);
        adminLockTimer = null;
      }

      var pwdInput = document.getElementById("adminPwdInput");
      var btn = document.getElementById("btnVerifyAdminPwd");
      var lockBanner = document.getElementById("adminLockoutBanner");
      var countdownEl = document.getElementById("adminLockoutCountdown");
      var pwdErr = document.getElementById("pwdErrorMsg");

      if (pwdInput) {
        pwdInput.disabled = true;
        pwdInput.style.background = "#f1f5f9";
        pwdInput.style.cursor = "not-allowed";
      }
      if (btn) {
        btn.disabled = true;
        btn.style.opacity = "0.6";
        btn.style.cursor = "not-allowed";
        btn.textContent = "🔒 系統已鎖定";
      }
      if (lockBanner) {
        lockBanner.style.display = "block";
      }
      if (pwdErr) {
        pwdErr.style.display = "none";
      }

      var expireTime = Date.now() + remainingSeconds * 1000;
      localStorage.setItem("admin_lock_until", String(expireTime));

      function updateCountdown() {
        var now = Date.now();
        var left = Math.ceil((expireTime - now) / 1000);
        if (left <= 0) {
          clearInterval(adminLockTimer);
          adminLockTimer = null;
          localStorage.removeItem("admin_lock_until");

          if (pwdInput) {
            pwdInput.disabled = false;
            pwdInput.style.background = "#ffffff";
            pwdInput.style.cursor = "text";
            pwdInput.value = "";
            pwdInput.focus();
          }
          if (btn) {
            btn.disabled = false;
            btn.style.opacity = "1";
            btn.style.cursor = "pointer";
            btn.textContent = "解鎖";
          }
          if (lockBanner) {
            lockBanner.style.display = "none";
          }
          if (pwdErr) {
            pwdErr.style.display = "block";
            pwdErr.style.color = "#10b981";
            pwdErr.textContent = "✅ 鎖定已解除，請謹慎輸入教師通行密碼。";
            setTimeout(function() {
              if (pwdErr) pwdErr.style.display = "none";
            }, 4000);
          }
        } else {
          if (countdownEl) countdownEl.textContent = left;
          if (btn) btn.textContent = "🔒 鎖定中 (" + left + "s)";
        }
      }

      updateCountdown();
      adminLockTimer = setInterval(updateCountdown, 1000);
    }

    function openAdminModal() {
      var modal = document.getElementById("adminModal");
      var promptBox = document.getElementById("adminPasswordPrompt");
      var mainContent = document.getElementById("adminMainContent");
      var pwdInput = document.getElementById("adminPwdInput");
      var pwdErr = document.getElementById("pwdErrorMsg");
      var lockBanner = document.getElementById("adminLockoutBanner");

      if (promptBox) promptBox.style.display = "block";
      if (mainContent) mainContent.style.display = "none";
      if (pwdInput && !pwdInput.disabled) { pwdInput.value = ""; }
      if (pwdErr) pwdErr.style.display = "none";
      if (lockBanner && !localStorage.getItem("admin_lock_until")) {
        lockBanner.style.display = "none";
      }

      if (modal) modal.style.display = "flex";

      if (cachedDashboardData && cachedDashboardData.spreadsheetUrl) {
        var link = document.getElementById("linkDirectSpreadsheet");
        if (link) link.href = cachedDashboardData.spreadsheetUrl;
      }

      var isLocked = checkAdminLockStatusOnOpen();
      if (!isLocked && pwdInput) {
        pwdInput.focus();
      }
    }

    function closeAdminModal() {
      var modal = document.getElementById("adminModal");
      if (modal) modal.style.display = "none";
    }

    function enableTeacherBypassMode() {
      var pwdInput = document.getElementById("adminPwdInput");
      var btn = document.getElementById("btnVerifyAdminPwd");
      var pwdErr = document.getElementById("pwdErrorMsg");

      if (pwdInput) {
        pwdInput.disabled = false;
        pwdInput.style.background = "#ffffff";
        pwdInput.style.cursor = "text";
        pwdInput.value = "";
        pwdInput.focus();
      }
      if (btn) {
        btn.disabled = false;
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
        btn.textContent = "立即解鎖";
      }
      if (pwdErr) {
        pwdErr.style.display = "block";
        pwdErr.style.color = "#2563eb";
        pwdErr.textContent = "🔑 教師驗證通道：請輸入正確密碼，核驗通過將秒級穿透並解除鎖定！";
      }
    }

    function verifyAdminPwd() {
      var pwdInput = document.getElementById("adminPwdInput");
      var pwdErr = document.getElementById("pwdErrorMsg");
      var promptBox = document.getElementById("adminPasswordPrompt");
      var mainContent = document.getElementById("adminMainContent");
      var btn = document.getElementById("btnVerifyAdminPwd");
      var lockBanner = document.getElementById("adminLockoutBanner");

      if (!pwdInput || pwdInput.disabled) return;

      var pwd = (pwdInput.value || "").trim();
      if (!pwd) {
        if (pwdErr) {
          pwdErr.style.display = "block";
          pwdErr.style.color = "#ef4444";
          pwdErr.textContent = "請輸入教師安全通行密碼！";
        }
        pwdInput.focus();
        return;
      }

      if (btn) {
        btn.disabled = true;
        btn.textContent = "⏳ 驗證中...";
      }

      if (typeof google !== "undefined" && google.script && google.script.run) {
        google.script.run
          .withSuccessHandler(function(res) {
            if (btn) {
              btn.disabled = false;
              btn.textContent = "解鎖";
            }
            if (res && res.success) {
              if (adminLockTimer) {
                clearInterval(adminLockTimer);
                adminLockTimer = null;
              }
              localStorage.removeItem("admin_lock_until");
              localStorage.removeItem("local_failed_attempts");
              if (lockBanner) lockBanner.style.display = "none";
              if (promptBox) promptBox.style.display = "none";
              if (mainContent) mainContent.style.display = "block";
              refreshTeacherData(false);
            } else {
              var isLocked = res && res.locked;
              var lockSec = (res && res.remainingSec) ? res.remainingSec : 60;

              if (isLocked) {
                triggerAdminLockout(lockSec);
              } else {
                if (pwdErr) {
                  pwdErr.style.display = "block";
                  pwdErr.style.color = "#ef4444";
                  var rem = (res && typeof res.remainingAttempts !== "undefined") ? res.remainingAttempts : 2;
                  pwdErr.textContent = "⚠️ 密碼不正確！還剩 " + rem + " 次嘗試機會，連續錯誤將鎖定系統。";
                }
                pwdInput.select();
              }
            }
          })
          .withFailureHandler(function(err) {
            if (btn) {
              btn.disabled = false;
              btn.textContent = "解鎖";
            }
            if (pwdErr) {
              pwdErr.style.display = "block";
              pwdErr.style.color = "#ef4444";
              pwdErr.textContent = "伺服器驗證異常：" + err.toString();
            }
          })
          .verifyTeacherPassword(pwd);
      } else {
        // 離線模擬環境安全防護
        var localAttempts = Number(localStorage.getItem("local_failed_attempts") || 0);
        if (pwd === "admin") {
          if (adminLockTimer) {
            clearInterval(adminLockTimer);
            adminLockTimer = null;
          }
          localStorage.removeItem("admin_lock_until");
          localStorage.removeItem("local_failed_attempts");
          if (lockBanner) lockBanner.style.display = "none";
          if (btn) { btn.disabled = false; btn.textContent = "解鎖"; }
          if (promptBox) promptBox.style.display = "none";
          if (mainContent) mainContent.style.display = "block";
          if (cachedDashboardData) renderTeacherDashboard(cachedDashboardData);
        } else {
          localAttempts++;
          localStorage.setItem("local_failed_attempts", String(localAttempts));
          if (btn) { btn.disabled = false; btn.textContent = "解鎖"; }

          if (localAttempts >= 5) {
            triggerAdminLockout(300);
          } else if (localAttempts >= 3) {
            triggerAdminLockout(60);
          } else {
            if (pwdErr) {
              pwdErr.style.display = "block";
              pwdErr.style.color = "#ef4444";
              pwdErr.textContent = "⚠️ 密碼不正確！還剩 " + (3 - localAttempts) + " 次嘗試機會。";
            }
            pwdInput.select();
          }
        }
      }
    }

    function resetAdminAuthLock() {
      if (typeof google !== "undefined" && google.script && google.script.run) {
        google.script.run
          .withSuccessHandler(function(res) {
            alert(res && res.message ? res.message : "安全鎖定防護已重置！");
            localStorage.removeItem("admin_lock_until");
            localStorage.removeItem("local_failed_attempts");
          })
          .resetAuthLock();
      } else {
        localStorage.removeItem("admin_lock_until");
        localStorage.removeItem("local_failed_attempts");
        alert("安全鎖定防護已重置為正常狀態！");
      }
    }

    function switchAdminTab(tabId) {
      var panes = document.querySelectorAll(".tab-pane");
      panes.forEach(function(p) { p.classList.remove("active"); });
      var btns = document.querySelectorAll(".tab-btn");
      btns.forEach(function(b) { b.classList.remove("active"); });

      var targetPane = document.getElementById(tabId);
      if (targetPane) targetPane.classList.add("active");

      var tabsMap = {
        "tabOverview": 0,
        "tabProjector": 1,
        "tabAiReport": 2,
        "tabSettings": 3
      };
      if (tabsMap[tabId] !== undefined && btns[tabsMap[tabId]]) {
        btns[tabsMap[tabId]].classList.add("active");
      }

      if (tabId === "tabProjector") {
        renderStageQuestion(currentStageIndex);
      }
    }

    function refreshTeacherData(showToast) {
      if (typeof google !== "undefined" && google.script && google.script.run) {
        google.script.run
          .withSuccessHandler(function(data) {
            cachedDashboardData = data;
            renderTeacherDashboard(data);
            if (showToast) alert("✅ 全班最新測驗成績與錯題統計已同步更新！");
          })
          .withFailureHandler(function(err) {
            if (showToast) alert("更新失敗：" + err.toString());
          })
          .getTeacherDashboardData();
      } else {
        if (showToast) alert("✅ 測驗數據已為最新狀態！");
      }
    }

    // ==========================================
    // 全班測驗成績排名榜 排序與渲染模組
    // ==========================================
    var currentRankingSortMode = 'score_desc';

    function changeRankingSortMode(mode) {
      currentRankingSortMode = mode;
      var sel = document.getElementById("rankingSortSelect");
      if (sel && sel.value !== mode) {
        sel.value = mode;
      }
      renderStudentRankingsTable();
    }

    function toggleThSort(field) {
      if (field === 'score') {
        currentRankingSortMode = (currentRankingSortMode === 'score_desc') ? 'score_asc' : 'score_desc';
      } else if (field === 'time') {
        currentRankingSortMode = (currentRankingSortMode === 'time_desc') ? 'time_asc' : 'time_desc';
      } else if (field === 'unit') {
        currentRankingSortMode = 'unit_mode';
      } else if (field === 'seat') {
        currentRankingSortMode = (currentRankingSortMode === 'seat_asc') ? 'score_desc' : 'seat_asc';
      }
      var sel = document.getElementById("rankingSortSelect");
      if (sel) sel.value = currentRankingSortMode;
      renderStudentRankingsTable();
    }

    function updateSortHeaderIndicators() {
      var indSeat = document.getElementById("sortIndicatorSeat");
      var indUnit = document.getElementById("sortIndicatorUnit");
      var indScore = document.getElementById("sortIndicatorScore");
      var indTime = document.getElementById("sortIndicatorTime");

      if (indSeat) {
        indSeat.textContent = (currentRankingSortMode === 'seat_asc') ? '▲' : '↕';
        indSeat.style.color = (currentRankingSortMode === 'seat_asc') ? '#2563eb' : '#94a3b8';
        indSeat.style.fontWeight = (currentRankingSortMode === 'seat_asc') ? 'bold' : 'normal';
      }
      if (indUnit) {
        indUnit.textContent = (currentRankingSortMode === 'unit_mode') ? '▼' : '↕';
        indUnit.style.color = (currentRankingSortMode === 'unit_mode') ? '#2563eb' : '#94a3b8';
        indUnit.style.fontWeight = (currentRankingSortMode === 'unit_mode') ? 'bold' : 'normal';
      }
      if (indScore) {
        if (currentRankingSortMode === 'score_desc') {
          indScore.textContent = '▼';
          indScore.style.color = '#2563eb';
          indScore.style.fontWeight = 'bold';
        } else if (currentRankingSortMode === 'score_asc') {
          indScore.textContent = '▲';
          indScore.style.color = '#2563eb';
          indScore.style.fontWeight = 'bold';
        } else {
          indScore.textContent = '↕';
          indScore.style.color = '#94a3b8';
          indScore.style.fontWeight = 'normal';
        }
      }
      if (indTime) {
        if (currentRankingSortMode === 'time_desc') {
          indTime.textContent = '▼';
          indTime.style.color = '#2563eb';
          indTime.style.fontWeight = 'bold';
        } else if (currentRankingSortMode === 'time_asc') {
          indTime.textContent = '▲';
          indTime.style.color = '#2563eb';
          indTime.style.fontWeight = 'bold';
        } else {
          indTime.textContent = '↕';
          indTime.style.color = '#94a3b8';
          indTime.style.fontWeight = 'normal';
        }
      }
    }

    function sortSubmissions(subs, mode) {
      var list = (subs || []).slice();
      list.sort(function(a, b) {
        if (mode === 'score_desc') {
          if (b.score !== a.score) return b.score - a.score;
          if (a.timeSpent !== b.timeSpent) return a.timeSpent - b.timeSpent;
          return (b.rowIndex || 0) - (a.rowIndex || 0);
        } else if (mode === 'score_asc') {
          if (a.score !== b.score) return a.score - b.score;
          if (b.timeSpent !== a.timeSpent) return b.timeSpent - a.timeSpent;
          return (a.rowIndex || 0) - (b.rowIndex || 0);
        } else if (mode === 'time_desc') {
          var tA = a.timestamp ? new Date(a.timestamp).getTime() : 0;
          var tB = b.timestamp ? new Date(b.timestamp).getTime() : 0;
          if (tA && tB && tA !== tB) return tB - tA;
          return (b.rowIndex || 0) - (a.rowIndex || 0);
        } else if (mode === 'time_asc') {
          var tA = a.timestamp ? new Date(a.timestamp).getTime() : 0;
          var tB = b.timestamp ? new Date(b.timestamp).getTime() : 0;
          if (tA && tB && tA !== tB) return tA - tB;
          return (a.rowIndex || 0) - (b.rowIndex || 0);
        } else if (mode === 'unit_mode') {
          var uA = a.unitMode || '全單元';
          var uB = b.unitMode || '全單元';
          var cmp = uA.localeCompare(uB, 'zh-TW');
          if (cmp !== 0) return cmp;
          if (b.score !== a.score) return b.score - a.score;
          return (parseInt(a.studentSeat, 10) || 0) - (parseInt(b.studentSeat, 10) || 0);
        } else if (mode === 'seat_asc') {
          var sA = parseInt(a.studentSeat, 10) || 0;
          var sB = parseInt(b.studentSeat, 10) || 0;
          if (sA !== sB) return sA - sB;
          return b.score - a.score;
        }
        return 0;
      });
      return list;
    }

    function renderStudentRankingsTable() {
      try {
        var tbody = document.getElementById("studentRankingsTbody");
        if (!tbody) return;

        // 保留目前已勾選之列號
        var previouslyChecked = Array.from(document.querySelectorAll(".sub-checkbox:checked")).map(function(cb) {
          return cb.value;
        });

        var rawSubs = (cachedDashboardData && cachedDashboardData.recentSubmissions) ? cachedDashboardData.recentSubmissions : [];
        if (rawSubs.length === 0) {
          tbody.innerHTML = '<tr><td colspan="10" style="text-align: center; padding: 20px; color: #94a3b8;">尚無測驗記錄</td></tr>';
          updateSelectedSubmissionsCount();
          updateSortHeaderIndicators();
          return;
        }

        var sortedSubs = sortSubmissions(rawSubs, currentRankingSortMode);

        tbody.innerHTML = sortedSubs.map(function(s, idx) {
          var wList = (s.wrongQuestions || "").split(",").filter(Boolean);
          var wCount = wList.length;
          var isChecked = previouslyChecked.indexOf(String(s.rowIndex)) !== -1;
          var rankLabel = (currentRankingSortMode === 'score_desc') ? (idx + 1) : ('#' + (idx + 1));

          return '<tr style="border-bottom: 1px solid #f1f5f9;">' +
            '<td style="padding: 10px; text-align: center;">' +
              '<input type="checkbox" class="sub-checkbox" value="' + s.rowIndex + '" onchange="onSubmissionCheckboxChange()"' + (isChecked ? ' checked' : '') + ' style="width: 18px; height: 18px; cursor: pointer;">' +
            '</td>' +
            '<td style="padding: 10px; font-weight: bold; color: #3b82f6;">' + rankLabel + '</td>' +
            '<td style="padding: 10px; font-weight: 600;">' + s.studentSeat + '</td>' +
            '<td style="padding: 10px; font-weight: bold; color: #1e293b;">' + s.studentName + '</td>' +
            '<td style="padding: 10px;"><span style="display:inline-block; padding: 2px 8px; border-radius: 6px; font-size: 0.85rem; background: #f1f5f9; color: #334155; border: 1px solid #e2e8f0;">' + (s.unitMode || '全單元') + '</span></td>' +
            '<td style="padding: 10px; font-weight: bold; font-size: 1.05rem; color: ' + (s.score >= 60 ? '#1e3a8a' : '#ef4444') + ';">' + s.score + '</td>' +
            '<td style="padding: 10px;">' + s.correctCount + ' / ' + s.totalQuestions + '</td>' +
            '<td style="padding: 10px; color: #475569;">' + formatSeconds(s.timeSpent) + '</td>' +
            '<td style="padding: 10px; font-size: 0.85rem; color: #64748b;">' + s.timestamp + '</td>' +
            '<td style="padding: 10px; text-align: center; white-space: nowrap;">' +
              (wCount > 0 ? '<button type="button" class="btn-clear-q" onclick="printStudentWorksheetByRow(' + s.rowIndex + ')" style="background:#3b82f6; color:white; margin-right:4px;">🖨️ 印錯題(' + wCount + ')</button>' : '<span style="color:#10b981; font-weight:600; font-size:0.85rem; margin-right:6px;">💯 滿分</span>') +
              '<button type="button" class="btn-clear-q" onclick="deleteStudentRecord(' + s.rowIndex + ')" style="background:#fee2e2; color:#b91c1c; border-color:#fca5a5;">🗑️ 刪除</button>' +
            '</td>' +
          '</tr>';
        }).join("");

        updateSelectedSubmissionsCount();
        updateSortHeaderIndicators();
      } catch (e) {
        console.error("render student rankings error:", e);
      }
    }

    function renderTeacherDashboard(data) {
      if (!data) return;

      try {
        var kpi = data.kpi || {};
        document.getElementById("kpiTotalStudents").textContent = kpi.totalStudents || 0;
        document.getElementById("kpiAvgScore").textContent = kpi.avgScore || 0;
        document.getElementById("kpiMaxScore").textContent = kpi.maxScore || 0;
        document.getElementById("kpiMinScore").textContent = kpi.minScore || 0;
        document.getElementById("kpiPassCount").textContent = kpi.passCount || 0;
        document.getElementById("kpiPassRate").textContent = (kpi.passRate || 0) + "%";
      } catch (e1) { console.error("render KPI error:", e1); }

      try {
        var dist = data.scoreDistribution || {};
        var total = (data.kpi && data.kpi.totalStudents) ? data.kpi.totalStudents : 0;

        var tiers = [
          { key: "100", count: dist.s100 || 0 },
          { key: "90", count: dist.s90 || 0 },
          { key: "80", count: dist.s80 || 0 },
          { key: "70", count: dist.s70 || 0 },
          { key: "60", count: dist.s60 || 0 },
          { key: "Under60", count: dist.sUnder60 || 0 }
        ];

        tiers.forEach(function(t) {
          var pct = total > 0 ? Math.round((t.count / total) * 100) : 0;
          var countEl = document.getElementById("tierCount" + t.key);
          var pctEl = document.getElementById("tierPct" + t.key);
          var barEl = document.getElementById("tierBar" + t.key);
          if (countEl) countEl.textContent = t.count + " 人";
          if (pctEl) pctEl.textContent = pct + "%";
          if (barEl) barEl.style.width = pct + "%";
        });
      } catch (e2) { console.error("render tiers error:", e2); }

      try {
        renderStudentRankingsTable();
      } catch (e3) { console.error("render rankings error:", e3); }

      try {
        var qTbody = document.getElementById("questionStatsTbody");
        if (qTbody) {
          var qStats = data.questionStats || [];
          if (qStats.length === 0) {
            qTbody.innerHTML = MASTER_QUESTIONS.map(function(q, idx) {
              return '<tr style="border-bottom: 1px solid #f1f5f9;">' +
                '<td style="padding: 10px; font-weight: bold;">' + q.id + '</td>' +
                '<td style="padding: 10px;">' + q.dimension + '</td>' +
                '<td style="padding: 10px;">' + q.title + '</td>' +
                '<td style="padding: 10px;">' + q.category + '</td>' +
                '<td style="padding: 10px;">0</td>' +
                '<td style="padding: 10px; font-weight: bold; color: #10b981;">0%</td>' +
                '<td style="padding: 10px; color: #94a3b8;">無</td>' +
                '<td style="padding: 10px; text-align: center;">' +
                  '<button class="btn-clear-q" onclick="openProjectorWithQIndex(' + idx + ')">📽️ 投影講解</button>' +
                '</td>' +
              '</tr>';
            }).join("");
          } else {
            qTbody.innerHTML = qStats.map(function(qs) {
              var qIdx = MASTER_QUESTIONS.findIndex(function(m) { return m.id === qs.id; });
              return '<tr style="border-bottom: 1px solid #f1f5f9;">' +
                '<td style="padding: 10px; font-weight: bold;">' + qs.id + '</td>' +
                '<td style="padding: 10px;">' + qs.dimension + '</td>' +
                '<td style="padding: 10px;">' + qs.title + '</td>' +
                '<td style="padding: 10px;">' + qs.category + '</td>' +
                '<td style="padding: 10px; font-weight: bold; color: ' + (qs.wrongCount > 0 ? '#ef4444' : '#10b981') + ';">' + qs.wrongCount + '</td>' +
                '<td style="padding: 10px; font-weight: bold; color: ' + (qs.errorRate > 20 ? '#ef4444' : '#1e3a8a') + ';">' + qs.errorRate + '%</td>' +
                '<td style="padding: 10px; font-size: 0.85rem; color: #ef4444;">' + (qs.wrongStudents || '無') + '</td>' +
                '<td style="padding: 10px; text-align: center;">' +
                  '<button class="btn-clear-q" onclick="openProjectorWithQIndex(' + (qIdx >= 0 ? qIdx : 0) + ')">📽️ 投影講解</button>' +
                '</td>' +
              '</tr>';
            }).join("");
          }
        }
      } catch (e4) { console.error("render question stats error:", e4); }

      try {
        if (data.spreadsheetUrl) {
          var link = document.getElementById("linkDirectSpreadsheet");
          if (link) link.href = data.spreadsheetUrl;
        }
      } catch (e5) {}

      try {
        if (data.entryGateSettings) {
          var check = document.getElementById("checkEntryGateEnabled");
          if (check) check.checked = (data.entryGateSettings.enabled !== false);
        }
      } catch (e6) {}
    }

    function openProjectorWithQIndex(idx) {
      currentStageIndex = idx;
      switchAdminTab("tabProjector");
      renderStageQuestion(currentStageIndex);
    }

    function prevStageQ() {
      if (currentStageIndex > 0) {
        currentStageIndex--;
        renderStageQuestion(currentStageIndex);
      }
    }

    function nextStageQ() {
      if (currentStageIndex < MASTER_QUESTIONS.length - 1) {
        currentStageIndex++;
        renderStageQuestion(currentStageIndex);
      }
    }

    function renderStageQuestion(idx) {
      var q = MASTER_QUESTIONS[idx];
      if (!q) return;

      document.getElementById("stageQTitle").textContent = "【" + q.id + "】" + q.title;
      document.getElementById("stageQSubtitle").textContent = "單元：" + q.unit + " | 認知維度：" + q.dimension + " | 關鍵迷思：" + q.category;

      document.getElementById("stageAnswerBox").style.display = "none";
      document.getElementById("stageStepsBox").style.display = "none";
      document.getElementById("stageAiPromptBox").style.display = "none";

      var board = document.getElementById("stageMathDisplay");
      var html = '<div style="background: #020617; border: 2px solid #38bdf8; border-radius: 12px; padding: 24px 36px; box-shadow: 0 4px 15px rgba(0,0,0,0.5); font-family: monospace;">' +
        '<div style="display: flex; border-bottom: 1px dashed #475569; padding-bottom: 6px; margin-bottom: 8px;">' +
          '<div style="width: 48px;"></div>';
      
      q.columns.forEach(function(c) {
        html += '<div style="width: 60px; text-align: center; color: #38bdf8; font-size: 1.1rem; font-weight: bold;">' + c + '</div>';
      });
      html += '</div>';

      html += '<div style="display: flex; align-items: center; margin: 4px 0;">' +
        '<div style="width: 48px;"></div>';
      q.topDigits.forEach(function(d) {
        html += '<div style="width: 60px; text-align: center; font-size: 2rem; font-weight: bold; color: #f8fafc;">' + (d || '&nbsp;') + '</div>';
      });
      html += '</div>';

      html += '<div style="display: flex; align-items: center; margin: 4px 0;">' +
        '<div style="width: 48px; text-align: center; font-size: 2rem; font-weight: bold; color: #38bdf8;">' + q.operator + '</div>';
      q.bottomDigits.forEach(function(d) {
        html += '<div style="width: 60px; text-align: center; font-size: 2rem; font-weight: bold; color: #f8fafc;">' + (d || '&nbsp;') + '</div>';
      });
      html += '</div>';

      html += '<div style="height: 3px; background: #38bdf8; margin: 8px 0;"></div>';

      q.steps.forEach(function(st) {
        if (st.id === "final" && q.steps.length > 1) {
          html += '<div style="height: 3px; background: #38bdf8; margin: 8px 0;"></div>';
        }
        html += '<div style="display: flex; align-items: center; margin: 4px 0;">' +
          '<div style="width: 48px; text-align: center; color: #94a3b8; font-size: 1.4rem;">' + (st.id === "part2" ? "+" : "") + '</div>';
        st.expected.forEach(function(exp) {
          if (exp !== "") {
            html += '<div style="width: 60px; height: 56px; border: 2px dashed #94a3b8; border-radius: 8px; margin: 0 2px; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; color: #38bdf8;">?</div>';
          } else {
            html += '<div style="width: 60px; height: 56px; margin: 0 2px;"></div>';
          }
        });
        html += '</div>';
      });

      html += '</div>';
      board.innerHTML = html;

      document.getElementById("stageAnswerBox").innerHTML = '<strong>🎯 標準直式解答與運算步驟：</strong><div style="margin-top:8px; font-size:1.15rem; color:#fde047; line-height:1.7; text-align:left;">' + formatStepExplanationHtml(q.stepExplanation) + '</div>';
      document.getElementById("stageStepsBox").innerHTML = '<strong>📐 課堂圖解教學引導：</strong>\\n' + q.explanation;
    }

    function toggleStageAnswer() {
      var box = document.getElementById("stageAnswerBox");
      if (box) box.style.display = box.style.display === "block" ? "none" : "block";
    }

    function toggleStageSteps() {
      var box = document.getElementById("stageStepsBox");
      if (box) box.style.display = box.style.display === "block" ? "none" : "block";
    }

    function triggerStageAiPrompt() {
      var q = MASTER_QUESTIONS[currentStageIndex];
      var box = document.getElementById("stageAiPromptBox");
      if (!box || !q) return;

      box.style.display = "block";
      box.innerHTML = '<strong>🤖 AI 老師課堂互動引導話術：</strong>\\n\\n' +
        '🗣️ <strong>【課堂提問話術】</strong>：\\n' +
        '「小朋友，看看黑板上的這題，當我們在算 ' + q.title + ' 時，第一步應該先乘哪一位？有進位時要寫在哪裡？」\\n\\n' +
        '💡 <strong>【核心破題關鍵】</strong>：\\n' +
        '「' + q.category + '！大家請特別注意位值對齊，乘數十位算出來的是幾個十，千萬不要對齊到個位囉！」\\n\\n' +
        '🌟 <strong>【記憶口訣】</strong>：\\n' +
        '「直式乘法位對齊，低位往高依序乘，進位數字加進去，分步相加算分明！」';
    }

    function toggleSelectAllSubmissions(masterCb) {
      var cbs = document.querySelectorAll(".sub-checkbox");
      cbs.forEach(function(cb) {
        cb.checked = masterCb.checked;
      });
      updateSelectedSubmissionsCount();
    }

    function onSubmissionCheckboxChange() {
      var cbs = Array.from(document.querySelectorAll(".sub-checkbox"));
      var masterCb = document.getElementById("selectAllSubmissionsCb");
      if (masterCb && cbs.length > 0) {
        masterCb.checked = cbs.every(function(cb) { return cb.checked; });
      }
      updateSelectedSubmissionsCount();
    }

    function updateSelectedSubmissionsCount() {
      var checkedCbs = Array.from(document.querySelectorAll(".sub-checkbox:checked"));
      var count = checkedCbs.length;
      var countEl = document.getElementById("selectedSubmissionsCount");
      var infoBox = document.getElementById("batchSelectionInfo");
      var btn = document.getElementById("btnBatchDeleteSubmissions");

      if (countEl) countEl.textContent = count;
      if (infoBox) infoBox.style.display = count > 0 ? "inline-block" : "none";
      if (btn) {
        btn.style.display = count > 0 ? "inline-flex" : "none";
        btn.textContent = "🗑️ 批次刪除選取成績 (" + count + ")";
      }
    }

    function batchDeleteSelectedSubmissions() {
      var checkedCbs = Array.from(document.querySelectorAll(".sub-checkbox:checked"));
      if (checkedCbs.length === 0) {
        alert("請先勾選欲刪除的學生測驗成績！");
        return;
      }

      var count = checkedCbs.length;
      if (!confirm("⚠️ 確定要批次刪除已選取的 " + count + " 筆測驗成績嗎？\\n\\n此操作將從雲端試算表總表中永久移除，並重新計算全班 KPI、六大分數級距與錯題統計，無法復原！")) {
        return;
      }

      var rowIndices = checkedCbs.map(function(cb) {
        return parseInt(cb.value, 10);
      });

      var btn = document.getElementById("btnBatchDeleteSubmissions");
      if (btn) {
        btn.disabled = true;
        btn.textContent = "⏳ 正在批次刪除 " + count + " 筆成績...";
      }

      if (typeof google !== "undefined" && google.script && google.script.run) {
        google.script.run
          .withSuccessHandler(function(res) {
            if (btn) btn.disabled = false;
            if (res && res.success) {
              alert("✅ 成功刪除 " + (res.count || count) + " 筆測驗成績，全班成績與錯題統計已同步更新！");
              var masterCb = document.getElementById("selectAllSubmissionsCb");
              if (masterCb) masterCb.checked = false;
              updateSelectedSubmissionsCount();
              refreshTeacherData(true);
            } else {
              alert("批次刪除失敗：" + (res ? res.error : "未知錯誤"));
            }
          })
          .withFailureHandler(function(err) {
            if (btn) btn.disabled = false;
            alert("批次刪除伺服器連線異常：" + err);
          })
          .deleteBatchTestResults(rowIndices);
      } else {
        if (btn) btn.disabled = false;
        alert("本地測試環境無法刪除雲端試算表記錄。");
      }
    }

    function deleteStudentRecord(rowIndex) {
      if (!confirm("確定要刪除此筆學生測驗成績記錄嗎？刪除後將重新計算全班指標。")) return;

      if (typeof google !== "undefined" && google.script && google.script.run) {
        google.script.run
          .withSuccessHandler(function(res) {
            if (res.success) {
              refreshTeacherData(true);
            } else {
              alert("刪除失敗：" + res.error);
            }
          })
          .deleteTestResult(rowIndex);
      } else {
        alert("本地測試環境無法刪除雲端記錄。");
      }
    }

    function generateClassAiReport() {
      var container = document.getElementById("aiReportContainer");
      var btn = document.getElementById("btnGenerateAiReport");
      if (!container || !btn) return;

      btn.disabled = true;
      btn.textContent = "⏳ AI 正在深度分析全班學情數據...";
      container.textContent = "正在彙整全班錯題排行、四大認知維度掌握度與各題位值計算盲點，呼叫 Gemini AI 模型生成深入診斷報告...";

      var analysisPayload = {
        kpi: cachedDashboardData ? cachedDashboardData.kpi : {},
        questionStats: cachedDashboardData ? cachedDashboardData.questionStats : [],
        scoreDistribution: cachedDashboardData ? cachedDashboardData.scoreDistribution : {}
      };

      if (typeof google !== "undefined" && google.script && google.script.run) {
        google.script.run
          .withSuccessHandler(function(res) {
            container.textContent = res.report || "報告生成完畢。";
            btn.textContent = "⚡ 重新生成報告";
            btn.disabled = false;
          })
          .withFailureHandler(function(err) {
            container.textContent = "生成報告失敗：" + err.toString();
            btn.textContent = "⚡ 重新生成報告";
            btn.disabled = false;
          })
          .generateClassAiReport(analysisPayload);
      } else {
        setTimeout(function() {
          container.textContent = "【四年級數學 第二單元「整數乘法直式計算」全班學情診斷分析報告】\\n\\n" +
            "一、📊 全班整體學情與認知維度掌握總評：\\n" +
            "全班同學在「四位數乘一位數」的基礎計算表現穩定（平均掌握度達 85% 以上），但進入「一位數乘二位數之分步直式」與「二位數乘二位數連續進位」時，錯誤率顯著攀升至 35% 左右。\\n\\n" +
            "二、🔍 前三大關鍵迷思與位值計算卡點深層剖析：\\n" +
            "1. 乘數十位乘積錯位：乘數為二位數時，第二層部分積代表幾個十，部分學生仍直覺從個位起寫，導致加總時全數錯位。\\n" +
            "2. 被乘數中間有0的進位忽略：例如 3085 × 6，十位進 5 到百位，學生常在 0×6 時直接寫 0，忘記將進位的 5 加上去。\\n" +
            "3. 連續兩次進位的加法失誤：例如 38 × 45 或 87 × 69，部分積自身有進位，最後相加時又有進位，雙重進位時計算產生粗心。\\n\\n" +
            "三、🛠️ 課堂教學策略與電子白板互動補救引導：\\n" +
            "1. 善用課堂投影教學舞台，利用彩色列展示個位乘積（黃色）與十位乘積（藍色），強化退格對齊視覺記憶。\\n" +
            "2. 實施口訣帶讀：「乘數個位算一行，乘數十位退一格，兩行部分積相加，進位記得點記號」。\\n\\n" +
            "四、📝 差異化課後個別練習單推動建議：\\n" +
            "針對本次答錯學生，利用系統【一鍵批次列印全班錯題學習單】，每人 1~3 題進行實體紙筆手寫訂正與家長簽章追蹤。";
          btn.textContent = "⚡ 重新生成報告";
          btn.disabled = false;
        }, 900);
      }
    }

    function changeAdminPassword() {
      var oldP = (document.getElementById("inputOldPwd").value || "").trim();
      var newP = (document.getElementById("inputNewPwd").value || "").trim();

      if (!oldP || !newP) {
        alert("請輸入原密碼與新密碼！");
        return;
      }

      if (typeof google !== "undefined" && google.script && google.script.run) {
        google.script.run
          .withSuccessHandler(function(res) {
            if (res.success) {
              alert("✅ " + res.message);
              document.getElementById("inputOldPwd").value = "";
              document.getElementById("inputNewPwd").value = "";
            } else {
              alert("❌ 修改失敗：" + res.error);
            }
          })
          .updateTeacherPassword(oldP, newP);
      } else {
        alert("✅ 本地模擬：管理密碼已成功更新！");
      }
    }
  </script>
</body>
</html>
`;
