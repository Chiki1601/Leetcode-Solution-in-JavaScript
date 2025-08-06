var numOfUnplacedFruits = function(fruits, baskets) {
    const n = baskets.length;
    let N = 1;
    while (N <= n) N <<= 1;

    const segTree = new Array(N << 1).fill(0);
    for (let i = 0; i < n; i++) segTree[N + i] = baskets[i];

    for (let i = N - 1; i > 0; i--) {
        segTree[i] = Math.max(segTree[2 * i], segTree[2 * i + 1]);
    }

    let count = 0;
    for (let fruit of fruits) {
        let index = 1;
        if (segTree[index] < fruit) {
            count++;
            continue;
        }

        while (index < N) {
            if (segTree[2 * index] >= fruit) {
                index = 2 * index;
            } else {
                index = 2 * index + 1;
            }
        }

        segTree[index] = -1;
        while (index > 1) {
            index >>= 1;
            segTree[index] = Math.max(segTree[2 * index], segTree[2 * index + 1]);
        }
    }

    return count;
};
