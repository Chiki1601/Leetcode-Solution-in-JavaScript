/**
 * @param {string} s
 * @return {string}
 */
var lastNonEmptyString = function(s) {
    let fqs = new Array(26).fill(0).map(() => [0, 0]);
    let max = 0;
    for(let i=0;i<s.length;i++) {
        const fi = s.charCodeAt(i) - 'a'.charCodeAt(0);
        max = Math.max(max, ++fqs[fi][0]);
        fqs[fi][1] = i;
    }
    let result = [];
    for(let i=0;i<fqs.length;i++) {
        if(fqs[i][0] === max) {
            result.push([i, fqs[i][1]]);
        }
    }
    result.sort((x,y) => x[1] - y[1]);
    return result.map(x => String.fromCharCode(x[0] + 'a'.charCodeAt(0))).join('');
};
