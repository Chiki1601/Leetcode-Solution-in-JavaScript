/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
const minimizedMaximum = function(n, quantities) {
  const m = quantities.length
  let l = 0, r = Math.max(...quantities)
  while(l < r) {
    const mid = l + Math.floor((r - l) / 2)
    if(valid(mid)) r = mid
    else l = mid + 1
  }
  
  return l

  function valid(mid) {
    if(m > n) return false
    let res = 0
    for (let i = 0; i < m; i++) {
      res += Math.ceil(quantities[i] / mid)
    }
    return res <= n
  }
};
