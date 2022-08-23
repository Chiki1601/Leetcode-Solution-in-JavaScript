var NumArray = function(nums) {
    this.sums = [0];
    for (var i = 1; i <= nums.length; i++) {
        this.sums[i] = this.sums[i - 1] + nums[i - 1];
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sums[j + 1] - this.sums[i];
};

