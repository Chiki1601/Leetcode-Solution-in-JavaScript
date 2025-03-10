var minimumRecolors = function(blocks, k) {
    let blackCount = 0, ans = blocks.length;
    
    for (let i = 0; i < blocks.length; i++) {
        if (i - k >= 0 && blocks[i - k] === 'B') blackCount--;
        if (blocks[i] === 'B') blackCount++;
        ans = Math.min(ans, k - blackCount);
    }
    
    return ans;
};
