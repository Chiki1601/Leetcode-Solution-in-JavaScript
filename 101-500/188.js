/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if(!prices.length) return 0;
    // Create dp arrays
    const even = Array(prices.length).fill(0)
    const odd = Array(prices.length).fill(0)

    for(let i = 1; i < k+1; i++) {
        let prevMax = -Infinity
        // Switch arrays to proper values when we are on an odd or even number
        const current = i % 2 === 0 ? even : odd;
        const prev = i % 2 === 0 ? odd : even;
        // Fill dp arrays with max profit on each day when making i amount of transactions
        for(let j = 1; j < prices.length; j++) {
            prevMax = Math.max(prevMax, prev[j-1] - prices[j-1])
            // current[j-1] means we will do nothing on the j day and take the max profit from the previous day
            // prices[j] + prevMax is the profit from gained on this day (prices[j]) and the max profit we could make from a previous transaction (prevMax)
            current[j] = Math.max(current[j-1], prices[j]+prevMax)
        }
    }
    // Current and prev change based on i. This chooses the correct curent array
    return k % 2 === 0 ? even[even.length-1] : odd[odd.length-1]
};
