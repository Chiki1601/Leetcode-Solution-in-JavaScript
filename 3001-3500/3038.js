/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    let n = nums.length
    let val = nums[0] + nums[1]
    let answer = 1
    for (let i=3;i<n;i+=2){
        if (nums[i]+nums[i-1] == val){
            answer++
        }else{
            break   
        }   
    }
    return answer
};
