/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    let xorSum = 0;
    let allZero = true;
    for (let num of nums) {
        xorSum ^= num;
        if (num !== 0) allZero = false;
    }
    if (allZero) return 0;
    return xorSum !== 0 ? nums.length : nums.length - 1;
};
