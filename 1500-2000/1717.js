/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    
    const solve = (text, pattern, score) => {
        const stack = [];
        let points = 0;
        for (const char of text) {
            if (stack.length > 0 && stack[stack.length - 1] === pattern[0] && char === pattern[1]) {
                stack.pop();
                points += score;
            } else {
                stack.push(char);
            }
        }
        return { points, remainingText: stack.join('') };
    };

    let totalPoints = 0;
    let highPriorityPair, lowPriorityPair, highPriorityScore, lowPriorityScore;

    if (x > y) {
        highPriorityPair = "ab";
        highPriorityScore = x;
        lowPriorityPair = "ba";
        lowPriorityScore = y;
    } else {
        highPriorityPair = "ba";
        highPriorityScore = y;
        lowPriorityPair = "ab";
        lowPriorityScore = x;
    }

    // First pass
    const { points: points1, remainingText: afterFirstPass } = solve(s, highPriorityPair, highPriorityScore);
    totalPoints += points1;

    // Second pass
    const { points: points2 } = solve(afterFirstPass, lowPriorityPair, lowPriorityScore);
    totalPoints += points2;

    return totalPoints;
};
