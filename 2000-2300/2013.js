const DetectSquares = function() {
  this.pts = []
  this.ptsCnt = {}
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
  this.pts.push(point)
  const key = `${point[0]},${point[1]}`
  this.ptsCnt[key] = (this.ptsCnt[key] || 0) + 1
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
  let res = 0
  const [px, py] = point
  for(const [x, y] of this.pts) {
    if(px === x || py === y || Math.abs(px - x) !== Math.abs(py - y)) {
       continue
    }
    res += (this.ptsCnt[`${px},${y}`] || 0) * (this.ptsCnt[`${x},${py}`] || 0)
  }
  
  return res
};
