// We are simply creating an object without inheriting any of methods from the prototype
const user3 = Object.create(null);

user3.name = "will";
user3.score = 1;
user3.increment = function () {
  user3.score++;
};

console.log(user3);
user3.increment();
console.log(user3);
