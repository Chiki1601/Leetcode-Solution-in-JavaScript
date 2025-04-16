var countGood = function(nums, k) {
    let freq = new Map(); // Kakashi's ninja tracker
    let left = 0, pairs = 0, ans = 0;

    for (let right = 0; right < nums.length; right++) {
        let val = nums[right];

        // Naruto finds clones already in the field
        pairs += freq.get(val) || 0;
        freq.set(val, (freq.get(val) || 0) + 1);

        // Sasuke trims the front if support is strong enough
        while (pairs >= k) {
            ans += nums.length - right;
            let out = nums[left++];
            freq.set(out, freq.get(out) - 1);
            pairs -= freq.get(out); // Remove shadow clone's impact
        }
    }

    return ans;
};
