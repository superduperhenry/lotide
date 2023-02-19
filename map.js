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

//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(
  [2, 3, 4],
  [1, 2, 3].map((item) => item + 1)
);
assertArraysEqual(
  ["H", "E", "Y"],
  ["Henry", "Eve", "Yvonne"].map((name) => name[0])
);
assertArraysEqual(
  ["Cup", "Bow"],
  ["Cupboard", "Bowling"].map((item) => item.slice(0, 3))
);

module.exports = map;
