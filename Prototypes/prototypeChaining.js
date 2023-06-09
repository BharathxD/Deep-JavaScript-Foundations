const newObj = {
  name: "none",
  age: 100,
  getAge: function () {
    console.log(`${this.age} is the age`);
  },
};

// newObj.__proto__.__proto__.__proto__; // ...
// An array.__prototype__ has object.__prototype__
// object.__prototype__ is null

newObj.__proto__.helloWorld = () => console.log("hello, World");
//? We can assign a new function to the newObj prototype
newObj.helloWorld();

/**
 * This is called prototype chaining
 * It ends up being null
 * But before null we will encounter an object
 * That is the reason why we call in javascript everything is an object
 */

const anotherObj = {
  age: 1000,
};

//! Don't do this!, it will case huge Performance issue
anotherObj.__proto__ = newObj;

anotherObj.getAge();
