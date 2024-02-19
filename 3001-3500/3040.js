/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    let n = nums.length
    let memo = new Map()

    function dfs(left,right,val){
        if (left >= right){
            return 0
        }

        let pos = left+"-"+right+"-"+val
        if (memo.has(pos)){
            return memo.get(pos)
        }
        
        let ans = 0
        if (nums[left]+nums[right] == val){
            ans = Math.max(ans,dfs(left+1,right-1,val)+1)
        }
        if (nums[left]+nums[left+1] == val){
            ans = Math.max(ans,dfs(left+2,right,val)+1)
        }
        if (nums[right]+nums[right-1] == val){
            ans = Math.max(ans,dfs(left,right-2,val)+1)
        }
        
        memo.set(pos,ans)
        return ans
    }
    
    let answer = 0
    answer = Math.max(answer,dfs(2,n-1,nums[0]+nums[1]))
    answer = Math.max(answer,dfs(1,n-2,nums[0]+nums[n-1]))
    answer = Math.max(answer,dfs(0,n-3,nums[n-2]+nums[n-1]))
    
    return answer+1
};
