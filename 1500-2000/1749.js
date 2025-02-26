var maxAbsoluteSum = function(nums) {
    let sum = 0, minSum = 0, maxSum = 0;
    for (let num of nums) {
        sum += num;
        if (sum > maxSum) maxSum = sum;
        if (sum < minSum) minSum = sum;
    }
    return Math.abs(maxSum - minSum);
};
