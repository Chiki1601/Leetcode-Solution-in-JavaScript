/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} prices
 * @return {number}
 */
var sellingWood = function(m, n, prices) {
    
    // 1.1） State initialization ：l = prices.length; 
    // dp = new Array(m + 1).fill(1).map(v => new Array(n + 1).fill(0));
    //  reflection ： Why do every element of two dimensions go first   Default fill 0 ？
    const l = prices.length;
    let dp = new Array(m + 1).fill(1).map(v => new Array(n + 1).fill(0));

    // 1.2） State initialization ： Traverse   Array  prices , Further initialization   Array  dp .
    for (let i = 0; i < l; i++) {
    
        const [width, height, price] = prices[i];
        dp[width][height] = price;
    }
    
    // 2） The core ： State shift .
    for (let i = 1; i <= m; i++) {
    
        for (let j = 1; j <= n; j++) {
    
            // 2.1） Transverse cut ：dp[i][j] = max(dp[i][j], dp[k][j] + dp[i - k][j]),k For the range of  [1, i - 1].
            for (let k = 1; k < i; k++) {
    
                dp[i][j] = Math.max(dp[i][j], dp[k][j] + dp[i - k][j]);
            }
            // 2.2） Longitudinal cutting ：dp[i][j] = max(dp[i][j], dp[i][k] + dp[i][j - k]),k For the range of  [1, j - 1].
            for (let k = 1; k < j; k++) {
    
                dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[i][j - k]);
            }
        }
    }

    // 3） Return results  dp[m][n] .
    return dp[m][n];
};
