
require('colors')

var zero = require('zeros')
var cave = require('cave-automata-2d')
var scan = require('./')

var grid = cave(zero([80, 42]), {
  density: 0.475
})(100)

var metrics = scan(grid, {
  indexer: function(n) { return n + 2 }
  , empty: function(n) { return n === 0 }
})

var height = grid.shape[1]
  , width = grid.shape[0]
  , colors = [
      'cyan'
    , 'grey'
    , 'red'
    , 'green'
    , 'blue'
    , 'bold'
    , 'yellow'
    , 'magenta'
  ]

for (var y = 1; y < height-1; y += 1) {
  for (var x = 1; x < width-1; x += 1) {
    var value = grid.get(x, y)
    process.stdout.write(value !== 1
      ? '@'[colors[value % colors.length]]
      : ' '
    )
  }
  process.stdout.write('\n')
}

console.log('caverns: ' + metrics.length)
console.log('smallest: ' + metrics.reduce(function(min, cur) {
  return Math.min(min, cur.area)
}, Infinity) + ' units')
console.log('largest: ' + metrics.reduce(function(max, cur) {
  return Math.max(max, cur.area)
}, 0) + ' units')
