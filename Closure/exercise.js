function addByX(x) {
  let value = x;
  function addByValue(y) {
    console.log(value + y);
    return value + y;
  }
  return addByValue;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

// CHALLENGE 4
function once(func) {
  let value = null;
  let counter = 0;
  function innerFunc() {
    if (counter > 1) {
      return value;
    }
    counter++;
    return func();
  }

  return innerFunc;
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4)); // => should log 6
