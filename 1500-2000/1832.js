/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
     let freq = {}
    for (let letter of sentence) {
        freq[letter] += 1
    }
    let count = 0
    for (let key in freq) {
        count++
    }
    if (count === 26) return true
    return false
};
