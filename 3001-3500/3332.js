class Solution {
    dfs(d, c, k, ss, ts, m) {
        if (d === k) return 0;

        if (m[d][c] !== -1) return m[d][c];

        let maxP = ss[d][c] + this.dfs(d + 1, c, k, ss, ts, m);

        for (let n = 0; n < ts.length; n++) {
            if (n !== c) {
                maxP = Math.max(maxP, ts[c][n] + this.dfs(d + 1, n, k, ss, ts, m));
            }
        }
        return m[d][c] = maxP;
    }

    maxScore(n, k, ss, ts) {
        const m = Array.from({ length: k }, () => Array(n).fill(-1));

        let maxP = 0;

        for (let s = 0; s < n; s++) {
            maxP = Math.max(maxP, this.dfs(0, s, k, ss, ts, m));
        }

        return maxP;
    }
}
