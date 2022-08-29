/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var canBreak = [true];
    for (var i = 0; i < s.length; i++) {
        if (!canBreak[i]) continue;
        for (var word of wordDict) {
            var wLength = word.length;
            if (canBreak[i + wLength]) continue;
            if (s.substring(i, i + wLength) === word) {
                canBreak[i + wLength]  = true;
            }
        }
    }
    return canBreak[s.length] ? true : false;
};
