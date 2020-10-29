const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      if (!eqArrays(a[i], b[i])) {
        return false;
      }
    }else if (a[i] !== b[i]) {
      return false;
    }
    
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true)

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false)

assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([[2]], [[2]]), true);


