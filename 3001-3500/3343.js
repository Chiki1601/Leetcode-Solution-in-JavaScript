const MOD = BigInt(1e9 + 7);

var countBalancedPermutations = function (num) {
    let tot = 0;
    const n = num.length;
    const cnt = new Array(10).fill(0);

    // Count the frequency of each digit in num
    for (const ch of num) {
        const d = parseInt(ch);
        cnt[d]++;
        tot += d;  // Total sum of digits
    }

    // If the total sum is odd, we cannot divide it into two equal parts
    if (tot % 2 !== 0) {
        return 0;
    }

    const target = tot / 2;  // Half of the total sum
    const maxOdd = Math.floor((n + 1) / 2);  // Maximum possible odd positions

    // Precompute binomial coefficients using Pascal's triangle
    const comb = new Array(maxOdd + 1);
    for (let i = 0; i <= maxOdd; i++) {
        comb[i] = new Array(maxOdd + 1).fill(0n);
        comb[i][i] = comb[i][0] = 1n;
        for (let j = 1; j < i; j++) {
            comb[i][j] = (comb[i - 1][j] + comb[i - 1][j - 1]) % MOD;
        }
    }

    // DP table to store results: f[curr][oddCnt] is the number of ways to get sum 'curr' with 'oddCnt' odd digits
    const f = new Array(Number(target) + 1);
    for (let i = 0; i <= Number(target); i++) {
        f[i] = new Array(maxOdd + 1).fill(0n);
    }
    f[0][0] = 1n;

    let psum = 0, totSum = 0;

    // Loop through each digit from 0 to 9
    for (let i = 0; i <= 9; i++) {
        psum += cnt[i];  // Sum of the number of digits <= i
        totSum += i * cnt[i];  // Total sum of digits <= i

        // Try all combinations of odd and even positioned digits
        for (let oddCnt = Math.min(psum, maxOdd); oddCnt >= Math.max(0, psum - (n - maxOdd)); oddCnt--) {
            const evenCnt = psum - oddCnt;

            for (let curr = Math.min(totSum, target); curr >= Math.max(0, totSum - target); curr--) {
                let res = 0n;
                // Try all valid splits of the current digit into odd and even positions
                for (let j = Math.max(0, cnt[i] - evenCnt); j <= Math.min(cnt[i], oddCnt) && i * j <= curr; j++) {
                    const ways = (comb[oddCnt][j] * comb[evenCnt][cnt[i] - j]) % MOD;
                    res = (res + ((ways * f[curr - i * j][oddCnt - j]) % MOD)) % MOD;
                }
                f[curr][oddCnt] = res % MOD;
            }
        }
    }

    // Return the result for the target sum with the maximum number of odd digits
    return Number(f[target][maxOdd]);
};
