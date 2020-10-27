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

const without = function(source, remove) {
  let res = [];
  for (let i = 0; i < source.length; i++) {
    const candy = source[i];
    if (!remove.includes(candy)) {
      res.push(candy);
    }
  }
  return res;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without([], [1]), []);
let test = [1, 2, 3];
without(test, [1]);
assertArraysEqual(test, [1, 2, 3]);