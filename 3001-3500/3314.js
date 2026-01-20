var minBitwiseArray = function(nums) {
    const ans = []
    for(let i = 0; i < nums.length; i++) {
        let n = nums[i]
        if(n != 2) ans[i] = n - ((n + 1) & (-n - 1)) / 2
        else ans[i] = -1
    }  
    return ans
};
