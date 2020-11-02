const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');
const test = "hello";
const result = letterPositions(test);
assertArraysEqual(result["h"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [2, 3]);
assertArraysEqual(result["o"], [4]);