/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    const letters = ['a','b','c'];
    const path = [];
    const counter = { count: 0 };
    
    const backtrack = function() {
        if (path.length === n) {
            counter.count++;
            if (counter.count === k) {
                return path.join('');
            }
            return null;
        }
        
        for (let letter of letters) {
            if (path.length === 0 || path[path.length -1] !== letter) {
                path.push(letter);
                const result = backtrack();
                path.pop();
                if (result !== null) { return result; }
            }
        }
        return null;
    }
    return backtrack() ?? "";    
};
