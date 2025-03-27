var minimumIndex = function(nums) {
    const findDominantElement = (arr) => {
        let candidate = null, count = 0;

        // Boyer-Moore Majority Vote algorithm
        for (let num of arr) {
            if (count === 0) {
                candidate = num;
                count = 1;
            } else if (num === candidate) {
                count++;
            } else {
                count--;
            }
        }

        const totalCount = arr.filter(num => num === candidate).length;
        return totalCount > arr.length / 2 ? candidate : null;
    };

    const dominant = findDominantElement(nums);
    if (dominant === null) return -1;

    let leftCount = 0;
    const totalDominantCount = nums.filter(num => num === dominant).length;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === dominant) {
            leftCount++;
        }

        let leftSubarrayCount = leftCount;
        let rightSubarrayCount = totalDominantCount - leftCount;

        if (leftSubarrayCount > (i + 1) / 2 &&
            rightSubarrayCount > (nums.length - i - 1) / 2) {
            return i;
        }
    }

    return -1;
};
