var xorAllNums = function(nums1, nums2) {
    let c1 = nums1.length;
    let c2 = nums2.length;
    let x1 = 0, x2 = 0;

    if (c1 % 2 !== 0) {
        for (let num of nums2) {
            x2 ^= num;
        }
    }
    if (c2 % 2 !== 0) {
        for (let num of nums1) {
            x1 ^= num;
        }
    }
    return x1 ^ x2;
};
