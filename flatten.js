//Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
};


//TESTS
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [3, 4], 5, [6],[7,8,9],10])); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
