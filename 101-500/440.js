const findKthNumber = (n, k, res = 1) => {
    const getGap = (a, b, n) => {
        let gap = 0;
        while (a <= n) {
            gap += Math.min(n + 1, b) - a;
            a *= 10;
            b *= 10;
        }
        return gap;
    };

    for (let i = 1; i < k;) {
        let gap = getGap(res, res + 1, n);
        if (i + gap <= k) { 
            i += gap;
            res += 1;
        } else {
            i += 1;
            res *= 10;
        }
    }

    return res;
};
