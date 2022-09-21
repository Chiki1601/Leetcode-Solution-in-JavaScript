/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var max = 0;
    for (var i = 0; i < nums.length; i++) {
        if (i > max) return false;
        max = Math.max(max, i + nums[i]);
    }

    return true;
};
