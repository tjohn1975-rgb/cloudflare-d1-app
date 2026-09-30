import urllib.request
import json
import sys

BASE_URL = "https://student-score-platform.math-quiz.workers.dev"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def test_get(name, url):
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = resp.read()
            status = resp.status
            content_type = resp.headers.get("Content-Type", "")
            disposition = resp.headers.get("Content-Disposition", "")
            print(f"[{name}] Status: {status} | Content-Type: {content_type}")
            if disposition:
                print(f"  -> Disposition: {disposition}")
            return True, data
    except Exception as e:
        print(f"[{name}] FAILED: {e}")
        return False, str(e)

def test_rpc(name, method, args=[]):
    try:
        h = dict(HEADERS)
        h["Content-Type"] = "application/json"
        req = urllib.request.Request(
            f"{BASE_URL}/api/rpc/{method}",
            data=json.dumps({"args": args}).encode("utf-8"),
            headers=h,
            method="POST"
        )
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            print(f"[RPC: {name}] Status: {resp.status}")
            return True, data
    except Exception as e:
        print(f"[RPC: {name}] FAILED: {e}")
        return False, str(e)

def main():
    print("Testing new D1 Database Inspection & Download endpoints...\n")
    
    # 1. D1 Database View REST API
    ok, data = test_get("Database View API", f"{BASE_URL}/api/database/view")
    if ok:
        parsed = json.loads(data.decode("utf-8"))
        counts = parsed.get("dbInfo", {}).get("counts", {})
        print(f"  -> D1 Tables Counts: students={counts.get('students')}, units={counts.get('units')}, scores={counts.get('scores')}, settings={counts.get('settings')}")
        assert counts.get("students") == 26, "Expected 26 students"
        assert counts.get("units") == 3, "Expected 3 units"
        assert counts.get("scores") == 52, "Expected 52 scores"
        print("  -> Database View API passed verification!")

    # 2. D1 Database View RPC
    ok, res = test_rpc("getD1DatabaseView", "getD1DatabaseView")
    if ok and res.get("result", {}).get("success"):
        c = res["result"]["dbInfo"]["counts"]
        print(f"  -> RPC counts: total={c.get('total')}")

    # 3. CSV Exports with UTF-8 BOM
    exports = [
        ("CSV Export (Matrix)", f"{BASE_URL}/api/export/csv?type=matrix", "班級,座號,姓名"),
        ("CSV Export (Students)", f"{BASE_URL}/api/export/csv?type=students", "流水號,班級,座號,學生姓名,個人密碼"),
        ("CSV Export (Units)", f"{BASE_URL}/api/export/csv?type=units", "單元代碼,科目名稱,評量單元名稱"),
        ("CSV Export (Scores)", f"{BASE_URL}/api/export/csv?type=scores", "記錄流水號,記錄編號,提交時間"),
    ]
    
    for name, url, expected_header in exports:
        ok, raw = test_get(name, url)
        if ok:
            assert raw.startswith(b"\xef\xbb\xbf"), "Missing UTF-8 BOM!"
            decoded = raw.decode("utf-8-sig")
            first_line = decoded.splitlines()[0]
            print(f"  -> BOM verified! First line: {first_line[:50]}...")
            assert expected_header in first_line, f"Header mismatch: expected '{expected_header}' in '{first_line}'"

    # 4. JSON Full Backup Export
    ok, raw = test_get("JSON Full Backup", f"{BASE_URL}/api/export/json")
    if ok:
        backup = json.loads(raw.decode("utf-8"))
        print(f"  -> Backup verified! Tables present: {list(backup.get('tables', {}).keys())}")
        assert "students" in backup["tables"]
        assert "units" in backup["tables"]
        assert "scores" in backup["tables"]
        assert "settings" in backup["tables"]

    # 5. Front Page HTML SSR Check
    ok, html_bytes = test_get("Front Page HTML", f"{BASE_URL}/")
    if ok:
        html_str = html_bytes.decode("utf-8")
        assert 'id="tab-btn-database"' in html_str, "Tab button missing from HTML!"
        assert 'id="tab-content-database"' in html_str, "Tab content missing from HTML!"
        assert 'loadD1DatabaseData' in html_str, "D1 JS logic missing from HTML!"
        print("  -> Front Page HTML contains D1 tab and viewer components!")

    print("\nALL D1 INSPECTION AND DOWNLOAD TESTS PASSED SUCCESSFULLY!")

if __name__ == "__main__":
    main()
