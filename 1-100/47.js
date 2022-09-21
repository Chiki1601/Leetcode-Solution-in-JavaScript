/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (nums.length === 0) return nums;
    nums.sort(function(a, b) {
        return a - b;
    });
    var results = [[nums[0]]];
    for (var i = 1; i < nums.length; i++) {
        var newResults = [];
        for (var m = 0; m < results.length; m++) {
            for (var j = 0; j <= i; j++) {
                var list = results[m].slice();
                list.splice(j, 0, nums[i]);
                newResults.push(list);
                if (results[m][j] === nums[i]) break;
            }
        }
        results = newResults;
    }

    return results;
};
