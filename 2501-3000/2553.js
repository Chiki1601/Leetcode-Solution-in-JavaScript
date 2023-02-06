/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  return nums
    .join("")
    .split("")
    .map((x) => +x);
};
