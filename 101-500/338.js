/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(num) {
    var result = [0];
    for (var i = 1; i <= num; i++) {
        result[i] = result[i >> 1] + (i & 1);
    }

    return result;
};
