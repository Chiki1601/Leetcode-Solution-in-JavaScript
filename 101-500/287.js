var findDuplicate = function(nums) {
    var n = nums.length;
    var lo = 1;
    var hi = n - 1;

    while (lo < hi) {
        var mid = lo + Math.floor((hi - lo) / 2);
        var count = 0;
        for (var i = 0; i < n; i++) {
            if (nums[i] <= mid) {
                count++;
            }
        }
        if (count <= mid) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }

    return lo;
};
