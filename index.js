var fill = require('flood-fill')

module.exports = scan

function scan(grid, opts) {
  opts = opts || {}

  var indexer = 'indexer' in opts ? functor(opts.indexer) : defaultIndexer
    , empty = opts.empty || defaultEmpty
    , limit = opts.limit || Infinity
    , length = grid.data.length
    , height = grid.shape[1]
    , width = grid.shape[0]
    , data = grid.data
    , metrics = []
    , metric
    , idx = 0
    , x, y

  top:
  for (x = 0; x < width; x += 1)
  for (y = 0; y < height; y += 1) {
    if (empty(grid.get(x, y))) {
      metric = fill(grid, x, y, indexer(idx++))
      metric.start = [x, y]
      metrics.push(metric)
      if (idx > limit) break top
    }
  }

  return metrics
}

function functor(x) {
  if (typeof x === 'function') return x
  return function() {
    return x
  }
}

function defaultIndexer(x) {
  return x + 2
}

function defaultEmpty(x) {
  return x === 0
}
