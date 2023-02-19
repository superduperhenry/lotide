//need to come back and fix this



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
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  
  for (let i = 0; i < object1Keys.length; i++) {
    object1Keys.forEach(key => {

      // checks if value is an array
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...

  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  // ✅✅✅ Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }

};


//TESTS
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };



const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };



assertObjectsEqual(shirtObject,anotherShirtObject); //expects pass
assertObjectsEqual(multiColorShirtObject,anotherMultiColorShirtObject); // expect pass
assertObjectsEqual(longSleeveMultiColorShirtObject,longSleeveShirtObject); // expect fail
assertObjectsEqual(shirtObject,longSleeveShirtObject); // expect fail