const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const results1 = map(words, (word) => word[0]);
// console.log(results1);

// assertArraysEqual(
//   [2, 3, 4],
//   [1, 2, 3].map((item) => item + 1)
// );
// assertArraysEqual(
//   ["H", "E", "Y"],
//   ["Henry", "Eve", "Yvonne"].map((name) => name[0])
// );
// assertArraysEqual(
//   ["Cup", "Bow"],
//   ["Cupboard", "Bowling"].map((item) => item.slice(0, 3))
// );

module.exports = map;
