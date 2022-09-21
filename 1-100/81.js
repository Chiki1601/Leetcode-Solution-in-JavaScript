/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var lo = 0;
    var hi = nums.length - 1;

    while (lo <= hi) {
        var mid = lo + Math.floor((hi - lo) / 2);
        if (nums[mid] === target) return true;

        if (nums[lo] < nums[mid]) {
            if (target >= nums[lo] && target < nums[mid]) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        } else if (nums[lo] > nums[mid]) {
            if (target <= nums[hi] && target > nums[mid]) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        } else {
            lo += 1;
        }
    }

    return false;

};
