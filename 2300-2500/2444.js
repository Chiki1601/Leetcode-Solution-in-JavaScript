/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let pMin = -1, pMax = -1, bad = -1;
    let ans = 0;
    
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === minK) pMin = i;
        if (nums[i] === maxK) pMax = i;
        if (nums[i] < minK || nums[i] > maxK) bad = i;
        if (pMin !== -1 && pMax !== -1) {
            ans += Math.max(0, Math.min(pMin, pMax) - bad);
        }
    }
    return ans;
};
