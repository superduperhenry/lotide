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

// assertArraysEqual(middle([1]), []); // pass
// assertArraysEqual(middle([1, 2]), []); // pass

// //For arrays with odd number of elements, an array containing a single middle element should be returned.
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

console.log(middle([1, 2, 3, 4]), [2, 3]);
module.exports = middle;
