/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  for (let i = 0; i < k; i++) {
    gifts.sort((a, b) => b - a);
    gifts.push(Math.floor(Math.sqrt(gifts[0])));
    gifts = gifts.slice(1);
  }

  return gifts.reduce((a, b) => a + b);
};
