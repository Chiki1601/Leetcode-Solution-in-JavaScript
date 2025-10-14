var hasIncreasingSubarrays = function(nums, k) {
    let inc = 1, prevInc = 0, maxLen = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) inc++;
        else {
            prevInc = inc;
            inc = 1;
        }
        maxLen = Math.max(maxLen, Math.max(inc >> 1, Math.min(prevInc, inc)));
        if (maxLen >= k) return true;
    }
    return false;
};
