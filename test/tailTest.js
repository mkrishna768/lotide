const assertEqual = require('../assertEqual');
const tail = require('../tail');

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