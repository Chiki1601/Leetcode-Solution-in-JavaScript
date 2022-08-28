var isInterleave = function(s1, s2, s3) {
    let n = s1.length + 2, m = s2.length + 2
    if (n + m - 4 !== s3.length) return false
    let dp = new Uint8Array(m)
    dp[1] = 1
    for (let i = 1; i < n; i++)
        for (let j = 1; j < m; j++) {
            let up = dp[j] && s1[i-2] === s3[j+i-3],
                left = dp[j-1] && s2[j-2] === s3[j+i-3]
            dp[j] = up || left
        }
    return dp[m-1]
};
