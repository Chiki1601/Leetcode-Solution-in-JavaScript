/**
 * @param {number[]} parent
 * @param {number[]} op
 * @param {number[]} score
 * @return {number}
 */
var maxScore = function(parent, op, score) {
    const n = parent.length;
    const deg = new Int32Array(n);
    for (let i = 1; i < n; ++i) {
        deg[parent[i]]++;
    }
    
    const sum = new Float64Array(n);
    const mini = new Float64Array(n).fill(Infinity);
    const q = [];
    
    for (let i = 0; i < n; ++i) {
        if (deg[i] === 0) q.push(i);
    }
    
    let head = 0;
    while (head < q.length) {
        const u = q[head++];
        
        let ans = score[u];
        if (mini[u] !== Infinity) {
            const penalty = op[u] ? mini[u] : Math.min(0, mini[u]);
            ans += sum[u] - penalty;
        }
        
        if (u === 0) return ans;
        
        const p = parent[u];
        sum[p] += ans;
        if (ans < mini[p]) mini[p] = ans;
        
        if (--deg[p] === 0) q.push(p);
    }
    
    return 0;
};
