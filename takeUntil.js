const takeUntil = function(array, callback) {
  let i = 0;
  let res = [];
  while (!callback(array[i])) {
    res.push(array[i]);
    i++;
  }
  return res;
};
module.exports = takeUntil;
