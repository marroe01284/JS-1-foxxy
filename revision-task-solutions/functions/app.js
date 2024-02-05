// 1. Defining Functions
function calculateArea(length, width) {
    return length * width;
}

// 2. Invoking Functions
const area = calculateArea(10, 5);
console.log(`Area of the rectangle: ${area}`);

// 3. Understanding Parameters vs. Arguments
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

greetUser('Alice'); // Replace 'Alice' with any name

// 4. Optional Challenge - Default Parameters
function greetUser(name = 'Anonymous') {
    console.log(`Hello, ${name}!`);
}

greetUser(); // Invokes the greeting for an anonymous user

// Explanation
// Defining Functions: The calculateArea function demonstrates how to define a function with parameters. Parameters act as placeholders for values that are passed into the function when it is called.

// Invoking Functions: Calling calculateArea(10, 5) demonstrates how to invoke a function and pass arguments to it. Arguments are the actual values or expressions provided to the function's parameters.

// Parameters vs. Arguments: Parameters are used when defining a function, representing the values that the function expects when it is called. Arguments are the real values passed to the function when you invoke it.

// Optional Challenge - Default Parameters: The updated greetUser function shows how to use default parameters. If a function is called without an argument for a parameter that has a default value, the function uses the default value.