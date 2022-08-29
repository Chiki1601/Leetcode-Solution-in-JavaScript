/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var length = triangle.length;
    var sum = triangle[length - 1];
    for (var i = length - 2; i >= 0; i--) {
        for (var j = 0; j < triangle[i].length; j++) {
            sum[j] = Math.min(sum[j], sum[j + 1]) + triangle[i][j];
        }
        console.log(sum);
    }
    return sum[0];
};
