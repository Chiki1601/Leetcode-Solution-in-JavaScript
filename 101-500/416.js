var canPartition = function(nums) {
    const total = nums.reduce((a, b) => a + b, 0);
    const n = nums.length;

    // If sum is odd, we can't split it into two equal parts
    if (total % 2 !== 0) return false;

    const target = total / 2;

    // Initialize memo table with undefined values
    const dp = Array.from({ length: n }, () => Array(target + 1).fill(undefined));

    const solve = (idx, target) => {
        // Base case: subset with sum 0 is always possible
        if (target === 0) return true;

        // If at first element, check if it matches target
        if (idx === 0) return nums[0] === target;

        // Return memoized result
        if (dp[idx][target] !== undefined) return dp[idx][target];

        // Option 1: Skip current element
        let notTake = solve(idx - 1, target);

        // Option 2: Take current element if it fits
        let take = false;
        if (nums[idx] <= target) {
            take = solve(idx - 1, target - nums[idx]);
        }

        // Store and return result
        dp[idx][target] = take || notTake;
        return dp[idx][target];
    };

    return solve(n - 1, target);
};
