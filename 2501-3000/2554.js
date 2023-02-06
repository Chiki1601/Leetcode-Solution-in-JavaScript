/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
  let count = 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (!banned.includes(i) && sum + i <= maxSum) {
      count++;
      sum += i;
    }
  }

  return count;
};
