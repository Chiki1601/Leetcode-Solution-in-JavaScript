/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var low = 0;
    var high = nums.length - 1;

    while (low <= high) {
        if (nums[low] <= nums[high]) return nums[low];
        var mid = low + Math.floor((high - low) / 2);
        if (nums[mid] >= nums[low]) low = mid + 1;
        else high = mid;
    }

    return nums[0];
};
