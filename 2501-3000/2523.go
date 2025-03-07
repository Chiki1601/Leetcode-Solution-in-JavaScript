func closestPrimes(left int, right int) []int {
    sieve := make([]bool, right+1)
    for i := range sieve {
        sieve[i] = true
    }
    sieve[0], sieve[1] = false, false
    
    for i := 2; i*i <= right; i++ {
        if sieve[i] {
            for j := i * i; j <= right; j += i {
                sieve[j] = false
            }
        }
    }
    
    primes := []int{}
    for i := left; i <= right; i++ {
        if sieve[i] {
            primes = append(primes, i)
        }
    }
    
    if len(primes) < 2 {
        return []int{-1, -1}
    }
    
    minGap := int(^uint(0) >> 1)
    result := []int{-1, -1}
    
    for i := 1; i < len(primes); i++ {
        gap := primes[i] - primes[i-1]
        if gap < minGap {
            minGap = gap
            result[0] = primes[i-1]
            result[1] = primes[i]
        }
    }
    
    return result
}
