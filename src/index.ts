export interface Env {
  DB: D1Database;
}

interface RecordBody {
  student_id: string;
  student_name: string;
  score: number;
  detail?: any;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // 處理 CORS Preflight (OPTIONS)
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // 1. 根目錄健康檢查
      if (url.pathname === "/" && request.method === "GET") {
        return new Response(
          JSON.stringify({
            status: "ok",
            message: "Cloudflare Worker + D1 邊緣服務運行中 🚀",
            timestamp: new Date().toISOString(),
          }),
          {
            headers: { ...corsHeaders, "Content-Type": "application/json; charset=utf-8" },
          }
        );
      }

      // 2. GET /api/records - 查詢紀錄清單
      if (url.pathname === "/api/records" && request.method === "GET") {
        const { results } = await env.DB.prepare(
          "SELECT * FROM records ORDER BY created_at DESC LIMIT 50"
        ).all();

        return new Response(
          JSON.stringify({ success: true, count: results.length, data: results }),
          {
            headers: { ...corsHeaders, "Content-Type": "application/json; charset=utf-8" },
          }
        );
      }

      // 3. POST /api/records - 新增紀錄
      if (url.pathname === "/api/records" && request.method === "POST") {
        const body: RecordBody = await request.json();

        if (!body.student_id || !body.student_name || typeof body.score !== "number") {
          return new Response(
            JSON.stringify({ success: false, error: "缺少必要欄位 (student_id, student_name, score)" }),
            {
              status: 400,
              headers: { ...corsHeaders, "Content-Type": "application/json; charset=utf-8" },
            }
          );
        }

        const info = await env.DB.prepare(
          "INSERT INTO records (student_id, student_name, score, detail) VALUES (?, ?, ?, ?)"
        )
          .bind(
            body.student_id,
            body.student_name,
            body.score,
            body.detail ? JSON.stringify(body.detail) : null
          )
          .run();

        return new Response(
          JSON.stringify({
            success: true,
            message: "紀錄已成功寫入 D1 資料庫！",
            meta: info.meta,
          }),
          {
            status: 201,
            headers: { ...corsHeaders, "Content-Type": "application/json; charset=utf-8" },
          }
        );
      }

      // 找不到路由 404
      return new Response(
        JSON.stringify({ success: false, error: "404 Not Found" }),
        {
          status: 404,
          headers: { ...corsHeaders, "Content-Type": "application/json; charset=utf-8" },
        }
      );
    } catch (err: any) {
      return new Response(
        JSON.stringify({ success: false, error: err.message || "內部伺服器錯誤" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json; charset=utf-8" },
        }
      );
    }
  },
};
