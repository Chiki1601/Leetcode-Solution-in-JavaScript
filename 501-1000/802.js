/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
  var len = graph.length
  var queue = []
  var rgraph = {}
  var ngraph = {}
  var safe = []
  for (let i = 0; i < len; i++) {
      safe[i] = false
      ngraph[i] = graph[i]
      rgraph[i] = []
  }
  // 给queue和rgraph提供初始值
  for (let key in ngraph) {
    if (ngraph[key].length === 0) {
      queue.push(key)
    }
    if (ngraph[key].length > 0) {
      for (let i = 0; i < ngraph[key].length; i ++) {
        // rgraph[i].push(value[i])
        let item = ngraph[key][i]
        rgraph[item].push(key)
      }
    }
  }
  // console.log(queue)
  while (queue.length > 0) {
    let cur = queue.shift()
    safe[cur] = true
    for (let i = 0 ; i < rgraph[cur].length; i++) {
      let item = rgraph[cur][i]
      if (ngraph[item].length > 0) {
        let index = ngraph[item].indexOf(cur)
        ngraph[item].splice(index, 1)
      }
      if (ngraph[item].length === 0) {
        queue.push(item)
      }
    }
  }
  // 打印结果
  let res = []
  for (let i = 0 ; i < len; i ++) {
    if (safe[i]) {
      res.push(i)
    }
  }
  return res
  // console.log(safe)
};
var graph = [[1,2],[2,3],[5],[0],[5],[],[]]
var res = eventualSafeNodes(graph)
console.log(res)
