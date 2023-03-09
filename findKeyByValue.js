// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const findKeyByValue = (scannedObject, valueToFind) => {
  const keys = Object.keys(scannedObject);
  const values = Object.values(scannedObject);

  const index = values.indexOf(valueToFind);

  return keys[index];
};

module.exports = findKeyByValue;
