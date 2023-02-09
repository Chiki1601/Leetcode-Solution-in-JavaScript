/**
 * @param {string[]} ideas
 * @return {number}
 */
const ord = (c) => c.charCodeAt();
const charIthBitValue = (c) => 1 << ord(c) - 97;
const checkIthBit = (x, i) => x & (1 << i);

const distinctNames = (ideas) => {
    let m = new Map(), res = 0;
    for (const s of ideas) { // count process
        let r = s.slice(1);
        m.set(r, (m.get(r) || 0) + charIthBitValue(s[0]));
    };
    for (let i = 0; i < 26; i++) {
        for (let j = i + 1; j < 26; j++) {
            let a = 0, b = 0;
            for (const [, x] of m) {
                if (checkIthBit(x, i) && !checkIthBit(x, j)) a++;
                if (checkIthBit(x, j) && !checkIthBit(x, i)) b++;
            }
            res += a * b;
        }
    }
    return res * 2;
};
