/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    var bytes = [];
    var maxLength = 0;
    for (var i = 0; i < words.length; i++) {
        var bit = 0;
        for (var j = 0; j < words[i].length; j++) {
            bit |= 1 << (words[i].charCodeAt(j) - 'a'.charCodeAt(0));
        }
        bytes[i] = bit;
    }

    for (var i = 0; i < words.length; i++) {
        for (var j = i + 1; j < words.length; j++) {
            // the operator priority '===' > '&', so we need () for the & operator
            if ((bytes[j] & bytes[i]) === 0) {
                maxLength = Math.max(maxLength, words[i].length * words[j].length);
            }
        }
    }

    return maxLength;
};
