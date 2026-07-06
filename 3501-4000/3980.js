var minOperations = function (sIn, tIn) {
    if (sIn === tIn) return 0;
    const s = sIn.split('');
    const t = tIn.split('');
    const n = s.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === t[i]) continue;
        if (s[i] === '0') {                    // need '1' here
            s[i] = '1';
            ans++;
            continue;
        }
        // s[i] === '1', t[i] === '0'
        if (i + 1 < n && s[i + 1] === '1') {  // pair with a right '1'
            s[i + 1] = '0';
            s[i] = '0';
            ans++;
            continue;
        }
        if (i - 1 >= 0 && s[i - 1] === '1') { // pair with left '1', then restore it
            s[i] = t[i];
            ans += 1;
            ans += (t[i - 1] === '1') ? 1 : 0;
            s[i - 1] = t[i - 1];
            continue;
        }
        if (i + 1 < n && s[i + 1] === '0') {  // create a right '1' first
            s[i] = t[i];
            ans += 2;
            ans += (t[i + 1] === '1') ? 1 : 0;
            s[i + 1] = t[i + 1];
            continue;
        }
        if (i - 1 >= 0 && s[i - 1] === '0') { // create a left '1' first
            s[i] = t[i];
            ans += 2;
            ans += (t[i - 1] === '1') ? 1 : 0;
            s[i - 1] = t[i - 1];
            continue;
        }
    }
    if (s.join('') !== t.join('')) return -1;
    return ans;

};
