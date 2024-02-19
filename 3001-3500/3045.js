//////////////////////// Template /////////////////////////
const ll = BigInt;
function RollingHashPolynomial(s, base, mod) {
    base = ll(base), mod = ll(mod);
    let n = s.length, p = Array(n + 1).fill(1n), h = Array(n + 1).fill(0n);
    buildPower();
    buildPrefixHash();
    return { get }
    function buildPower() {
        for (let i = 1; i < p.length; i++) p[i] = (p[i - 1] * base) % mod;
    }
    function buildPrefixHash() {
        for (let i = 0; i + 1 < h.length; i++) h[i + 1] = ((h[i] * base) % mod + ll(s.charCodeAt(i))) % mod;
    }
    function get(l, r) { // [l, r]
        let res = h[r + 1] - h[l] * p[r - l + 1];
        return (res % mod + mod) % mod;
    }
}

const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);
/////////////////////////////////////////////////////////////////////

const countPrefixSuffixPairs = (a) => {
    let res = 0, m = new Map();
    for (const s of a) {
        let n = s.length, rh = new RollingHashPolynomial(s, 61, 1e9 + 7);
        for (let i = 0; i < n; i++) {
            let pre = rh.get(0, i); // start with first char (0, 0)
            let suf = rh.get(n - i - 1, n - 1); // start with last char (n - 1, n - 1)
            if (pre == suf) res += m.get(pre) || 0;
        }
        addOneOrManyMap(m, rh.get(0, n - 1));
    }
    return res;
};
