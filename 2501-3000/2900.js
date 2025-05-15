/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    let res = [words[0]];
    for (let i = 1; i < groups.length; ++i) {
        if (groups[i] !== groups[i - 1]) {
            res.push(words[i]);
        }
    }
    return res;
};
