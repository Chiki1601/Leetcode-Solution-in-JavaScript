var countPairs = function(nums, k) {
    let pos = {};  // Map to store indices for each number
    let count = 0;
    
    // Step 1: Group numbers by their values (village)
    for (let i = 0; i < nums.length; i++) {
        if (!pos[nums[i]]) {
            pos[nums[i]] = [];
        }
        
        // Step 2: Check only within the same group (same number)
        for (let j of pos[nums[i]]) {
            if ((i * j) % k === 0) {
                count++;
            }
        }
        
        // Step 3: Add current index to the list for the number
        pos[nums[i]].push(i);
    }
    
    return count;
};
