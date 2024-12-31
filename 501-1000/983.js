/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    var n = days.length;
    var left7 = 0, left30 = 0;
    var dp = new Array(n).fill(0);
    
    for (var right = 0; right < n; ++right) {
        while (days[right] - days[left7] >= 7) left7++;
        while (days[right] - days[left30] >= 30) left30++;
        
        var cost1 = (right > 0 ? dp[right - 1] : 0) + costs[0];
        var cost7 = (left7 > 0 ? dp[left7 - 1] : 0) + costs[1];
        var cost30 = (left30 > 0 ? dp[left30 - 1] : 0) + costs[2];
        
        dp[right] = Math.min(Math.min(cost1, cost7), cost30);
    }
    
    return dp[n - 1];
};
