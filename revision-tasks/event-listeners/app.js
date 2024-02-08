// Create a To-Do List Application
// Objective:
// Build a simple To-Do List application where users can add tasks to a list and mark them as completed by clicking on them. This application will help you understand how to use event listeners to handle user interactions and how callback functions can manipulate the Document Object Model (DOM) based on those interactions.

// Requirements:
// HTML Structure:

// Create an HTML file with a basic structure.
// Include an input field for users to type their task.
// Add a button labeled "Add Task" next to the input field.
// Below the input and button, include an empty <ul> element where tasks will be listed.
// CSS (Optional):

// Style your application to make it visually appealing. (This step is optional and focuses more on the aesthetic aspect.)
// JavaScript:

// Add functionality to the "Add Task" button using an event listener that triggers a callback function when the button is clicked.
// The callback function should:
// Retrieve the value from the input field.
// Create a new <li> element containing the input field's value.
// Append the <li> element to the <ul> list.
// Clear the input field for the next task entry.
// Add another event listener to the <ul> element for the "click" event to handle task completion. Use event delegation to identify if a click event occurred on an <li> element.
// The callback function for marking a task as completed should:
// Toggle a CSS class on the clicked <li> element to visually indicate that the task is completed (e.g., strike through the text).
// Instructions:
// Start by creating the HTML structure with the specified elements.
// Optionally, add some CSS to style your page.
// Implement the JavaScript functionality:
// Use document.querySelector or document.getElementById to select HTML elements and assign them to variables.
// Use addEventListener to attach click events to the "Add Task" button and the <ul> list.
// Write callback functions for these event listeners to handle adding tasks and marking them as completed.
// Goals:
// Understand how to use addEventListener to manage user interactions.
// Learn how to manipulate the DOM by adding, removing, or modifying elements.
// Grasp the concept of callback functions and their role in asynchronous operations like event handling.