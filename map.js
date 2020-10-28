const eqArrays = function(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
    
  }
  return true;
};
const assertArraysEqual = function(a, b) {
  if (eqArrays(a,b) === true) {
    console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
  }
};

const map = function(arr, f) {
  const res = [];
  for (const element  of arr) {
    res.push(f(element));
  }
  return res;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(map([1, 2, 3], x => x * 2), [2, 4, 6]);
assertArraysEqual(map([], x => x * 3), []);