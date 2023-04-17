var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  var now = Date.now();
  if (this.cache.has(key)) {
    this.cache.set(key, { value: value, exp: now + duration });
    return true;
  } else {
    this.cache.set(key, { value: value, exp: now + duration });
    return false;
  }
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  var now = Date.now();

  if (this.cache.has(key)) {
    if (this.cache.get(key).exp > now) return this.cache.get(key).value;
    else {
      this.cache.delete(key);
      return -1;
    }
  }
  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  var count = 0;
  var now = Date.now();
  for (x of this.cache.values()) {
    if (x.exp > now) count++;
  }
  return count;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
