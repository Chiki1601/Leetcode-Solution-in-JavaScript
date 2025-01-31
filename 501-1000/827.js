/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    /**
        1.Use a map to keep track of each islands size
            1.a To do this, traverse each island and mark them with a unique id
            1.b Save the size of that island in a map with that unique id
        2. Traverse the grid to find 0's that are adjacent to an island
            2.a To do this pick a cell and see if it is a neighbor to any island
            2.b If it is capture all the surrounding islands that are 1 distance away from
            the cell
            2.c Add 1 + the size of all the islands next to the cell using our hashmap
     */

    // 1. Initialize parameters
     let max = 0, rows = grid.length, cols = grid[0].length
     let dir = [[-1,0],[1,0], [0,1], [0,-1]];
     let sizeMap = {}
    //Helper function
    const getAdjacent = (i,j)=>{
        let set = new Set()
        for(let [x,y] of dir){
            let row = i + x, col = j + y
            if(row in grid && col in grid[row] && grid[row][col] !== 0)
                set.add(grid[row][col])
        }
        return [...set]
    }
    // 2. Traverse all islands and mark them with unique id
     const dfs = (row, col, id)=>{
        if(!(row in grid) || !(col in grid[row]))
            return 0
        if(grid[row][col] !== 1)
            return 0
        grid[row][col] = id
        let total = 1
        for(let [x,y] of dir){
            total += dfs(row + x, col + y, id)
        }
        return total
     }
    //3. Store all island sizes in a map
     let id = 2
     for(let i = 0; i < rows; i++){
         for(let j = 0; j < cols; j++){
             if(grid[i][j] === 1){
                sizeMap[id] = dfs(i, j, id)
                id++
             }
         }
     }
    //4. Traverse all the 0's and calculate the size if turned to 1
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(grid[i][j] === 0){
                let ids = getAdjacent(i, j)
                let sum = 1
                for(let id of ids){
                    sum += sizeMap[id]
                }
                max = Math.max(sum, max)
            }
        }
    }

    //5. return the max
    return max === 0 ? rows * cols : max

    // Time complexity = O(n*n)
    // Spcae Complexity = Space for storing the size of the islands and Call stack

    
};
