#include <iostream>
#include <string>
#include <map>
#include <vector>
#include <algorithm>
using namespace std;
 
int t, n;
string s;
 
int main() {
    cin >> t;
    while (t--) {
        cin >> n >> s;
        int l = 0, r = n - 1, ans = 0;
        while (l < r) {
            if (s[l] == s[r]) {
                l++;
                r--;
            } else if (s[l] == '0') {
                ans = max(ans, l + 1);
                l++;
            } else {
                ans = max(ans, n - r);
                r--;
            }
        }
        cout << ans << endl;
    }
    return 0;
}
