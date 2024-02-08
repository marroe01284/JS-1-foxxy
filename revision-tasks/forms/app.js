// Build a Contact Form with Validation
// Objective:
// Develop a web application featuring a contact form that captures user input, validates the input according to specific rules, and displays a success or error message based on the validation results. This task is designed to teach handling forms in JavaScript, capturing user input, and implementing custom form validation.

// Requirements:
// HTML Structure:

// A form that includes fields for the user's name, email, subject, and message.
// Each field should have a corresponding label.
// A submit button to send the form.
// JavaScript Functionality:

// Prevent the default form submission to handle the data capture and validation with JavaScript.
// Implement validation rules, such as:
// Name: Must not be empty.
// Email: Must be a valid email format.
// Subject: Must not be empty and must have a minimum length of 5 characters.
// Message: Must not be empty and must have a minimum length of 10 characters.
// Display an error message next to any field that fails validation, specifying the reason for the error.
// If all fields pass validation, display a success message to the user.
// Detailed Instructions:
// Project Setup:

// Create an index.html file for the form's structure.
// Optionally, create a style.css file to style the form and validation messages.
// Create a script.js file for the form handling and validation logic.
// Implementing JavaScript:

// Attach an event listener to the form's submit event.
// When the form is submitted, use JavaScript to capture the input from each field.
// Check each input against the specified validation rules.
// If an input does not meet its validation rule, prevent the form from being submitted and display an appropriate error message.
// If all inputs are valid, prevent the default form submission and display a success message (e.g., "Thank you for contacting us!").
// Consider using regular expressions for email validation and other complex validation rules.
// Enhancements and Challenges:

// Implement real-time validation feedback as the user types or when each field loses focus.
// Customize the styling of error messages and the form field borders to visually indicate success or failure.
// Explore adding more complex validations, such as password strength indicators or matching password fields for account creation forms.
