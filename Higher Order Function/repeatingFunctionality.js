function copyAndMultiplyBy2(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}

const array = [1, 2, 3, 4];
const result = copyAndMultiplyBy2(array);
console.log(result);
