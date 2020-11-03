const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if(typeof object1 !== 'object' || typeof object2 !== 'object') return false;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    if (!object2[key]) return false;
    if ((object1[key] !== object2[key])) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      }
      if(typeof object1[key] === 'object' && object1[key] !== null){
        if (!eqObjects(object1[key], object2[key])) return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;