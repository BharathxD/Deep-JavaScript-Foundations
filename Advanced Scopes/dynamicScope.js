// It is scope that is determined based upon the condition at run time.

const teacher = "Kyle";

function ask(question) {
  // Where was `ask()` called from? It was called from the `otherClass()`, so the scope is within `otherClass()`.
  console.log(`${teacher} - ${question}`);
}

function otherClass() {
  const teacher = "Suzy";
  ask("Why?");
}

otherClass(); // Suzy - Why
