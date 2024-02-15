var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);
    let sum = nums.reduce((acc, val) => acc + val, 0);
    let n = nums.length;
    for (let i = n - 1; i >= 2; i--) {
        sum -= nums[i];
        if (sum > nums[i]) {
            return sum + nums[i];
        }
    }
    return -1;
};

