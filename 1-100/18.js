/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b) => a-b)
    console.log(nums)
    let ans = [], len = nums.length;
    for(let i = 0; i < len; i ++ ){
         for(let j = i+1; j < len-1; j ++ ){
             let left = j+1, right = len-1
             while(left < right){
                 let sum = nums[left] + nums[right] + nums[i] + nums[j]
                 if(sum == target){
                     ans.push([nums[i],nums[j], nums[left], nums[right]]);
                     while(nums[left] == nums[left+1]){
                         left++
                     }
                     while(nums[right] == nums[right-1]){
                         right--
                     }
                     left++
                     right--
                 } else if (sum < target){
                     left++
                 } else {
                     right--
                 }
             }
             while(nums[j] == nums[j+1]){
                 j++
             }
    }
        while(nums[i] == nums[i+1]){
                 i++
             }
    }
    return ans
};
