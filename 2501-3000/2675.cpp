const flatten = (a, prefix = []) => Object.entries(a)
  .reduce((r, [k, v]) => (typeof v !== 'object' || v === null)
    ? { ...r, [[...prefix, k].join('.')]: v }
    : { ...r, ...flatten(v, [...prefix, k]) }, {})

onst jsonToMatrix = (a) => {
  a = a.map(i => flatten(i))
  const keys = Object.keys(a.reduce((r, i) => ({ ...r, ...i }), {})).sort()
  return a.reduce((r, i) => [ ...r, keys.map(key => (key in i) ? i[key] : '')], [ keys ])
}
