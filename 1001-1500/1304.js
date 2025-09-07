const sumZero = n => {
    const res = new Array(n);
    res[0] = n * (1 - n) / 2;
    for (let i = 1; i < n; ++i)
        res[i] = i;
    return res;
};
