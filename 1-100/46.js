/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0) return nums;
    var results = [];
    permuteHelper(0, nums, results);
    return results;
};

var permuteHelper = function(start, nums, results) {
    if (start === nums.length) {
        results.push(nums.slice());
        return;
    }

    for (var i = start; i < nums.length; i++) {
        swap(nums, start, i);
        permuteHelper(start + 1, nums, results);
        swap(nums, start, i);
    }
};

var swap = function(nums, i, j) {
    if (i === j) return;
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
};

// A iterative version
// for example: nums=[1,2,3]
// step1: [1]
// step2: inserst 2 to [1], two possibilities: [2,1], [1,2]
// step2: inserst 3 to [1,2] and [2,1],
// Three possibilities for each: [3,2,1], [2,3,1], [2,1,3] & [3,1,2], [1,3,2], [1,2,3]
var permute = function(nums) {
    if (nums.length === 0) return nums;
    var results = [[nums[0]]];
    for (var i = 1; i < nums.length; i++) {
        var newResults = [];
        for (var m = 0; m < results.length; m++) {
            for (var j = 0; j <= i; j++) {
                // still need a deep copy of results[m],
                // otherwise, a change to list will affect results array.
                var list = results[m].slice();
                list.splice(j, 0, nums[i]);
                newResults.push(list);
            }
        }
        results = newResults;
    }

    return results;
};
