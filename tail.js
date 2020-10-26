const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(arr) {
  return arr.slice(1);
  
};

const testArray = ["a", "b", "c"];
const resA = tail(testArray);
assertEqual(resA.length, 2);
assertEqual(resA[0], "b");
assertEqual(resA[1], "c");
assertEqual(testArray.length, 3);
const resB = tail(["a"]);
assertEqual(resB.length, 0);
const resC = tail([]);
assertEqual(resC.length, 0);
