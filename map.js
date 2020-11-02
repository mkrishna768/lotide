const map = function(arr, f) {
  const res = [];
  for (const element  of arr) {
    res.push(f(element));
  }
  return res;
};
module.exports = map;
