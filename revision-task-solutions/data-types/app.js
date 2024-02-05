//#region Sample Solution
// Strings: Strings are used for textual data. In this task, concatenating another string demonstrates how to combine text values.

// Numbers: Numbers represent numeric data. Adding 100 to the original page count showcases a basic numeric operation.

// Arrays: Arrays are used to store lists of values. By adding another character to the array, this operation shows how arrays can dynamically hold and manage collections of data.

// Objects: Objects provide a way to group related data and functionality. Adding a new property (genre) to the book object illustrates how objects can be expanded to include more details over time.
//#endregion

// Variable declarations
let favoriteBookTitle = "The Great Gatsby";
let numberOfPages = 180;
let mainCharacters = ["Nick Carraway", "Jay Gatsby", "Daisy Buchanan"];
let bookInfo = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  yearOfPublication: 1925
};

// String operation
favoriteBookTitle += ": A Classic Novel";
console.log(`Updated book title: ${favoriteBookTitle}`);

// Number operation
numberOfPages += 100;
console.log(`Updated number of pages: ${numberOfPages}`);

// Array operation
mainCharacters.push("Tom Buchanan");
console.log(`Updated main characters:`, mainCharacters);

// Object operation
bookInfo.genre = "Novel";
console.log(`Updated book information:`, bookInfo);

// Output the initial and final values
console.log(`Favorite Book Title: ${favoriteBookTitle}`);
console.log(`Number of Pages: ${numberOfPages}`);
console.log(`Main Characters:`, mainCharacters);
console.log(`Book Information:`, bookInfo);
