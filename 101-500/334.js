/*
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let prev1 = Infinity;
    let prev2 = Infinity;
    let isIncreasingTriplet = false;
    
    for (var indexI = 0; indexI < nums.length; indexI++) {
       if(nums[indexI]>prev2 && prev2>prev1)  {
           isIncreasingTriplet = true;
           break;
       }
       
       if(nums[indexI]> prev1) prev2 = nums[indexI];
       else prev1 = nums[indexI];
    }
    return isIncreasingTriplet;
};
