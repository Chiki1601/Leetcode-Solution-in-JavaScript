/**
 * @param {number[][]} matrix
 * @return {number}
 */
var findMaxFish = function (matrix) {
    this.rows = matrix.length;
    this.columns = matrix[0].length;

    this.LAND_POINT = 0;
    this.moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    return findMaxCollectFishFromConnectedWaterPoints(matrix);
};

/**
 * @param {number} row
 * @param {number} column
 */
function  Point(row, column) {
    this.row = row;
    this.column = column;
}

/**
 * @param {number[][]} matrix
 * @return {number}
 */
function findMaxCollectFishFromConnectedWaterPoints(matrix) {
    const visited = Array.from(new Array(this.rows), () => new Array(this.columns).fill(false));
    let maxCollectFishFromConnectedWaterPoints = 0;

    for (let r = 0; r < this.rows; ++r) {
        for (let c = 0; c < this.columns; ++c) {
            if (!visited[r][c] && matrix[r][c] !== this.LAND_POINT) {

                maxCollectFishFromConnectedWaterPoints
                        = Math.max(maxCollectFishFromConnectedWaterPoints,
                                collectFishFromConnectedWaterPoints(new Point(r, c), matrix, visited));
            }
        }
    }

    return maxCollectFishFromConnectedWaterPoints;
}


/**
 * @param {Point} start
 * @param {number[][]} matrix
 * @param {boolean[][]} visited
 * @return {number}
 */
function collectFishFromConnectedWaterPoints(start, matrix, visited) {
    // Queue<Point>
    // const {Queue} = require('@datastructures-js/queue');
    const queue = new Queue();
    queue.enqueue(start);
    
    visited[start.row][start.column] = true;
    let collectedFish = 0;

    while (!queue.isEmpty()) {

        const current = queue.dequeue();
        collectedFish += matrix[current.row][current.column];

        for (let move of this.moves) {
            let nextRow = current.row + move[0];
            let nextColumn = current.column + move[1];

            if (isInMatrix(nextRow, nextColumn) && !visited[nextRow][nextColumn]
                    && matrix[nextRow][nextColumn] !== this.LAND_POINT) {
                visited[nextRow][nextColumn] = true;
                queue.enqueue(new Point(nextRow, nextColumn));
            }
        }
    }
    return collectedFish;
}

/**
 * @param {number} row
 * @param {number} column
 * @return {boolean}
 */
function isInMatrix(row, column) {
    return row >= 0 && row < this.rows && column >= 0 && column < this.columns;
}
