const flatten = function(array) {
  let ret = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (Array.isArray(element)) {
      ret = ret.concat(element);
    } else {
      ret.push(element);
    }
  }
  return ret;
};
module.exports = flatten;