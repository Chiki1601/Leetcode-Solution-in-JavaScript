/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
    if (!tree) return 0;
    if (tree.length < 3) return tree.length;
    
    let max = 0;
    let prevIndex = 0;
    let firstTypeIndex = 0;
    let secondTypeIndex = 0;
    
    while (tree[firstTypeIndex] === tree[secondTypeIndex] && secondTypeIndex < tree.length) {
        secondTypeIndex++;
    }
    
    for (let i = 0; i < tree.length; i++) {
        if (tree[i] === tree[firstTypeIndex]) {
            firstTypeIndex = i;
        } else if (tree[i] === tree[secondTypeIndex]) {
            secondTypeIndex = i;
        } else { 
            prevIndex = Math.min(firstTypeIndex, secondTypeIndex) + 1;
            firstTypeIndex = Math.max(firstTypeIndex, secondTypeIndex);
            secondTypeIndex = i;
        }
        
        max = Math.max(max, i - prevIndex + 1);
    }
    
    
    return max;
};
