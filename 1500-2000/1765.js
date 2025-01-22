var highestPeak = function(isWater) {
    const R = isWater.length;
    const C = isWater[0].length;
    const height = Array.from({ length: R }, () => Array(C).fill(Number.MAX_VALUE));

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (isWater[i][j] === 1) {
                height[i][j] = 0;
            } else {
                if (i > 0) height[i][j] = Math.min(height[i][j], height[i - 1][j] + 1);
                if (j > 0) height[i][j] = Math.min(height[i][j], height[i][j - 1] + 1);
            }
        }
    }

    for (let i = R - 1; i >= 0; i--) {
        for (let j = C - 1; j >= 0; j--) {
            if (i < R - 1) height[i][j] = Math.min(height[i][j], height[i + 1][j] + 1);
            if (j < C - 1) height[i][j] = Math.min(height[i][j], height[i][j + 1] + 1);
        }
    }

    return height;
};
