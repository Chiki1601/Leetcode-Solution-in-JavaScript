var minimumLength = function(s) {
    let charFrequency = new Array(26).fill(0);
    let totalLength = 0;
    for (let char of s) {
        charFrequency[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let frequency of charFrequency) {
        if (frequency === 0) continue;
        if (frequency % 2 === 0) {
            totalLength += 2;
        } else {
            totalLength += 1;
        }
    }
    return totalLength;
};
