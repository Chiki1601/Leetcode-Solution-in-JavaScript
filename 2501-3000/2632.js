/**
 * @param {Function} fn
 * @return {Function}
 */
const curry = function(fn) {
    const args = [];
    return function curried(...newArgs) {
        args.push(...newArgs);  // Add new toppings to existing ones
        if (args.length < fn.length) return curried;  // The curry isn't ready yet!
        return fn(...args);  // The curry is ready! :D
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
