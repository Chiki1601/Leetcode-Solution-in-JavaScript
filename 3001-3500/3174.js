var clearDigits = function(s) {
    let res = "";
    for (let c of s) {
        if (/[0-9]/.test(c)) {
            if (res.length > 0) {
                res = res.slice(0, -1); // Remove last char
            }
        } else {
            res += c;
        }
    }
    return res;
};
