import urllib.request
import json
import sys

BASE_URL = "https://student-score-platform.math-quiz.workers.dev"

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
                summary = json.dumps(parsed, ensure_ascii=False)[:250]
                print(f"[{name}] Response: {summary}")
                return True, parsed
            except:
                print(f"[{name}] Body length: {len(body)} bytes (Preview: {body[:80]}...)")
                return True, body
    except Exception as e:
        print(f"[{name}] FAILED: {e}")
        return False, str(e)

def main():
    print(f"Testing live Student Score Platform at {BASE_URL}...\n")
    
    # 1. Health
    test_endpoint("Health Check", f"{BASE_URL}/api/health")
    
    # 2. Get Seat List
    ok, res = test_endpoint("Get Seat List", f"{BASE_URL}/api/rpc/getSeatList", "POST", {"args": []})
    if ok and isinstance(res, dict) and "result" in res:
        seats = res["result"].get("seats", [])
        print(f"  -> Total seats returned: {len(seats)}")
    
    # 3. Student Login (Seat 1: 潘建佑, Pwd: 112015)
    ok, res = test_endpoint("Student Login (Seat 1)", f"{BASE_URL}/api/rpc/studentLogin", "POST", {"args": ["1", "112015"]})
    if ok and isinstance(res, dict) and "result" in res:
        stu = res["result"].get("student", {})
        print(f"  -> Authenticated student: {stu.get('classId')}班 {stu.get('seatNo')}號 {stu.get('name')}")
        openUnits = res["result"].get("openUnits", [])
        print(f"  -> Open units for score entry: {len(openUnits)}")
        scores = res["result"].get("submittedScores", {})
        print(f"  -> Existing submitted scores: {scores}")
        
    # 4. Teacher Login (Admin Password)
    test_endpoint("Teacher Login (admin)", f"{BASE_URL}/api/rpc/teacherLogin", "POST", {"args": ["admin"]})
    
    # 5. Teacher Dashboard Data
    ok, res = test_endpoint("Get Teacher Dashboard", f"{BASE_URL}/api/rpc/getTeacherDashboardData", "POST", {"args": []})
    if ok and isinstance(res, dict) and "result" in res:
        data = res["result"]
        units = data.get('units', [])
        print(f"  -> Total students: {len(data.get('students', []))}")
        print(f"  -> Total units: {len(units)}")
        for u in units:
            print(f"     [Unit] id: {u.get('id')}, name: {u.get('name')}, isOpen: {u.get('isOpen')}")
        summary = data.get("summary", {})
        print(f"  -> Summary: {summary}")

    
    # 7. Front Page HTML SSR
    test_endpoint("Front Page HTML (SSR)", f"{BASE_URL}/", "GET")

if __name__ == "__main__":
    main()
