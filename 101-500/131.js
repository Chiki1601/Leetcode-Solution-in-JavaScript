/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var result = [];
    var results = [];
    if (!s) return results;
    helper(s, 0, result, results);
    return results;
};

var helper = function(s, start, result, results) {
    if (start >= s.length) {
        results.push(result.slice());
        result = [];
    }

    for (var i = start; i < s.length; i++) {
        var newStr = s.substring(start, i + 1);
        if (isPalindrome(newStr)) {
          result.push(newStr);
          helper(s, i + 1, result, results);
          result.pop();
        }
    }
};

var isPalindrome = function(s) {
    if (!s || s.length === 1) return true;
    var length = s.length;
    for (var i = 0; i < length; i++) {
        if (s[i] !== s[length - i - 1]) return false;
    }

    return true;
};
