/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(A) {
    A.sort((a, b) => a - b);
    let max = 0;
    for (let i = A.length - 1; i >= 2; i--) {
        let start = i - 2;
        let end = i - 1;
        while (start < end) {
            if (A[end] + A[start] > A[i]) {
                return A[end] + A[start] + A[i];
            } else {
                start++;
            }
        }
    }
    return 0;
};
