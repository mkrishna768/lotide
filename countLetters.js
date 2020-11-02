
const countLetters = function(string) {
  let res = {};
  for (const letter in string) {
    if (string[letter] !== " ") {
      res[string[letter]] = (res[string[letter]] + 1 || 1);
    }
  }
  return res;
};
module.exports = countLetters;
