var maxProfit = function(prices) {
    var maxProfit = 0;
    var minPrice = prices[0];
    for (var i = 0; i < prices.length;) {
        i++;
        while (prices[i] > prices[i-1]) {
            i++;
        }
        maxProfit += prices[i-1] - minPrice;
        minPrice = prices[i];
    }
    return maxProfit;
};
