/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // Note ES5 doesn't have set
    var set1 = new Set();
    var interSet = new Set();
    for (var i = 0; i < nums1.length; i++) {
        set1.add(nums1[i]);
    }

    for (var j = 0; j < nums2.length; j++) {
        if (set1.has(nums2[j])) {
            interSet.add(nums2[j]);
        }
    }

    var result = [];
    interSet.forEach(function(item) {
        result.push(item);
    });

    return result;
};
