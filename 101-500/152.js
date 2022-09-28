/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 0) return 0;
    var result = nums[0];
    var maxDP = [nums[0]];
    var minDP = [nums[0]];

    for (var i = 1; i < nums.length; i++) {
        maxDP[i] = Math.max(nums[i], maxDP[i - 1] * nums[i], minDP[i - 1] * nums[i]);
        minDP[i] = Math.min(nums[i], minDP[i - 1] * nums[i], maxDP[i - 1] * nums[i]);
        result = Math.max(maxDP[i], result);
    }

    return result;
};
