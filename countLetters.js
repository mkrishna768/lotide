const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string){
  res = {};
  for (const letter in string) {
    console.log(string[letter]);
    if (string[letter] !== " ") {
      res[string[letter]] = (res[string[letter]] + 1 || 1);
    }
  }
  console.log(res);
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