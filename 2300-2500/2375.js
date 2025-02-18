var smallestNumber = function(pattern) {
    let ans = ["1"], temp = [];
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === 'I') {
            ans.push(...temp.reverse(), (i + 2).toString());
            temp = [];
        } else {
            temp.push(ans.pop());
            ans.push((i + 2).toString());
        }
    }
    return ans.concat(temp.reverse()).join("");
};
