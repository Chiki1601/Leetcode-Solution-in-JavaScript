var countInterestingSubarrays = function(nums, modulo, k) {
    let cnt = new Map();
    cnt.set(0, 1);
    let prefix = 0, res = 0;
    for (let num of nums) {
        prefix += (num % modulo === k) ? 1 : 0;
        let target = (prefix - k + modulo) % modulo;
        res += cnt.get(target) || 0;
        cnt.set(prefix % modulo, (cnt.get(prefix % modulo) || 0) + 1);
    }
    return res;
};
