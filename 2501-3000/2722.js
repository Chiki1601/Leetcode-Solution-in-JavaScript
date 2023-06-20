/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    arr1.sort((a,b) => a.id - b.id);
    arr2.sort((a,b) => a.id - b.id);
    const res = [];
    let i = 0, j = 0;
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i].id < arr2[j].id) {
            res.push(arr1[i++]);
        } else if (arr1[i].id === arr2[j].id){
            res.push(Object.assign(arr1[i++], arr2[j++]));
        } else {
            res.push(arr2[j++]);
        }
    }
    while(i < arr1.length) {
        res.push(arr1[i++]);
    }
    while(j < arr2.length) {
        res.push(arr2[j++]);
    }
    return res;
};
