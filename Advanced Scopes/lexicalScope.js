// It is scope that is determined based upon the condition at author time

// Scope 2
const teacher = "Kyle";
function otherClass() {
  // Scope 1
  const teacher = "Suzy";
  function ask(question) {
    // Scope 0
    console.log(`${teacher} - ${question}`);
  }
  ask("Why?");
}

otherClass(); // Suzy - Why?
