/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    if (n === 1) { return 1; }
    return n**2 + (n - 1)**2;    
};
