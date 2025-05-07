var minTimeToReach = function (moveTime) {
    const n = moveTime.length;
    const m = moveTime[0].length;
    // Best time to reach each cell
    const best = Array.from({ length: n }, () => Array(m).fill(Number.MAX_SAFE_INTEGER));
    best[0][0] = 0; // Start at (0,0) at time 0
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // Up, Down, Left, Right
    const dfs = (x, y, currentTime) => {
        if (x === n - 1 && y === m - 1) return; // Reached goal
        for (const [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
                const timeNeeded = currentTime + 1 + Math.max(0, moveTime[nx][ny] - currentTime);
                if (timeNeeded < best[nx][ny]) {
                    best[nx][ny] = timeNeeded;
                    dfs(nx, ny, timeNeeded);
                }
            }
        }
    };
    dfs(0, 0, 0);
    return best[n - 1][m - 1];
};
