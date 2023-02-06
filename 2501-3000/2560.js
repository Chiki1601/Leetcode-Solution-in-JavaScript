/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  let low = Infinity;
  let high = -Infinity;
  for (const num of nums) {
    low = Math.min(low, num);
    high = Math.max(high, num);
  }

  let ans = null;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (isOk(mid, nums, k)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
};

function isOk(target, nums, k) {
  let i = 0;
  let count = 0;
  while (i < nums.length) {
    if (nums[i] <= target) {
      count++;
      i += 2;
    } else {
      i++;
    }
  }

  return count >= k;
}
