const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

//Implement middle which will take in an array and return the middle-most element(s) of the given array.

const middle = (array) => {
  let middleArray = [];
  if (array.length < 3) {
    return middleArray;
  }
  if (array.length % 2 === 0) {
    let splicePosition = array.length / 2 - 1;
    middleArray = array.splice(splicePosition, 2);
    return middleArray;
  }
  if (array.length % 2 === 1) {
    let splicePosition = Math.floor(array.length / 2);
    middleArray = array.splice(splicePosition, 1);
    return middleArray;
  }
};

module.exports = middle;
