
// Implement the function findKey which takes in an object and a calIt shlback. ould scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
const findKey = (obj, callback) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  for (let i = 0; i < values.length; i++) {
    let value = callback(values[i]);
    if (value) {
      return keys[i];
    }
  }
};

module.exports = findKey;
