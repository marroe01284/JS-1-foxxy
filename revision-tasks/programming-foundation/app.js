// write the necessary JS code to solve the tasks below. It will help you know when to use certain js features etc

// pulled from https://edabit.com/challenges

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp() {
  // write solution here
}

// test

addUp(4); // ➞ 10

addUp(13); // ➞ 91

addUp(600); // ➞ 180300

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax() {
  // write solution here
}

minMax([1, 2, 3, 4, 5]); // ➞ [1, 5]

minMax([2334454, 5]); // ➞ [5, 2334454]

minMax([1]); // ➞ [1, 1]

// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

function detectWord() {
  // write solution here
}

detectWord("UcUNFYGaFYFYGtNUH"); // ➞ "cat"

detectWord("bEEFGBuFBRrHgUHlNFYaYr"); // ➞ "burglar"

detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"); // ➞ "embezzlement"

// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:
function sortDrinkByPrice() {
  // write solution here
}
drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
];
sortDrinkByPrice(drinks); // ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
