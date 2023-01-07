var canCompleteCircuit = function(gas, cost) {
    const n = gas.length;

    let gasRequired = 0;
    let totalCost = 0;
    for(let i = 0; i < n; i += 1) {
        gasRequired += gas[i];
        totalCost += cost[i];
    }
    if(totalCost > gasRequired) return -1;

    const findReach = (end, i, prev = 0, isStart = true) => {
        if(i === end && !isStart) return n + i;
        if(prev + gas[i] < cost[i]) return i;

        return findReach(end, (i+1)%n, prev + gas[i] - cost[i], false);
    }

    for(let i = 0; i < n;) {
        const reach = findReach(i, i);
        if(reach >= n) return i;
        i = reach > i ? reach : i + 1;
    }

    return -1;
};
