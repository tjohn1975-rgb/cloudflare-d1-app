import os
import json

def main():
    src_html_path = r"C:\Users\user\Desktop\agy\gas_student_score_platform\Index.html"
    dest_ts_path = r"C:\Users\user\Desktop\agy\cloudflare-d1-app\src\html.ts"

    with open(src_html_path, "r", encoding="utf-8") as f:
        html = f.read()

    rpc_bridge = """
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
          'getSeatList',
          'studentLogin',
          'saveStudentScores',
          'teacherLogin',
          'changeTeacherPassword',
          'getTeacherDashboardData',
          'manageUnit',
          'batchImportStudents',
          'batchDeleteStudents',
          'batchUpdateStudentPasswords',
          'deleteStudentRecord',
          'editSingleStudent',
          'updateStudentScoreByTeacher',
          'getSpreadsheetUrl'
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
"""

    target_needle = "var rawServerData = <?!= JSON.stringify(initialDataJson) ?>;"
    replacement_str = rpc_bridge + "\n      var rawServerData = /*__SERVER_DATA__*/ null;\n"

    if target_needle in html:
        html = html.replace(target_needle, replacement_str, 1)
        print("Successfully injected RPC bridge and replaced initialDataJson.")
    else:
        print("Warning: target needle not found in Index.html!")

    # Use json.dumps to escape string 100% reliably
    escaped_json_string = json.dumps(html, ensure_ascii=False)

    ts_content = f"""// Auto-generated from gas_student_score_platform/Index.html
// 學生各科成績自填與班級管理平台 (Cloudflare Workers + D1)

export const BASE_INDEX_HTML: string = {escaped_json_string};
"""

    with open(dest_ts_path, "w", encoding="utf-8") as f:
        f.write(ts_content)

    print(f"Generated {dest_ts_path} ({len(ts_content)} bytes).")

if __name__ == "__main__":
    main()
