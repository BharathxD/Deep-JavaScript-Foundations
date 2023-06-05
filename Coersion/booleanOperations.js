import print from "../Utils/print.js";

function main() {
  // Falsy
  print(`Boolean("") = ${Boolean("")}`);
  print(`Boolean(0) = ${Boolean(0)}`);
  print(`Boolean(-0) = ${Boolean(-0)}`);
  print(`Boolean(null) = ${Boolean(null)}`);
  print(`Boolean(NaN) = ${Boolean(NaN)}`);
  print(`Boolean(false) = ${Boolean(false)}`);
  print(`Boolean(undefined) = ${Boolean(undefined)}`);

  // Truthy
  print(`Boolean("foo") = ${Boolean("foo")}`);
  print(`Boolean(15) = ${Boolean(15)}`);
  print(`Boolean({a: 1}) = ${Boolean({ a: 1 })}`);
  print(`Boolean([1, 2]) = ${Boolean([1, 2])}`);
  print(`Boolean(true) = ${Boolean(true)}`);
  print(`Boolean(function () {}) = ${Boolean(function () {})}`);
  print(`Boolean([]) = ${Boolean([])}`);
}

main();
