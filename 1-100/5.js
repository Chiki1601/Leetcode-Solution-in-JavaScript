/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s) return s;
    var longest = s.substring(0, 1);
    var length = s.length;
    var dp = [];
    var maxLength = 1;
    for (var i = length - 1; i >= 0; i--) {
        dp[i] = [];
        for (var j = i; j < length; j++) {
            // j - i <= 2 is important, in case i + 1 is out of array boundary.
            if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                if (j - i + 1 > maxLength) {
                    maxLength = j - i + 1;
                    longest = s.substring(i, j + 1);
                }
            }
        }
    }

    return longest;
};
