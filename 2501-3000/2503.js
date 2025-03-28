var maxPoints = function(grid, queries) {
    const rows = grid.length, cols = grid[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    let sortedQueries = queries.map((val, idx) => [val, idx]).sort((a, b) => a[0] - b[0]);
    let result = Array(queries.length).fill(0);

    let minHeap = new MinHeap();
    let visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    minHeap.push([grid[0][0], 0, 0]);
    visited[0][0] = true;
    let points = 0;

    for (let [queryVal, queryIdx] of sortedQueries) {
        while (minHeap.size() > 0 && minHeap.peek()[0] < queryVal) {
            let [_, row, col] = minHeap.pop();
            points++;

            for (let [dr, dc] of directions) {
                let nr = row + dr, nc = col + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc]) {
                    minHeap.push([grid[nr][nc], nr, nc]);
                    visited[nr][nc] = true;
                }
            }
        }
        result[queryIdx] = points;
    }

    return result;
};

// MinHeap (Priority Queue) Implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return min;
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        while (2 * index + 1 < this.heap.length) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = left;
            if (right < this.heap.length && this.heap[right][0] < this.heap[left][0]) {
                smallest = right;
            }
            if (this.heap[index][0] <= this.heap[smallest][0]) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}
