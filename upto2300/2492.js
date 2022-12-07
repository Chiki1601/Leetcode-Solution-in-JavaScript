var minScore = function(n, roads) {
  let uf = new UnionFind(n + 1);
  let minDist = Array(n + 1).fill(Infinity);
  for (let [a, b, distance] of roads) {
    minDist[a] = Math.min(minDist[a], distance);
    minDist[b] = Math.min(minDist[b], distance);
    uf.union(a, b);
  }
  
  let ans = Infinity;
  for (let i = 1; i <= n; i++) {
    if (uf.find(i) === uf.find(1)) {
      ans = Math.min(ans, minDist[i]);
    }
  }
  return ans;
};

class UnionFind {
  constructor(size) {
    this.root = Array(size);
    this.rank = Array(size)
    for (var i = 0; i < size; i++) {
      this.root[i] = i;
      this.rank[i] = 1;
    }
  }
  // recursively finding the root of x, setting roots of all along the path to the root from bottom up.
  find(x) {
    if (this.root[x] === x) {
      return x;
    }
    return this.root[x] = this.find(this.root[x]);
  }
  // choose side whose rank (height) is smaller to set as root out of (x, y)
  // if the heights are equal, set it either way (set x as root for simplicity) and increase rank of x by one.
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.root[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.root[rootX] = rootY;
      } else {
        this.root[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}
