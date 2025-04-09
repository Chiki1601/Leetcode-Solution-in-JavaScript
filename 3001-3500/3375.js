function minOperations(nums, k) {
    const set = new Set();
    for (const n of nums) {
        if (n < k) return -1;
        set.add(n);
    }
    return set.size - +set.has(k);
};
