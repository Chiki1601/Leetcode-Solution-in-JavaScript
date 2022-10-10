/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (p) {
  if (p.length === 1) return ""

  for (let i = 0; i < Math.floor(p.length / 2); i++) {
    if (p.charAt(i) != "a") return p.substring(0, i) + "a" + p.substring(i + 1, p.length)
  }
  return p.substring(0, p.length - 1) + "b"
};
