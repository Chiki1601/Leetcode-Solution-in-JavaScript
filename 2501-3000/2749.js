function makeTheIntegerZero(num1, num2) {
  for (let t = 0; t <= 60; t++) {
    let s = BigInt(num1) - BigInt(t) * BigInt(num2);
    if (s < 0n) continue;
    if (s < BigInt(t)) continue;
    let ones = popcountBigInt(s);
    if (ones <= t) return t;
  }
  return -1;
}

function popcountBigInt(x) {
  let cnt = 0;
  while (x > 0n) {
    if (x & 1n) cnt++;
    x >>= 1n;
  }
  return cnt;
}
