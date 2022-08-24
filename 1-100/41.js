/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if (nums.length <= 0) return 1;
    for (var i = 0; i < nums.length; i++) {
        while (nums[i] !== i + 1) {
            if (nums[i] <= 0) break;
            if (nums[i] > nums.length - 1 || nums[nums[i] - 1] === nums[i]) break;
            swap(nums, nums[i] - 1, i);
        }
    }
    for (var j = 0; j < nums.length; j++) {
        if (nums[j] !== j + 1) {
            return j + 1;
        }
    }
    // if every element is in the right position, then just simpily return the last element + 1
    return nums[nums.length - 1] + 1;
};

var swap = function(nums, i, j) {
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
};
