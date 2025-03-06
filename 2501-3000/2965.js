/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const n = grid.length;
    const vector = new Array(n**2 + 1).fill(0);
    
    for (let number of grid) {
        for (let num of number) {
            vector[num]++;
        }
    }
    let [duplicate, missing] = [0, 0];
    for (let i = 1; i < vector.length; i++) {
        if (vector[i] > 1) {
            duplicate = i;
        }
        if (vector[i] === 0) {
            missing = i;
        }
        if (duplicate && missing) {
            return [duplicate, missing];
        }
    }
    return [duplicate, missing];    
};
