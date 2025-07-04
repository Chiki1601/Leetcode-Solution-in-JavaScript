function kthCharacter(k, operations) {
    let shift = 0;
    let lengths = [];
    let len = 1;

    for (let op of operations) {
        len *= 2;
        lengths.push(len);
        if (len >= k) break;
    }

    for (let i = lengths.length - 1; i >= 0; i--) {
        let half = lengths[i] / 2;
        if (k > half) {
            k -= half;
            if (operations[i] === 1) shift++;
        }
    }

    const baseCharCode = 'a'.charCodeAt(0);
    return String.fromCharCode((shift % 26) + baseCharCode);
}
