/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    if(n==0) return arr;
    let result = [];
    const traverse = (a, n) => {
        for(let i in a) {
            if(n>0 && Array.isArray(a[i]))
                traverse(a[i], n-1)
            else
                result.push(a[i])
        }
    }
    traverse(arr, n);
    return result;
};
