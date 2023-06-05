function outerFunction() {
  function innerFunction(val) {
    return val * 2;
  }
  return innerFunction;
}

const newFunction = outerFunction(); // InnerFunction will be stored in the newFunction
console.log(newFunction(2)); // 4
