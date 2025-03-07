var closestPrimes = function(left, right) {
    let sieve = new Array(right + 1).fill(true);
    sieve[0] = sieve[1] = false;
    
    for (let i = 2; i * i <= right; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= right; j += i) {
                sieve[j] = false;
            }
        }
    }
    
    let primes = [];
    for (let i = left; i <= right; i++) {
        if (sieve[i]) {
            primes.push(i);
        }
    }
    
    if (primes.length < 2) {
        return [-1, -1];
    }
    
    let minGap = Infinity;
    let result = [-1, -1];
    
    for (let i = 1; i < primes.length; i++) {
        let gap = primes[i] - primes[i - 1];
        if (gap < minGap) {
            minGap = gap;
            result = [primes[i - 1], primes[i]];
        }
    }
    
    return result;
};
