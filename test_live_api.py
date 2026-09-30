import urllib.request
import json

BASE_URL = "https://math-4a-vertical-mult.math-quiz.workers.dev"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def test_endpoint(name, url, method="GET", data=None):
    try:
        h = dict(HEADERS)
        if data:
            h["Content-Type"] = "application/json"
        req = urllib.request.Request(
            url,
            data=json.dumps(data).encode("utf-8") if data else None,
            headers=h
        )
        req.method = method
        with urllib.request.urlopen(req, timeout=10) as resp:
            body = resp.read().decode("utf-8")
            status = resp.status
            print(f"[{name}] Status: {status}")
            try:
                parsed = json.loads(body)
                print(f"[{name}] Response: {json.dumps(parsed, ensure_ascii=False)[:200]}")
            except:
                print(f"[{name}] Body length: {len(body)} bytes (HTML preview: {body[:80]}...)")
            return True, body
    except Exception as e:
        print(f"[{name}] FAILED: {e}")
        return False, str(e)

def main():
    print(f"Testing live Cloudflare Workers deployment at {BASE_URL}...\n")
    
    # 1. Health
    test_endpoint("Health Check", f"{BASE_URL}/api/health")
    
    # 2. Verify Entry Password
    test_endpoint("Verify Entry Password (1234)", f"{BASE_URL}/api/rpc/verifyEntryPassword", "POST", {"args": ["1234"]})
    
    # 3. Teacher Dashboard Data
    test_endpoint("Get Dashboard Data", f"{BASE_URL}/api/rpc/getTeacherDashboardData", "POST", {"args": []})
    
    # 4. Record Test Result
    sample_result = {
        "studentClass": "402",
        "studentSeat": "01",
        "studentName": "測試學生小明",
        "unitMode": "全單元綜合",
        "score": 100,
        "correctCount": 20,
        "totalQuestions": 20,
        "accuracy": 100,
        "timeSpent": 150,
        "errorCategories": "",
        "wrongQuestions": "",
        "detailLogs": [],
        "dimStats": {"運算技能": {"correct": 20, "total": 20}}
    }
    test_endpoint("Record Test Result", f"{BASE_URL}/api/rpc/recordTestResult", "POST", {"args": [sample_result]})
    
    # 5. Teacher Dashboard Data again (to verify KPI updated)
    test_endpoint("Get Dashboard Data (Post Submit)", f"{BASE_URL}/api/rpc/getTeacherDashboardData", "POST", {"args": []})
    
    # 6. Verify Teacher Password
    test_endpoint("Verify Teacher Password", f"{BASE_URL}/api/rpc/verifyTeacherPassword", "POST", {"args": ["admin"]})
    
    # 7. Front Page HTML
    test_endpoint("Front Page HTML", f"{BASE_URL}/", "GET")

if __name__ == "__main__":
    main()
