const input = process.argv.slice(2);

const reverse = (array) => {
  array.forEach(input => {
    let reversed = "";
    for (let i = input.length - 1; i >= 0; i--) {
      reversed += input[i];
    }
    console.log(reversed);
  });
};

reverse(input);