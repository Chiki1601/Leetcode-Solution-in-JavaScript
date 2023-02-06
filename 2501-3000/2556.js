/**
 * @param {number[][]} grid
 * @return {boolean}
 */

var isPossibleToCutPath = function(grid) {
    let n = grid.length;
    let m = grid[0].length
    
    // We will store visited cels in set
    let set = new Set();
    // Add start point to visited.
    set.add(`0_0`);
    // Add start point to path.
    let path = [[0,0]];
    // Possible move directiond down and right.
    let moves = [[0,1], [1,0]];
    
    // DFS implementation
    let dfs = (i, j) => {
        if(i === n-1 && j === m - 1) {
            // We reached bottom right corner - matrix connected.
            return true;
        }
        
        // Generate possible moves from current point
        for (let move of moves) {
            let ni = i + move[0];
            let nj = j + move[1];
            let key = `${ni}_${nj}`
            // Next move should be inside the grid bounds
            // Next move value should be 1. We can only move by 1 cells.
            if( ni < n && nj < m && !set.has(key) && grid[ni][nj] === 1) {
                // Remember next move to not visit it twice.
                set.add(key);
                // Add next move to path
                path.push([ni, nj])
                // Run DFS for next move.
                if(dfs(ni, nj)){
                    // If one of next moves reached the (n-1, m-1) the matrix is connected
                    return true;
                }
                // Current cell is not part of any path. Remove it from path.
                path.pop();
            }
        }
        
        return false;
    }
    
    // Run DFS
    if(!dfs(0, 0)){
        // Initial matrix is already disconnected
        return true;
    }
    
    // Matrix is connected. We have some path.
    path.shift(); // remove [0, 0]
    path.pop(); // remove [n-1, m-1]
    
    // Set every cell of found path to 0
    for (let p of path) {
        grid[p[0]][p[1]] = 0;
    }
    
    // Run DFS for updated matrix once again.
    set = new Set();
    set.add(`0_0`);
    return !dfs(0, 0);
};
