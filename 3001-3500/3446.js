class Solution {
    sortMatrix(matrix) {
        // Object to store diagonals, where the key is the difference of row and column index
        let diagonalMap = new Map();
        let rows = matrix.length, cols = matrix[0].length;

        // Traverse the matrix and group elements by their diagonal (row - col)
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let key = i - j;
                if (!diagonalMap.has(key)) diagonalMap.set(key, []);
                diagonalMap.get(key).push(matrix[i][j]);
            }
        }

        // Sort each diagonal: negative keys (upper diagonals) in ascending order,
        // positive keys (lower diagonals) in descending order
        for (let [key, values] of diagonalMap.entries()) {
            if (key < 0) values.sort((a, b) => a - b);
            else values.sort((a, b) => b - a);
        }

        // Populate the sorted values back into the matrix
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let key = i - j;
                matrix[i][j] = diagonalMap.get(key).shift();
            }
        }

        return matrix;
    }
}
