const longestCommonPrefix = (a, b) => {
    a = new Set(a), b = new Set(b), res1 = go(a, b), res2 = go(b, a);
    return Math.max(res1, res2);
};

const go = (a, b) => {
    let res = 0, B = new Set();
    for (const x of b) { // seperate each prefix of b
        let s = x  + '', cur = '';
        for(const c of s) {
            cur += c;
            B.add(cur - '0');
        }
    }
    for (const x of a) {
        let s = x + '', cur = '';
        for (const c of s) {
            cur += c;
            if (B.has(cur - '0')) res = Math.max(res, cur.length);
        }
    }
    return res;
};
