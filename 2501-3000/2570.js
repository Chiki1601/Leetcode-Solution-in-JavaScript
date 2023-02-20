/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (a, b) {
    let o = {};

    for (let [i, v] of a) {
        o[i] = v;
    }
    for (let [i, v] of b) {
        o[i] = (o[i] || 0) + v;
    }

    return Object.entries(o) //
        .sort((a, b) => a[0] - b[0]);
};
