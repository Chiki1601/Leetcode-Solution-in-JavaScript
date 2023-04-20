/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const res = [];

  arr.forEach((elem, index) => {
    res.push(fn(elem, index));
  });

  return res;
};
