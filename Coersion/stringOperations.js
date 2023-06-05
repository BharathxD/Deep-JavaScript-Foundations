import print from "../Utils/print.js";

function main() {
  // Abstract Operations - toString(Array)
  print(`(-0).toString() = ${(-0).toString()}`); // 0
  print(`[].toString() = ${[].toString()}`); // ""
  print(`[1, 2, 3].toString() = ${[1, 2, 3].toString()}`); // "1, 2, 3"
  print(`[null, undefined].toString() = ${[null, undefined].toString()}`); // ","
  print(`[[[],[],[]], []].toString() = ${[[[], [], []], []].toString()}`); // ",,,"
  print(`[,,,,].toString() = ${[, , , ,].toString()}`); // ",,,"
  // Abstract Operations - toString(Object)
  print(`{}.toString() = ${{}.toString()}`); // "[object Object]"
  print(`{a: 2}.toString() = ${{ a: 2 }.toString()}`); // "[object Object]"
  // Use JSON.stringify();
  print(`JSON.stringify({a: 2}) = ${JSON.stringify({ a: 2 })}`); // {"a":2}
  print(
    `{toString(){return "X";}} = ${{
      toString() {
        return "X";
      },
    }}`
  ); // "X"
}

main();
