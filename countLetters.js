// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

const { count } = require("console");

const countLetters = (str) => {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      result[str[i]] += 1;
    } else {
      result[str[i]] = 1;
    }
  }
  return result;
};

//TEST
// console.log(countLetters("LHL IS COOL"));

module.exports = countLetters;
