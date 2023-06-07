function outer() {
  let counter = 0;
  function innerFunction() {
    return counter++;
  }
  return innerFunction;
}

// Backpack 1 (Closure 1)
const functionOne = outer();
console.log(functionOne()); // 0
console.log(functionOne()); // 1

// Backpack 2 (Closure 2)
const functionTwo = outer();
console.log(functionTwo()); // 0
console.log(functionTwo()); // 1
