//need to come back and fix this
const eqObjects = require("./eqObjects");

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect; // <= add this line
  // ...

  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
  // ✅✅✅ Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }
};

//TESTS
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
const longSleeveShirtObject = {
  size: "medium",
  colors: "red",
  sleeveLength: "long",
};

assertObjectsEqual(shirtObject, anotherShirtObject); //expects pass
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject); // expect pass
assertObjectsEqual(longSleeveMultiColorShirtObject, longSleeveShirtObject); // expect fail
assertObjectsEqual(shirtObject, longSleeveShirtObject); // expect fail

module.exports = assertObjectsEqual;
