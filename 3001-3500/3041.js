/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSelectedElements = function(nums) {
    let counter = new Map()
    for (let item of nums){
        if (!counter.has(item)){
            counter.set(item,0)
        }
        counter.set(item,counter.get(item)+1)
    }
    let arr1 = []
    let arr2 = []
    for (let [key,value] of counter){
        if( value >= 1){
            arr1.push(key)
            arr2.push(key+1)   
        }
        if (value > 1){
            arr1.push(key+1)
            arr2.push(key)     
        }
    }
    arr1.sort((a,b) => a-b)
    arr2.sort((a,b) => a-b)

    let n = arr1.length
    let dp1 = new Array(n).fill(1)
    let dp2 = new Array(n).fill(1)
    let answer = 1
    for (let i=1;i<n;i++){
        if (arr1[i] == arr1[i-1]+1){
            dp1[i] = Math.max(dp1[i],dp1[i-1]+1)   
        }
        if (arr1[i] == arr2[i-1]+1){
            dp1[i] = Math.max(dp1[i],dp2[i-1]+1)   
        }
        if (arr1[i] == arr1[i-1]){
            dp1[i] = Math.max(dp1[i],dp1[i-1])   
        }
        if (arr1[i] == arr2[i-1]){
            dp1[i] = Math.max(dp1[i],dp2[i-1])   
        }

        if (arr2[i] == arr2[i-1]+1){
            dp2[i] = Math.max(dp2[i],dp2[i-1]+1)   
        }
        if (arr2[i] == arr1[i-1]+1){
            dp2[i] = Math.max(dp2[i],dp1[i-1]+1)   
        }
        if (arr2[i] == arr2[i-1]){
            dp2[i] = Math.max(dp2[i],dp2[i-1])   
        }
        if (arr2[i] == arr1[i-1]){
            dp2[i] = Math.max(dp2[i],dp1[i-1])   
        }

        answer = Math.max(answer,dp1[i])
        answer = Math.max(answer,dp2[i])   
    }

    return answer
};
