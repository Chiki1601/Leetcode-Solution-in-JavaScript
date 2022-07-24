/**
 * @param {number[]} nums
 * @return {number}
 */
const minDeletion = function(nums) {
  let res = 0, n = nums.length

  for(let i = 0; i < n; i += 2) {
    while(i < n - 1 && nums[i] === nums[i + 1]) {
      i++
      res++
    }
  }
  if((n - res) % 2 === 1) res++
  return res
};
