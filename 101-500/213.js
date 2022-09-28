/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    return Math.max(robSingle(nums, 0, nums.length - 2), robSingle(nums, 1, nums.length - 1));
};

var robSingle = function(nums, start, end) {
    var toRob = 0;
    var notRob = 0;

    for (var i = start; i <= end; i++) {
        var tmp = toRob;
        toRob = notRob + nums[i];
        notRob = Math.max(notRob, tmp);
    }

    return Math.max(toRob, notRob);
};
