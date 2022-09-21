/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) return matrix;
    var rowStart = 0;
    var colStart = 0;
    var rowEnd = matrix.length - 1;
    var colEnd = matrix[rowStart].length - 1;
    var path = [];

    while (rowStart <= rowEnd && colStart <= colEnd) {
        if (rowStart === rowEnd) {
            for (var i = colStart; i <= colEnd; i++) {
                path.push(matrix[rowStart][i]);
            }
            break;
        }

        if (colStart === colEnd) {
            for (var i = rowStart; i <= rowEnd; i++) {
                path.push(matrix[i][colEnd]);
            }
            break;
        }

        for (var i = colStart; i <= colEnd; i++) {
            path.push(matrix[rowStart][i]);
        }
        rowStart++;

        for (var i = rowStart; i <= rowEnd; i++) {
            path.push(matrix[i][colEnd]);
        }
        colEnd--;

        for (var i = colEnd; i >= colStart; i--) {
            path.push(matrix[rowEnd][i]);
        }
        rowEnd--;

        for (var i = rowEnd; i >= rowStart; i--) {
            path.push(matrix[i][colStart]);
        }
        colStart++;
    }

    return path;
};
