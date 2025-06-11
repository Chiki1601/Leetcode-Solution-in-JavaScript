const maxDifference = (s, k) => {
    const length = s.length;
    let result = -Infinity;

    for (let first = 0; first < 5; first++) {
        for (let second = 0; second < 5; second++) {
            if (first === second) continue;

            const diff = Array(length + 1).fill(0);
            const parityA = Array(length + 1).fill(0);
            const parityB = Array(length + 1).fill(0);
            const countB = Array(length + 1).fill(0);

            for (let i = 1; i <= length; i++) {
                const digit = s.charCodeAt(i - 1) - 48;
                diff[i] = diff[i - 1] + (digit === first ? 1 : 0) - (digit === second ? 1 : 0);
                parityA[i] = (parityA[i - 1] + (digit === first ? 1 : 0)) & 1;
                parityB[i] = (parityB[i - 1] + (digit === second ? 1 : 0)) & 1;
                countB[i] = countB[i - 1] + (digit === second ? 1 : 0);
            }

            const storage = Array.from({ length: 2 }, () =>
                Array.from({ length: 2 }, () => new MinBIT(length + 1))
            );

            for (let j = 0; j <= length; j++) {
                if (j >= k) {
                    const back = j - k;
                    const pA = parityA[back];
                    const pB = parityB[back];
                    const bCount = countB[back];
                    storage[pA][pB].insert(bCount, diff[back]);
                }

                if (j > 0 && countB[j] > 0) {
                    const altA = 1 - parityA[j];
                    const curB = parityB[j];
                    const minPrev = storage[altA][curB].getMin(countB[j] - 1);

                    if (minPrev !== MinBIT.MAX) {
                        result = Math.max(result, diff[j] - minPrev);
                    }
                }
            }
        }
    }

    return result === -Infinity ? 0 : result;
};

class MinBIT {
    static MAX = Number.MAX_SAFE_INTEGER;

    constructor(length) {
        this.n = length;
        this.data = Array(length + 2).fill(MinBIT.MAX);
    }

    insert(index, value) {
        for (let i = index + 1; i <= this.n; i += i & -i) {
            this.data[i] = Math.min(this.data[i], value);
        }
    }

    getMin(index) {
        let result = MinBIT.MAX;
        for (let i = index + 1; i > 0; i -= i & -i) {
            result = Math.min(result, this.data[i]);
        }
        return result;
    }
}
