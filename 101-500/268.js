/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var missNum = 0;
  for (var i = 0; i < nums.length; i++) {
    missNum ^= (i + 1) ^nums[i];
  }
  return missNum;
};
