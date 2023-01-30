var countQuadruplets = function (nums) {
  const N = nums.length;
  let ans = 0;
  let dp = Array(N).fill(0);

  for (let j = 0; j < N; j++) {
    let prev_small = 0;
    for (let i = 0; i < j; i++) {
      if (nums[j] > nums[i]) {
        prev_small++;
        ans += dp[i];
      } else if (nums[j] < nums[i]) {
        dp[i] += prev_small;
      }
    }
  }
  return ans;
};
