/**
 * @param {number[]} nums
 * @return {number}
 */
function maxAscendingSum(nums) {
    let maxSum = nums[0];
    let curSum = nums[0];
    for (let i = 1; i < nums.length; ++i) {
        curSum = (nums[i-1] < nums[i]) ? curSum + nums[i] : nums[i];
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
};
