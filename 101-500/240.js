/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var row = 0;
    var col = matrix[0].length - 1;

    while (row <= matrix.length - 1 && col >=0) {
        if (target < matrix[row][col]) {
            col--;
        } else if (target > matrix[row][col]) {
            row++;
        } else {
            return true;
        }
    }
    return false;
};
