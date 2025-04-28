var countSubarrays = function(nums, k) {
    let start = 0;
    let sum = 0;
    let count = 0;
    
    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];
        
        // Shrink the window if the score exceeds or equals k
        while (sum * (end - start + 1) >= k) {
            sum -= nums[start];
            start++;
        }
        
        // Add the number of valid subarrays ending at 'end'
        count += (end - start + 1);
    }
    
    return count;
};
