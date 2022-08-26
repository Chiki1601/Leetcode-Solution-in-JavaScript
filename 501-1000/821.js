/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let len = S.length, ans = new Uint16Array(len)
    ans[0] = S.charAt(0) === C ? 0 : 10001
    for (let i = 1; i < len; i++) 
        ans[i] = S.charAt(i) === C ? 0 : ans[i-1] + 1
    for (let i = len - 2; ~i; i--)
        ans[i] = Math.min(ans[i], ans[i+1] + 1)
    return ans
};
