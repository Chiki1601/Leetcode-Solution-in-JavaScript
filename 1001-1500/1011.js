/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    function getDays(capacity) {
        let days = 1, total = 0;

        // See how many days it will take to unload all the weights given the current capacity
        for(let n of weights) {
            total += n;
            // Increase days only when we will exceed the capacity
            if(total > capacity) {
                total = n;
                days++;
            }
        }
        return days;
    }

    // Start is the minimum capacity of one day which is the max of all the weights
    // End is the max capacity we could load on one day which is the sum of all the weights
    let start = Math.max(...weights), 
        end = weights.reduce((acc, cur) => acc + cur, 0);

    // The min cacpaity needed is between start and finish
    while(start < end) {
        const mid = Math.floor((end+start)/2);
        // See how many days it would take to unload all the weigths given mid as the current capacity
        const days = getDays(mid);
        // If capacity at mid took more than D days to load, then we can add more weigth on the ships each day which means we need to increase the daily capacity
        if(days > D) start = mid+1;
        // mid might be our answer so we cannot set end to mid-1
        else end = mid;
    }
    return end;
};
