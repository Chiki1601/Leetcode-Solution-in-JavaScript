/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    let map = new Set(['a', 'e', 'i', 'o', 'u']);
    let countArray = new Array(words.length).fill(0);
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (map.has(word.charAt(0)) && map.has(word.charAt(word.length - 1))) {
            countArray[i+1] = countArray[i] + 1;
        } else {
            countArray[i+1] = countArray[i];
        }
    }
    let res = [];
    for (let i = 0; i < queries.length; i++) {
        res.push(countArray[queries[i][1] + 1] - countArray[queries[i][0]]);
    }
    return res;
};
