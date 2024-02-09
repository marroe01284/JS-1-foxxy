// some dodgy code
try {
  foo.substring(1);
  const input = "Dean von Schoultz";
  input = "";
} catch (error) {
  console.log(error);

  if (error.message === "Assignment to constant variable.") {
    console.log("Dude, its a const");
  }
  if (error.message === "foo is not defined") {
    console.log("Foobar");
  }
} finally {
  console.log("some important code that MUST run regardless");
}

// something goes wrong --> do something
