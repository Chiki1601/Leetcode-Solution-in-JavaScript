/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function(nums) {
    const stack = [];
    
    const gcd = (a, b) => {
        while (b !== 0) {
            const t = b;
            b = a % b;
            a = t;
        }
        return a;
    };
    
    for (let num of nums) {
        while (stack.length > 0) {
            const top = stack[stack.length - 1];
            const g = gcd(top, num);
            if (g === 1) {
                break;
            }
            stack.pop();
            num = (top / g) * num;
        }
        stack.push(num);
    }
    
    return stack;
};
