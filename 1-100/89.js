/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var results = [0];
    for (var i = 0; i < n; i++) {
        var size = results.length;
        for (var j = size - 1; j >= 0; j--) {
            var val = results[j];
            results.push(val | (1 << i));
        }
    }

    return results;
};
