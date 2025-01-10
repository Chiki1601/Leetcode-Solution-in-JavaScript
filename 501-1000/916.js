var wordSubsets = function(words1, words2) {
    const maxCharFreq = new Array(26).fill(0);
    
    for (const word of words2) {
        const tempCharFreq = new Array(26).fill(0);
        
        for (const char of word) {
            tempCharFreq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        
        for (let i = 0; i < 26; i++) {
            maxCharFreq[i] = Math.max(maxCharFreq[i], tempCharFreq[i]);
        }
    }
    
    const result = [];
    
    for (const word of words1) {
        const tempCharFreq = new Array(26).fill(0);
        
        for (const char of word) {
            tempCharFreq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        
        let isUniversal = true;
        
        for (let i = 0; i < 26; i++) {
            if (maxCharFreq[i] > tempCharFreq[i]) {
                isUniversal = false;
                break;
            }
        }
        
        if (isUniversal) {
            result.push(word);
        }
    }
    
    return result;
};
