/**
 * @param {number} p
 * @return {number}
 */
const minNonZeroProduct = function (p) {
  const MOD = BigInt(10 ** 9 + 7), bp = BigInt(p)
  const bpm = BigInt(1n << bp) - 1n, base = BigInt(1n << bp) - 2n, pow = BigInt(1n << (bp - 1n)) - 1n 
  return Number((bpm % MOD) * fastPow(base, pow, MOD) % MOD)

}

function fastPow(base, power, mod) {
  if(power === 0n) return 1n
  base %= mod
  let res = fastPow(base, power / 2n, mod)
  res = (res * res) % mod
  if(power & 1n) res = (res * base) % mod
  return res
}
