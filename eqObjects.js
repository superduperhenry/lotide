const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    // console.log(false);
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      // console.log(false);
      return false;
    }
  }
  // console.log(true);
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let i = 0; i < object1Keys.length; i++) {
    object1Keys.forEach((key) => {
      // checks if value is an array
      if (Array.isArray(object1[key])) {
        //eqArrays returns true if both arrays passed in are equal
        if (!eqArrays(object1[key], object2[key])) {
          console.log(`false row 41`);
          return false;
        }
      }

      if (object1[key] !== object2[key]) {
        return false;
      }
    });
  }

  return true;
};

//TESTS
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
console.log(`first test`);
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

//MORE TESTS
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
console.log(`second test array should be true`);
assertEqual(
  eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
  true
); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
console.log(`third test array should be false`);
assertEqual(
  eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
  false
); // => false

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
eqObjects(shirtObject, longSleeveShirtObject); // => false
console.log(`fourth test`);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

module.exports = eqObjects;
