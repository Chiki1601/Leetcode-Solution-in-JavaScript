class Solution {
    maxIncreasingSubarrays(nums) {
        let prev = 0;
        let curr = 1;
        let ans = 0;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i - 1] < nums[i]) {
                curr++;
            } else {
                prev = curr;
                curr = 1;
            }
            ans = Math.max(ans, Math.max(Math.floor(curr / 2), Math.min(prev, curr)));
        }
        
        return ans;
    }
}
