const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(map([1, 2, 3], x => x * 2), [2, 4, 6]);
assertArraysEqual(map([], x => x * 3), []);