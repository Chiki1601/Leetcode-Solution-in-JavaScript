var findBall = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    
    function findPath(col) {
        let row = 0;
        while (row < rows) {
            if ((col == 0 && grid[row][col] == -1) ||
                (col == cols-1 && grid[row][col] == 1) ||
                (grid[row][col] == 1 && col < cols-1 && grid[row][col+1] == -1) ||
                (grid[row][col] == -1 && col > 0 && grid[row][col-1] == 1)) {
                // stuck
                return -1;
            }
            
            if (grid[row][col] == 1) {
                col++;
            } else {
                col--;
            }
            row++
        }
        return col;
    }
    
    return Array.from(Array(cols).keys()).map(col => findPath(col));
};
