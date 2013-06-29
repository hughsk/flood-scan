# flood-scan #

Marks out disconnected "rooms" in a 2D
[ndarray](http://github.com/mikolalysenko/ndarray) for procedural map
generation.

## Installation ##

``` bash
npm install flood-scan
```

## Usage ##

### `require('flood-scan')(ndarray[, options])` ###

Performs a scan on the supplied array. This will fill all "empty" cells with
a number for each enclosed space. By default, this will replace all zeros with
numbers 2 and above. This behavior can be changed by passing in the following
options:

* `limit`: The maximum amount of rooms to mark. Defaults to infinity.
* `indexer`: A function which takes the room number and returns the value that
  its cells should be filled with. Defaults to `n + 2`.
* `empty`: A function which takes the value of a cell, and returns whether
  it should be considered empty. By default, only zero is considered empty.

This will return an array of objects (one for each room). Each have the
following properties, most of which are borrowed from
[flood-fill](http://github.com/hughsk/flood-fill):

* `hi`: the highest x/y positions filled.
* `lo`: the lowest x/y positions filled.
* `area`: the total amount of cells filled in this room.
* `start`: the first cell that was filled in this room.

See [eyeball.js](http://github.com/hughsk/flood-scan/blob/master/eyeball.js)
for a visual test, and a full usage example.

[![flood-scan example](https://raw.github.com/hughsk/flood-fill/master/screenshot.png)](http://github.com/hughsk/flood-scan/blob/master/eyeball.js)
