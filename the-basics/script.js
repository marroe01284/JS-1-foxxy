// Variables ****************************

// Declaring a variable with 'var'. This type of variable can be redeclared and updated.
var myName = "Line";
console.log(myName); // Output: Line

// Declaring a variable with 'let'. This type can be updated but not redeclared within the same scope.
let age = 31;
console.log(age); // Output: 31
console.log(typeof age); // Outputs the data type of age, which is 'number'.

// Declaring a constant with 'const'. This type cannot be updated or redeclared.
const MAKE = "BMW";
console.log(MAKE); // Output: BMW


// Data Types ****************************

// Working with string data type
let greeting = "Hello, World!";
console.log(typeof greeting); // Outputs 'string', the type of the greeting variable.

// Working with boolean data type
let isHappy = true;
console.log(isHappy); // Outputs: true (a boolean value)
console.log(typeof isHappy); // Outputs: 'boolean', the type of isHappy.

// Undefined data type, declared but not assigned any value
let someVar;
console.log(typeof someVar); // Outputs: 'undefined', as someVar has no assigned value.

// Null data type, explicitly nothing or 'empty'
let emptyValue = null;
console.log(typeof emptyValue); // Output: 'object' (historical reasons, should be 'null')


// Object Section ****************************

// Creating an object. Objects store data in key-value pairs.
let person = {
    firstName: "Hesham",
    lastName: "El Masry",
    age: 31
};

// Accessing object properties
console.log(person); // Outputs the whole person object
console.log(person.firstName); // Outputs person's first name
console.log(person.lastName); // Outputs person's last name
console.log(person.age); // Outputs person's age

// Task: Create a car object with specified properties
let car = {
    make: "Volvo",
    year: "1992",
    condition: "Used",
    price: 10000
};

// Accessing car object's properties using dot notation and bracket notation
console.log(car.make); // Output: Volvo (dot notation)
console.log(car["make"]); // Output: Volvo (bracket notation)
console.log(car.condition); // Output: Used (dot notation)

// Constructing a string using concatenation
console.log("i have a " + car.make + " and it is " + car.year + " and it is used and the price is 10000");

// Constructing a string using template literals
console.log(`i have a ${car.make} and it is ${car.year} and it is used and the price is 10000`);


// Array Section ****************************

// Creating an array. Arrays store a collection of elements.
let colors = ["Red", "Green", "Blue"];

// Creating an array with mixed data types
let random = [
    55656, // Integer
    "Green", // String
    { name: "Hesh", age: 31}, // Object
    ["boy", "girl", "whatever"] // Another Array
];

// Accessing array elements by their index
console.log(random[0]); // Outputs the first item in the array
console.log(random[1]); // Outputs the second item in the array


// Type Conversion Section  ****************************

// Type Conversion: String to Number and Number to String

// String to number conversion
let year = "1992"; // String
console.log(year); // Outputs the string '1992'

// Converting the string 'year' to a number using parseInt()
let convertedYear = parseInt(year);
console.log(convertedYear); // Outputs the number 1992

// Number to string conversion
let num = 123; // Number
console.log(num.toString()); // Converts and outputs '123' as a string

let convertedNumber = num.toString();
console.log(convertedNumber); // Outputs the string '123'
