# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mkrishna768/lotide`

**Require it:**

`const _ = require('@mkrishna768/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

`head(array)`: returns the head of the given array. 

`tail(array)`: returns the tail of the given array.

`middle(array)`: returns the middle element(s) of the given array.

`countLetters(string)`: returns an object containing a count of every letter found in the given string.

`countOnly(array, itemsToCount)`: returns an object containing a count of every item in a given array, if that item is designated true in itemsToCount object.

`findKey(object, callback)`: returns first key in object that has a value which returns true for callback function.

`findKeyByValue(object, value)`: returns first key in object with given value.

`flatten(string)`: returns a flattened array.

`letterPositions(string)`: returns an object with the positions of all occurences of each letter in the string.

`map(array, callback)`: simplified clone of Array.map.

`takeUntil(array, callback)`; returns all items of array until callback function returns false

`without(array, remove)`: returns array without items in the given remove array

