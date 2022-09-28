/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort(function(a, b) {
        var ab = a + '' + b;
        var ba = b + '' + a;
        if (ab < ba) return 1;
        else if (ab > ba) return -1;
        return 0;
    });
    if (nums[0] === 0) return '0';
    return nums.join('');
};
