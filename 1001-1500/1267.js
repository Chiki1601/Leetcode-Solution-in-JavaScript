var countServers = function(grid) {
    let Rows = new Array(grid.length).fill(0);
    let Col = new Array(grid[0].length).fill(0);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            Rows[i] += grid[i][j];
            Col[j] += grid[i][j];
        }
    }
    let ans = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1 && (Rows[i] > 1 || Col[j] > 1)) {
                ans++;
            }
        }
    }
    return ans;
};
