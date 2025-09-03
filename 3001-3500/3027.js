function numberOfPairs(points) {
    // Step 1: Sort points by x ascending, then by y descending
    points.sort((a, b) => {
        if (a[0] === b[0]) return b[1] - a[1];
        return a[0] - b[0];
    });
    let pairCount = 0;
    const n = points.length;

    // Step 2: Iterate through all points as potential "upper-left" points
    for (let i = 0; i < n; i++) {
        const upperY = points[i][1];
        let lowerYLimit = Number.MIN_SAFE_INTEGER;

        // Step 3: Check subsequent points as potential "bottom-right" points
        for (let j = i + 1; j < n; j++) {
            const currentY = points[j][1];
            if (currentY <= upperY && currentY > lowerYLimit) {
                pairCount++;
                lowerYLimit = currentY;
                if (currentY === upperY) break;
            }
        }
    }
    return pairCount;
}
