/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var low = 0;
    var high = nums.length - 1;

    while (low < high) {
        var mid = low + Math.floor((high - low) / 2);
        if (nums[mid+1] > nums[mid]) low = mid + 1;
        else high = mid;
    }

    return high;
};
