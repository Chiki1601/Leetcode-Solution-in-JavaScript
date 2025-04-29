/**
 * @param {number[]} input
 * @param {number} minFrequencyForMaxValue
 * @return {number}
 */
var countSubarrays = function (input, minFrequencyForMaxValue) {
    const maxValue = Math.max(...input);

    let left = 0;
    let right = 0;
    let frequencyMaxValue = 0;
    let countSubarrays = 0;

    while (right < input.length) {

        frequencyMaxValue += (input[right] === maxValue) ? 1 : 0;

        while (frequencyMaxValue === minFrequencyForMaxValue) {
            frequencyMaxValue -= (input[left] === maxValue) ? 1 : 0;
            ++left;
        }
        ++right;

        countSubarrays += left;
    }

    return countSubarrays;
};
