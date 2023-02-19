const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let i = 0; i < object1Keys.length; i++) {
    //goes through keys, if value is an array in both object, compares both arrays using eqArrays
    // console.log(
    //   object1Keys[i],
    //   object1[object1Keys[i]],
    //   object2[object1Keys[i]]
    // );
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
