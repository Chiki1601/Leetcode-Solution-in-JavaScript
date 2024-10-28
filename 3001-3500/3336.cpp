class Solution {
    const int mod = 1e9 + 7;
    int dp[200][201][201];
public:
    int solve(int i, vector<int> &nums, int first, int second){
        // first == gcd of first subsequence till now
        // second = gcd of second subsequence till now

        if(i == nums.size()){
            return (first && second) && (first == second);
        }
        
        if(dp[i][first][second] != -1) return dp[i][first][second];
        
        // Dont include this element in any subsequence
        int skip = solve(i + 1, nums, first, second);

        // Include this index in the first subsequence
        int take1 = solve(i + 1, nums, __gcd(first, nums[i]), second);

        // Include this index in the second subsequence
        int take2 = solve(i + 1, nums, first, __gcd(second, nums[i]));
        
        // Summing up all the possibilites
        return dp[i][first][second] = (0LL + skip + take1 + take2) % mod;
    }
    
    int subsequencePairCount(vector<int>& nums) {
        memset(dp, -1, sizeof(dp));
        return solve(0, nums, 0, 0);
    }
};
