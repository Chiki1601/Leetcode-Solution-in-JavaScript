/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let chunkArr=[];
    for(let i=0;i<arr.length;i++)  
    {
        chunkArr.push(arr.slice(i,Math.min(i+size,arr.length)));  
        i+=size-1;  
    }
    return chunkArr;
};
