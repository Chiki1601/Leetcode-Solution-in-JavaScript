/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    var rows = matrix.length;
    if (rows === 0) return 0;
    var cols = matrix[0].length;
    var squares = [[0]]; // the two dimensional array is not fully initialized yet.
    var result = 0;

    for (var i = 1; i <= rows; i++) {
        squares.push([0]);
        for (var j = 1; j <= cols; j++) {
            squares[0][j] = 0;
            if (matrix[i - 1][j - 1] === '1') {
                squares[i][j] = Math.min(squares[i-1][j], squares[i-1][j-1], squares[i][j-1]) + 1;
                result = Math.max(result, squares[i][j]);
            } else {
                // In JavaScript, assign 0 to an undefined element in the array.
                squares[i][j] = 0;
            }
        }
    }
    return result * result;
};
