// It is a convention, that we can use to define something, and assign value to it later

import print from "../Utils/print.js";

// VAR Hoisting
function varHoisting() {
  var student;
  var teacher;

  student = "Kyle";
  teacher = "The Teacher";
}

// Function Hoisting

function functionHoisting() {
  function teacher() {
    return "Kyle";
  }

  var otherTeacher;

  print(teacher()); // 'Kyle'
  print(otherTeacher()); // TypeError: otherTeacher is not a function

  otherTeacher = function () {
    return "The Teacher";
  };
}

varHoisting();
functionHoisting();
