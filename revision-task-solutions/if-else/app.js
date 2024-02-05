// User input simulation
let userAnswer = "Lyon"; // Simulated answer to the quiz question

// Quiz question and correct answer
const correctAnswer = "Paris";
const question = "What is the capital of France?";

// Conditional logic to determine the output based on the user's answer
if (userAnswer === correctAnswer) {
  console.log("Congratulations! Your answer is correct.");
} else if (userAnswer === "Lyon") {
  console.log("Lyon is a beautiful city, but not the capital. The correct answer is Paris.");
} else {
  console.log("Unfortunately, that's not correct. The capital of France is Paris.");
}

// Output: Depending on the value of `userAnswer`, one of the above messages will be logged to the console.

// Explanation
// Simulating User Input: In this task, the userAnswer variable simulates user input, which allows you to test the program's logic without needing to collect real-time input from the user.

// Conditional Logic: The use of if/else statements enables the program to respond differently based on the user's answer. This demonstrates the core concept of conditional logic, where the code execution path changes based on certain conditions.

// Custom Responses: By including an else-if condition, the program provides a more personalized response for specific answers, showcasing how conditional logic can be used to handle a variety of cases in a more detailed and user-friendly manner.

// User preferences
let preferredGenre = "fiction";
let availableReadingTime = 5; // in hours

// Book recommendations
const bookRecommendations = [
  { title: "The Great Gatsby", readingTime: 5, genre: "fiction" },
  { title: "Sapiens", readingTime: 9, genre: "non-fiction" },
  { title: "Harry Potter and the Sorcerer's Stone", readingTime: 6, genre: "fantasy" },
  { title: "Norse Mythology", readingTime: 4, genre: "fantasy" },
  { title: "Blink", readingTime: 7, genre: "non-fiction" },
  { title: "The Alchemist", readingTime: 4, genre: "fiction" }
];

// Decision logic
let recommendation = '';

for (let book of bookRecommendations) {
  if (book.genre === preferredGenre && book.readingTime <= availableReadingTime) {
    recommendation = `We recommend "${book.title}" which should be a great fit for your ${availableReadingTime} hours available.`;
    break;
  }
}

if (!recommendation) {
  recommendation = "We couldn't find a suitable book based on your preferences and available time.";
}

// Output
console.log(recommendation);

// Explanation
// User Preferences: Variables are set up to capture the user's genre preference and available reading time, simulating a basic user input scenario.

// Book Recommendations: An array of objects represents the available books, each with a title, an estimated reading time, and a genre. This simulates a database of books from which to recommend.

// Decision Logic: The program iterates over the book recommendations and uses if-else statements to find a book that matches the user's genre preference and fits within their available reading time. This demonstrates the use of conditional logic to make decisions.

// Output: The program logs a recommendation or a message indicating that no suitable book was found, demonstrating how to provide feedback based on the logic's outcome.
