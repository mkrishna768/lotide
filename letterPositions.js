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
};

const letterPositions = function(string) {
  const results = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      results[string[i]] = (results[string[i]] || [])
      results[string[i]].push(i);
    }
  }
  return results;
};

const test = "hello";
const result = letterPositions(test);
assertArraysEqual(result["h"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [2, 3]);
assertArraysEqual(result["o"], [4]);