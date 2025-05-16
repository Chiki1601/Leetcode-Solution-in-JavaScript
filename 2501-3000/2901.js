function getWordsInLongestSubsequence(words, groups) {
    const memo = new Map();
    const n = words.length;

    function hamming(w1, w2) {
        let diff = 0;
        for (let i = 0; i < w1.length; i++) {
            if (w1[i] !== w2[i]) diff++;
        }
        return diff === 1;
    }

    function dfs(i, lastGroup, lastWord) {
        if (i >= n) return [];
        const key = `${i}|${lastGroup}|${lastWord}`;
        if (memo.has(key)) return memo.get(key);

        let take = [];
        if (
            words[i].length === lastWord.length &&
            hamming(words[i], lastWord) &&
            groups[i] !== lastGroup
        ) {
            take = [words[i], ...dfs(i + 1, groups[i], words[i])];
        }

        const skip = dfs(i + 1, lastGroup, lastWord);
        const result = take.length > skip.length ? take : skip;
        memo.set(key, result);
        return result;
    }

    let best = [];
    for (let i = 0; i < n; i++) {
        const res = [words[i], ...dfs(i + 1, groups[i], words[i])];
        if (res.length > best.length) best = res;
    }

    return best;
}
