/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var numIndex = {};
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] in numIndex) {
            if (i - numIndex[nums[i]] <= k) {
                return true;
            }
        }
        numIndex[nums[i]] = i;
    }

    return false;
};
