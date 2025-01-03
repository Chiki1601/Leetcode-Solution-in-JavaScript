var waysToSplitArray = function(nums) {
    let leftSideSum = 0, rightSideSum = nums.reduce((acc, num) => acc + num, 0);
    let validSplits = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        leftSideSum += nums[i];
        rightSideSum -= nums[i];
        if (leftSideSum >= rightSideSum) {
            validSplits++;
        }
    }

    return validSplits;
};
