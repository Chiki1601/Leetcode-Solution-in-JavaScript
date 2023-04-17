var TimeLimitedCache = function() {
  this.cache = {};
  this.c = 0;
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  if (this.cache[key] !== undefined) {
    if (this.cache[key].value === -1) {
      this.c++;
    } else {
      res = true;
      clearTimeout(this.cache[key].timeout);
    }
    this.cache[key] = {
      value: value,
      timeout: setTimeout(() => {
        this.cache[key].value = -1;
        this.c--;
      }, duration),
    }
  } else {
    this.c++;
    this.cache[key] = {
      value,
      timeout: setTimeout(() => {
        this.cache[key].value = -1;
        this.c--;
      }, duration),
    }
  }
  return res;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
  return this.cache[key]?.value || -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  return this.c;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
