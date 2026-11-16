var maxScore = function(parent, op, score) {
    const n = parent.length;
    const children = Array.from({ length: n }, () => []);
    for (let i = 1; i < n; i++) {
        children[parent[i]].push(i);
    }
    
    const order = [0];
    for (let i = 0; i < order.length; i++) {
        const u = order[i];
        for (const v of children[u]) {
            order.push(v);
        }
    }
    
    const dp = new Array(n).fill(0n);
    for (let i = n - 1; i >= 0; i--) {
        const u = order[i];
        if (children[u].length === 0) {
            dp[u] = BigInt(score[u]);
            continue;
        }
        let totalSum = 0n;
        let minChild = 9223372036854775807n;
        for (const v of children[u]) {
            totalSum += dp[v];
            if (dp[v] < minChild) {
                minChild = dp[v];
            }
        }
        const sc = BigInt(score[u]);
        if (op[u] === 1) {
            dp[u] = sc + totalSum - minChild;
        } else {
            dp[u] = sc + totalSum - (0n < minChild ? 0n : minChild);
        }
    }
    return dp[0];
};
