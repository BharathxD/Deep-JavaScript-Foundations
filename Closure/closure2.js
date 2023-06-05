function outer() {
  let counter = 0;
  function incrementFunction() {
    return counter++;
  }
  return incrementFunction;
}

const newFunction = outer(); // [[scope]] will be stored in the global memory
//? Important: Although, the outer function's execution context will be deleted, the all the surrounding data will be stored in the global memory along with the incrementFunction();
console.log(newFunction()); // PostIncrement: 0
console.log(newFunction()); // PostIncrement: 1
