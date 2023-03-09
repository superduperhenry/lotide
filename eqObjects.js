const eqArrays = require("./eqArrays");

const eqObjects = (object1, object2) => {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let i = 0; i < object1Keys.length; i++) {
    if (
      Array.isArray(object1[object1Keys[i]]) ||
      Array.isArray(object2[object1Keys[i]])
    ) {
      if (
        eqArrays(object1[object1Keys[i]], object2[object1Keys[i]]) === false
      ) {
        return false;
      }
    } else {
      if (object1[object1Keys[i]] !== object2[object1Keys[i]]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
