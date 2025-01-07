var stringMatching = function(words) {
    const n = words.length;
    const ans = [];

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            if (i !== j && words[j].indexOf(words[i]) !== -1) {
                ans.push(words[i]);
                break;
            }
        }
    }

    return ans;
};
