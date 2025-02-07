var queryResults = function(limit, queries) {
    const ball = new Map(), color = new Map(), ans = [];
    let distinct = 0;
    for (const [pos, c] of queries) {
        if (ball.has(pos)) {
            let cnt = color.get(ball.get(pos)) - 1;
            if (cnt === 0) { color.delete(ball.get(pos)); distinct--; }
            else color.set(ball.get(pos), cnt);
        }
        ball.set(pos, c);
        let cnt = (color.get(c) || 0) + 1;
        color.set(c, cnt);
        if (cnt === 1) distinct++;
        ans.push(distinct);
    }
    return ans;
};
