/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var t = m + n - 2;
    var k = m - 1;
    var res = 1;

    for (var i = 1; i <= k; i++) {
        res *= (t - i + 1) / i
    }

    return res;
};
