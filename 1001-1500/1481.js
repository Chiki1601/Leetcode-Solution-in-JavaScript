var findLeastNumOfUniqueInts = function(arr, k) {
    const freqMap = new Map();
    arr.forEach(num => {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    });

    const sortedFreq = Array.from(freqMap.entries()).sort((a, b) => a[1] - b[1]);

    for (let [num, freq] of sortedFreq) {
        if (k >= freq) {
            k -= freq;
            freqMap.delete(num);
        } else {
            break;
        }
    }
    return freqMap.size;
};
