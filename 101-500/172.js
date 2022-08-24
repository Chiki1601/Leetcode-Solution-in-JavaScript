/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var nums = 0;
    var factor = 5;
    while (n >= factor) {
        nums += Math.floor(n / factor);
        factor *= 5;
    }

    return nums;
};
