import print from "../Utils/print.js";

function main() {
  print(`Number("") = ${Number("")}`); // 0
  print(`Number("0") = ${Number("0")}`); // 0
  print(`Number("-0") = ${Number("-0")}`); // -0
  print(`Number(" 0009 ") = ${Number(" 0009 ")}`); // 9
  print(`Number("3.14159") = ${Number("3.14159")}`); // 3.14159
  print(`Number("0.") = ${Number("0.")}`); // 0
  print(`Number(".0") = ${Number(".0")}`); // 0
  print(`Number(".") = ${Number(".")}`); // NaN
  print(`Number("0xaf") = ${Number("0xaf")}`); // 175

  print(`Number(false) = ${Number(false)}`); // 0
  print(`Number(true) = ${Number(true)}`); // 1
  print(`Number(null) = ${Number(null)}`); // 0
  print(`Number(undefined) = ${Number(undefined)}`); // NaN

  // So for the Array, the coercion to Number will do the following step
  // Array -> toString() -> toNumber();
  print(Number([null])); // 0
  // Here: [null].toString() // An Empty String: ""
  // Later: Number("") // 0

  print(Number({ a: 2 })); // NaN
}

main();
