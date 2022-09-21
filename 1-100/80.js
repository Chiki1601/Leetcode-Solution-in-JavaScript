/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var newStart = 0;
    for (var i = 0; i < nums.length; i++) {
        if (newStart < 2 || nums[i] > nums[newStart - 2]) {
            nums[newStart] = nums[i];
            newStart++;
        }
    }

    return newStart;
};
