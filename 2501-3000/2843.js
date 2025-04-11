var countSymmetricIntegers = function(low, high) {
    let res = 0;
    for (let num = low; num <= high; num++) {
        let s = num.toString();
        if (s.length % 2 !== 0) continue;
        let mid = s.length / 2;
        let leftSum = 0, rightSum = 0;
        for (let i = 0; i < mid; i++) {
            leftSum += parseInt(s[i]);
            rightSum += parseInt(s[i + mid]);
        }
        if (leftSum === rightSum) res++;
    }
    return res;
};
