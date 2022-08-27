/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  var map = {};
  for (var i = 0; i < s.length; i++) {
      var key = map.getKeyByValue(t[i]);
      if (key && s[i] !== key) {
          return false;
      } else if (s[i] in map) {
          if (map[s[i]] !== t[i]) {
              return false;
          }
      } else {
          map[s[i]] = t[i];
      }
  }
  return true;
};

Object.prototype.getKeyByValue = function(value) {
  for (var prop in this) {
      if (this.hasOwnProperty(prop)) {
          if (this[prop] === value)
              return prop;
      }
  }
};

// a better solution, use array
var isIsomorphic = function(s, t) {
    var arrS = [],
        arrT = [];

    for (var i = 0; i < s.length; i++) {
        if (arrS[s.charCodeAt(i)] !== arrT[t.charCodeAt(i)]) {
            return false;
        }

        arrS[s.charCodeAt(i)] = i;
        arrT[t.charCodeAt(i)] = i;
    }

    return true;
};
