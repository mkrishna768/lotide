const without = function(source, remove) {
  let res = [];
  for (let i = 0; i < source.length; i++) {
    const candy = source[i];
    if (!remove.includes(candy)) {
      res.push(candy);
    }
  }
  return res;
};
module.exports = without;