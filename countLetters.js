const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let res = {};
  for (const letter in string) {
    if (string[letter] !== " ") {
      res[string[letter]] = (res[string[letter]] + 1 || 1);
    }
  }
  return res;
};
const test = "a bb ccc g";
const result = countLetters(test);
assertEqual(result["a"], 1);
assertEqual(result["b"], 2);
assertEqual(result["c"], 3);
assertEqual(result["d"], undefined);
assertEqual(result["g"] , 1);
assertEqual(result[" "], undefined);