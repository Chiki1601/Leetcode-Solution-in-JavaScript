var maximumSum = function(nums) {
    let max = new Array(82).fill(0);
    let ans = -1;
    for (let x of nums) {
        let sum = 0, temp = x;
        while (temp !== 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }
        if (max[sum] !== 0) ans = Math.max(ans, x + max[sum]);
        max[sum] = Math.max(max[sum], x);
    }
    return ans;
};
