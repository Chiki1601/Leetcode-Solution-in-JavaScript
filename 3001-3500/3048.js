/**
 * @param {number[]} nums
 * @param {number[]} changeIndices
 * @return {number}
 */
var earliestSecondToMarkIndices = function(nums, changeIndices) {
  var changeIndices = changeIndices.map((i) => (i - 1))
  var l = 0
  var r = changeIndices.length - 1
  var res = -2

  var canBeMarked = (bound) => {
    var marks = Array(nums.length).fill(false)
    var need = 0
    for(var i = bound; i >= 0; i--) {
      var index = changeIndices[i]
      if(!marks[index]) { // perform "mark" operation
        marks[index] = true
        need += nums[index]
      } else {
        // If needed, execute the "decrease" operation;
        // otherwise, do nothing
        if(need > 0) need--
      }
    }
    return marks.every(e => e) && need === 0
  }

  while(l <= r) {
    var m = Math.floor((l + r) / 2)
    if(canBeMarked(m)) {
      res = m
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return res + 1
};

/*

a test case that `canBeMarked()` should return `false`:

nums          [1,3]
mark           x x
                   v v
changeIndices [1,1,1,2]
               0 1 2 3
need = 2

*/
