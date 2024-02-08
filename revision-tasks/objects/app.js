// Build a Personal Library Management System Using POJOs
// Objective:
// Develop a web application to manage a personal book library, allowing users to add books with detailed information, display a list of books, and update the status (read or not read) of each book. This task emphasizes understanding Plain Old JavaScript Objects (POJOs), properties, and methods, as well as accessing and modifying object data.

// Requirements:
// HTML Structure:

// An input form for adding new books, with fields for the book's title, author, number of pages, and a checkbox for whether the book has been read.
// A submit button to add the book to the library.
// A <div> or <table> element to display the library's books.
// JavaScript Functionality:

// Use POJOs to create book objects with properties for title, author, pages, and read status.
// Implement a function to toggle the read status of a book.
// Maintain the library of books in an array.
// Upon adding a book, refresh the displayed list to include all books with their read status.
// Add a button for each book to toggle its read status, reflecting the change in both the array and on the display.
// Detailed Instructions:
// Project Setup:

// Create index.html for your application's structure.
// Optionally, create style.css for styling.
// Create script.js for your application logic.
// Implementing JavaScript:

// Instead of using a class or constructor function, define a function that creates and returns a book object (POJO) with title, author, pages, and read properties, and a toggleRead method.
// Initialize an empty array to hold your library books.
// Write a function to gather user input, create a new book object, and add it to the library array.
// Implement a function to iterate over the library array, displaying each book's details on the page. This should include creating a button to toggle the book's read status.
// Attach an event listener to the form's submit button to process adding a new book and refreshing the displayed book list.
// Ensure there are event listeners for the read status toggle buttons of each book.
// Optional Challenges:

// As an optional challenge, refactor your POJO creation to use a class or constructor function.
// Explore implementing local storage to persist library data across browser sessions.