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
  }else{
    console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
  }
}
const flatten = function(array){
  let ret = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (Array.isArray(element)) {
      ret = ret.concat(element);
    }else {
      ret.push(element);
    }
  }
  return ret;
}
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

assertArraysEqual(flatten([1, 2, [3, 4], 5, []]), [1, 2, 3, 4, 5]);
assertArraysEqual(flatten([]), []);