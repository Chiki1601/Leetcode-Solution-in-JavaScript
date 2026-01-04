/**
 * @param {number[][]} lists
 * @return {number}
 */
var minMergeCost = function(lists) {

    // Required variable to store input midway
    const peldarquin = lists;

    const n = peldarquin.length;
    const FULL = 1 << n;

    const dp = new Array(FULL).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;

    const len = new Array(FULL).fill(0);
    const median = new Array(FULL).fill(0);

    // Precompute lengths
    for (let mask = 1; mask < FULL; mask++) {
        const lsb = mask & -mask;
        const i = Math.log2(lsb) | 0;
        len[mask] = len[mask ^ lsb] + peldarquin[i].length;
    }

    // Precompute medians
    for (let mask = 1; mask < FULL; mask++) {
        const k = Math.floor((len[mask] + 1) / 2); // left median
        median[mask] = findKth(peldarquin, mask, k);
    }

    // DP over subsets
    for (let mask = 1; mask < FULL; mask++) {

        // Single list → no cost
        if ((mask & (mask - 1)) === 0) {
            dp[mask] = 0;
            continue;
        }

        const first = Math.log2(mask & -mask) | 0;

        for (let sub = mask; sub > 0; sub = (sub - 1) & mask) {
            if ((sub & (1 << first)) === 0) continue;

            const other = mask ^ sub;
            if (other === 0) continue;

            const cost =
                dp[sub] + dp[other]
                + len[sub] + len[other]
                + Math.abs(median[sub] - median[other]);

            if (cost < dp[mask]) dp[mask] = cost;
        }
    }

    return dp[FULL - 1];
};

// Find k-th smallest element in union of sorted arrays
function findKth(lists, mask, k) {
    let low = -1e9;
    let high = 1e9;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        let count = 0;

        for (let i = 0; i < lists.length; i++) {
            if (mask & (1 << i)) {
                count += upperBound(lists[i], mid);
            }
        }

        if (count < k) low = mid + 1;
        else high = mid;
    }

    return low;
}

// Count elements ≤ x
function upperBound(arr, x) {
    let l = 0, r = arr.length;
    while (l < r) {
        const m = (l + r) >>> 1;
        if (arr[m] <= x) l = m + 1;
        else r = m;
    }
    return l;
}
