const user1 = {};

user1.name = "Will";
user1.score = 1;
user1.increment = function () {
  user1.score++;
};

/**
 * So the javascript will append the `prototype`, which is an object
 * That has all the methods corresponding to the type of operation/datatype
 */

user1.__prototype__.toString();
user1.toString();
