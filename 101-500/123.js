/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0;
    var left = [0];
    var right = [];
    var maxLeftProfit = 0;
    var minPrice = prices[0];
    for (var i = 1; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice);
        maxLeftProfit = Math.max(prices[i] - minPrice, maxLeftProfit);
        left.push(maxLeftProfit);
    }

    var maxRightProfit = 0;
    maxPrice = prices[prices.length - 1];
    right[prices.length - 1] = 0;
    for (var i = prices.length - 2; i >= 0; i--) {
        maxPrice = Math.max(prices[i], maxPrice);
        maxRightProfit = Math.max(maxPrice - prices[i], maxRightProfit);
        right[i] = maxRightProfit;
    }

    var finalProfit = [];
    for (var i = 0; i < left.length; i++) {
        finalProfit.push(left[i] + right[i]);
    }
    return Math.max.apply(null, finalProfit);
};
