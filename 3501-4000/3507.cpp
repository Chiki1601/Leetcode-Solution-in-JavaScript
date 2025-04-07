var minimumPairRemoval = function(n) {
    let c = 0;
    while (true) {
        let mn = Infinity, mi = 0, isSorted = true;
        for (let i = 0; i < n.length-1; i++) {
            if (n[i] > n[i+1]) isSorted = false;
            if (mn > n[i]+n[i+1]) {
                mn = n[i]+n[i+1]; mi = i
            }
        }
        if (isSorted) return c;
        n[mi] = mn; c++; n.splice(mi+1, 1);
    }
};
