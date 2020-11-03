const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(a, b) {
  const inspect = require('util').inspect;
  if (eqObjects(a,b) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(a)} === ${inspect(b)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(a)} !== ${inspect(b)}`);
  }
};

//assertObjectsEqual({"a":1, "b":2, "c":3},{"a":1, "b":2});