const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

//Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
const takeUntil = function (array, callback) {
  // ...
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      result.push(array[i]);
    } else {
      break;
    }
  }

  return result;
};

// Expected INPUT
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, (x) => x < 0);
// console.log(results1);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);

// console.log("---");

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood",
// ];
// const results2 = takeUntil(data2, (x) => x === ",");
// console.log(results2);
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

//EXPECTED OUTPUT
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

module.exports = takeUntil;
