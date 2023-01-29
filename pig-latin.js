const input = process.argv.slice(2);

const pigLatin = (array) => {
  let result = "";
  array.forEach(input => {
    result += ` ${input.slice(1)}${input[0]}ay`;
  });
  return result;
};

console.log(pigLatin(input));