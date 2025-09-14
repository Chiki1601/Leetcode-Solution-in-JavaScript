var spellchecker = function(wordlist, queries) {
    const exact = new Set(wordlist);
    const lowerMap = new Map();
    const vowelMap = new Map();

    const isVowel = (c) => "aeiou".includes(c);
    const maskVowels = (s) => {
        s = s.toLowerCase();
        let out = '';
        for (let ch of s) out += isVowel(ch) ? 'a' : ch;
        return out;
    };

    for (let w of wordlist) {
        const wl = w.toLowerCase();
        if (!lowerMap.has(wl)) lowerMap.set(wl, w);
        const m = maskVowels(wl);
        if (!vowelMap.has(m)) vowelMap.set(m, w);
    }

    const ans = [];
    for (let q of queries) {
        if (exact.has(q)) {
            ans.push(q);
            continue;
        }
        const ql = q.toLowerCase();
        if (lowerMap.has(ql)) {
            ans.push(lowerMap.get(ql));
            continue;
        }
        const qm = maskVowels(ql);
        ans.push(vowelMap.get(qm) || "");
    }
    return ans;
};
