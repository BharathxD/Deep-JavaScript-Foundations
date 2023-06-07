// An `Higher Order Function` is a function that accepts functions as parameters and/or returns a function

function copyArrayAndManipulate(array, callback) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
}

function multiplyBy2(value) {
  return value * 2;
}
const array = [1, 2, 3, 4];
const resultWithTraditionalFunction = copyArrayAndManipulate(
  array,
  multiplyBy2
);
const resultWithArrowFunction = copyArrayAndManipulate(
  array,
  (input) => input * 2
);

console.log(resultWithTraditionalFunction);
console.log(resultWithArrowFunction);
