maxFreeTime = (eventTime, k, startTime, endTime, max = 0) => {
    const count = startTime.length;
    const prefixSum = new Array(count + 1).fill(0);

    for (let i = 0; i < count; i++) {
        prefixSum[i + 1] = prefixSum[i] + endTime[i] - startTime[i];
    }

    for (let i = k - 1; i < count; i++) {
        const occupied = prefixSum[i + 1] - prefixSum[i - k + 1];
        const windowEnd = (i === count - 1) ? eventTime : startTime[i + 1];
        const windowStart = (i === k - 1) ? 0 : endTime[i - k];
        max = Math.max(max, windowEnd - windowStart - occupied);
    }

    return max;
};
