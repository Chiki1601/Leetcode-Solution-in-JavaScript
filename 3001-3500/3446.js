function sortMatrix(grid) {
    let map = new Map();

    // Store elements in heaps based on diagonal index
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let key = j - i;
            if (!map.has(key)) {
                map.set(key, key <= 0 ? [] : []);
            }
            map.get(key).push(grid[i][j]);
        }
    }

    // Sort diagonals
    for (let [key, arr] of map) {
        arr.sort(key <= 0 ? (a, b) => b - a : (a, b) => a - b);
    }

    // Place sorted elements back
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            grid[i][j] = map.get(j - i).shift();
        }
    }

    return grid;
}
