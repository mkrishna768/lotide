const eqArrays = function(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      if (!eqArrays(a[i], b[i])) {
        return false;
      }
    }else if (a[i] !== b[i]) {
      return false;
    }
    
  }
  return true;
};

module.exports = eqArrays;
