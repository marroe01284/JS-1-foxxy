//#region Function types
function doSomething() {
  console.log("I just do something -> void ");
  console.log("I just do something -> void ");
  console.log("I just do something -> void ");
  console.log("I just do something -> void ");
  console.log("I just do something -> void ");
  console.log("I just do something -> void ");

  console.log("I just do something -> void ");
  console.log("I just do something -> void ");
}
// void
doSomething();

function doSomethingWithData(someData) {
  console.log("I just do something with someData here it is " + someData);
}
// void with some parameters
doSomethingWithData("Some sweet string");

function doSomethingThatReturnsAString() {
  return "This is easy";
}

let result = doSomethingThatReturnsAString() + doSomethingThatReturnsAString();

console.log(result);

function doSomethingThatReturnsASomething(someData) {
  return "This is easy" + someData;
}

let result2 = doSomethingThatReturnsASomething(doSomethingThatReturnsAString());

console.log(result2);
//#endregion

//#region HOF and Callbacks

function doSomethingWithACallback(someParam) {
  console.log("I do something");
  console.log("I do something");

  someParam();

  console.log("I do something");
  console.log("I do something");
}

doSomethingWithACallback(function () {
  console.log("I am callback");
  console.log("I am callback");
  console.log("I am callback");
  console.log("I am callback");
});

doSomethingWithACallback(function () {
  console.log("I am also a callback");
});

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function count(array, logic) {
  let counter = 0;
  for (let number of array) {
    let shouldInclude = logic(number);

    if (shouldInclude) {
      counter++;
    }
  }
  return counter;
}

let resultGreaterThan5 = count(numbers, function (number) {
  if (number > 5) {
    return true;
  } else {
    false;
  }
});

console.log(resultGreaterThan5);

let resultLessThan5 = count(numbers, (number) => {
  if (number < 5) {
    return true;
  } else {
    false;
  }
});

console.log(resultLessThan5);

//#endregion
