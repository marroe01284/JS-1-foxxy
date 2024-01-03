// Section 1: Selecting Elements

// 1. Selects the first <h2> element in the document
const heading2 = document.querySelector("h2");
console.log(heading2); // Outputs the selected <h2> element to the console

// 2. Selects the first element with the class 'heading2'
const headingByClass = document.querySelector(".heading2");
console.log(headingByClass); // Outputs the selected element with class 'heading2' to the console

// 3. Selects the first element with the ID 'list' using querySelector
const list = document.querySelector("#list");
console.log(list); // Outputs the selected element with ID 'list' to the console

// 4. Selects the element with the ID 'list' using getElementById
const list2 = document.getElementById("list");
console.log(list2); // Outputs the selected element with ID 'list' to the console

// 5. Selects the first <li> element
const listItem = document.querySelector("li");
console.log(listItem); // Outputs the first <li> element to the console

// 6. Selects all <li> elements and returns a NodeList
const listItems = document.querySelectorAll("li");
console.log(listItems); // Outputs all <li> elements to the console

// Section 2: Modifying Styles and Content

// 7. Selects the <h1> element and changes its CSS styles
const heading1 = document.querySelector("h1");
heading1.style.color = "red"; // Changes the text color of <h1> to red
heading1.style.border = "5px solid green"; // Adds a green solid border to <h1>
heading1.style.padding = "1rem"; // Adds padding around <h1>

// Changes the background color of the <h1> element
heading1.style.backgroundColor = "lightGray";

// Selects the first <div> element and adds the 'container' class to it
const myDiv = document.querySelector("div");
myDiv.classList.add("container"); // Adds 'container' class to the selected <div>

// Changes the inner text of the <h1> element
heading1.innerText = "Hei Ingrid Og Hei Line";

// Changes the HTML content of the <h2> element, including a span with class 'green'
heading2.innerHTML = `<span class="green">Hei Ingrid Og Hei Line</span>`;

// Section 3: Working with Arrays and Loops

// Creates an array of names
const myArrayOfNames = ["hesh", "Kjetil", "jonas", "johnny", "Marius"];

// Iterates over the array and logs each name to the console
for (let i = 0; i < myArrayOfNames.length; i++) {
    console.log(myArrayOfNames[i]); // Outputs each name in the array
}

// Iterates from 1 to 100 and logs each number to the console
for (let i = 1; i <= 100; i++) {
    console.log(i); // Outputs numbers from 1 to 100
}

// Section 4: Demonstrating Arithmetic and Logical Operators

// Demonstrates addition
let sum = 10 + 5;
console.log(sum); // Outputs 15 (10 + 5)

// Demonstrates subtraction
let difference = 10 - 5;
console.log("difference: ", difference); // Outputs 5 (10 - 5)

// Demonstrates multiplication
let product = 10 * 5;
console.log(product); // Outputs 50 (10 * 5)

// Demonstrates division
let result = 10 / 5;
console.log(result); // Outputs 2 (10 / 5)

// Demonstrates modulus (remainder of division)
let remainder = 10 % 4; // remainder is 2
console.log(remainder);

// Demonstrates assignment, addition assignment, and subtraction assignment
let a = 5; // Assigns 5 to a
let b = 10;
b += 5; // Adds 5 to b (b becomes 15)
let c = 15;
c -= 5; // Subtracts 5 from c (c becomes 10)

// Demonstrates comparison operators (equality, strict equality, non-equality, and greater than)
let isEqual = (5 == "5"); // true, checks value regardless of type
let isStrictEqual = (5 === "5"); // false, checks value and type
let isNotEqual = (5 != "6"); // true, checks if values are not equal
let isGreaterThan = (10 > 5); // true, checks if left value is greater than right value

// Demonstrates logical operators (AND, OR, NOT)
// Demonstrates the AND operator (&&)
let andResult = (5 < 4 && 10 > 5);
console.log("andResult: ", andResult); // Outputs false because one condition (5 < 4) is false

// Demonstrates the OR operator (||)
let orResult = (5 > 10 || 10 > 5);
console.log("orResult: ", orResult); // Outputs true because one condition (10 > 5) is true

// Demonstrates the NOT operator (!)
let notResult = !(5 > 10);
console.log("notResult: ", notResult); // Outputs true because 5 > 10 is false, and NOT false is true

// Additional Examples of Logical Operators
// Combining AND and OR operators
let combinedResult = (true && true) || (false && true);
console.log("combinedResult: ", combinedResult); // Outputs true

// More complex condition using logical operators
let complexCondition = (true && false) || (true || false);
console.log("complexCondition: ", complexCondition); // Outputs true
