
//Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
const takeUntil = (array, callback) => {
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

module.exports = takeUntil;
