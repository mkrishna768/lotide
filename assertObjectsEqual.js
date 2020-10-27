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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    if (!object2[key] || (object1[key] !== object2[key])) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key])) {
          return true;
        }
      }
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(a, b) {
  const inspect = require('util').inspect;
  if (eqObjects(a,b) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(a)} === ${inspect(b)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(a)} !== ${inspect(b)}`);
  }
};

assertObjectsEqual({"a":1, "b":2, "c":3},{"a":1, "b":2});