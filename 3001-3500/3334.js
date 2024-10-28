class Solution {
    gcd(a, b) {
        return b === 0 ? a : this.gcd(b, a % b);
    }

    get(nums, x) {
        let n = nums.length;

        let gcd = (x !== 0) ? nums[0] : nums[1];
        let lcm = gcd;

        for (let i = (x === 0 ? 2 : 1); i < n; ++i) {
            if (i === x) continue;
            let a = nums[i];
            gcd = this.gcd(gcd, a);
            lcm = (lcm * a) / this.gcd(lcm, a);
        }

        return gcd * lcm;
    }

    maxScore(nums) {
        let n = nums.length;
        if (n === 1) return nums[0] * nums[0];

        let maxi = this.get(nums, -1);

        for (let i = 0; i < n; ++i) {
            maxi = Math.max(maxi, this.get(nums, i));
        }

        return maxi;
    }
}
