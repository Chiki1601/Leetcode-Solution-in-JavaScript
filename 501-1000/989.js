/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let i = A.length - 1;
  let carry = 0;
  while (K || carry) {
    const d = K % 10;
    if (i >= 0) {
      A[i] = A[i] + d + carry;
      carry = A[i] > 9 ? 1 : 0;
      A[i] = A[i] % 10;
      i--;
    } else {
      const p = d + carry;
      carry = p > 9 ? 1 : 0;
      A.unshift(p % 10);
    }
    K = Math.trunc(K / 10);
  }
  return A;
};
