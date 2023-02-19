//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    console.log(false);
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
};

module.exports = eqArrays;
