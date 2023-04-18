var mergeAlternately = function(word1, word2) {
    let result = "";
    for (let i = 0; i < word1.length; i++) {
        result += word1[i] + word2[i];
        
        if (!word1[i + 1]){
            result += word2.slice(i+1);
            break;
        }
        
        if (!word2[i + 1]){
            result += word1.slice(i+1);
            break;
        }
    }
    
    return result;
};
