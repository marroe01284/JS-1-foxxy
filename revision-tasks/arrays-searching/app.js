// Develop a User Management System
// Objective:
// Create a web application that allows users to manage a list of users, including adding, searching for, and updating user information. This task will focus on techniques to search for and manipulate data within arrays and objects, utilizing JavaScript and HTML.

// Requirements:
// HTML Structure:

// An input form for adding new users, including fields for the user's name, email, and role (e.g., Admin, User, Guest).
// A submit button to add the user to the list.
// An input field for searching users by name.
// A display area (e.g., <table> or <ul>) for listing all users, showing their name, email, and role.
// JavaScript Functionality:

// Use an array of objects to store user information. Each object should include properties for name, email, and role.
// Implement a function to add a new user to the array and update the display.
// Implement a function to search for users by name using array and string manipulation methods, displaying matching users.
// Include a feature to update the role of an existing user, demonstrating how to find and manipulate a specific object within the array.
// Detailed Instructions:
// Project Setup:

// Create an index.html file for the application's structure.
// Optionally, add a style.css file for styling your application.
// Create a script.js file to contain your application logic.
// Implementing JavaScript:

// Start by defining an empty array to hold user objects.
// For adding users, create a function that constructs a user object from form inputs and pushes it to the array. Then, refresh the displayed user list.
// To display users, iterate over the user array, dynamically creating HTML elements to list each user's information.
// For searching users, implement a function that filters the user array based on a search query and updates the display with the results.
// Implement functionality to update a user's role, which involves finding the specific user object in the array, modifying its role property, and updating the display.
// Enhancements and Challenges:

// Validate form inputs to ensure no duplicate email addresses are added.
// Implement persistent storage using localStorage to save and retrieve the user list across sessions.
// Add functionality to remove a user from the list.