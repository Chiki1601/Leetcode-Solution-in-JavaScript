/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    var revX = 0;
    var y = x;
    while (x > 0) {
        revX = revX * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return y === revX;
};
