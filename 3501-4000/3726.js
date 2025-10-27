/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    let res = 0, mult = 1;
    while (n > 0) {
        let rem = n % 10;
        if (rem !== 0) {
            res += rem * mult;
            mult *= 10;
        }
        n = Math.floor(n / 10);
    }
    return res;
};
