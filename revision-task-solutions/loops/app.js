console.log("For Loop Example:");
// For Loop: Known number of iterations
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\nWhile Loop Example:");
// While Loop: Guessing game simulation
let guessedNumber = 3; // Initial wrong guess
const correctNumber = 7; // Predetermined correct number
while (guessedNumber !== correctNumber) {
    console.log(`Guess: ${guessedNumber} is incorrect. Try again.`);
    guessedNumber = 7; // Simulate correct guess
}
console.log(`Congratulations! You guessed the correct number: ${guessedNumber}`);

console.log("\nDo...While Loop Example:");
// Do...While Loop: Executes at least once
let counter = 0;
const maxCounterValue = 5;
do {
    counter++;
    console.log(`Counter is now at ${counter}.`);
} while (counter < maxCounterValue);

// Explanation
// for Loop: Ideal for situations where the total number of iterations is predetermined. It's structured with initialization, condition, and increment/decrement expressions.

// while Loop: Best used when the number of iterations is not known before the loop starts. The loop continues as long as the condition evaluates to true. In this task, it simulates a scenario where the loop repeats until a correct guess is made.

// do...while Loop: Ensures that the loop's body is executed at least once before checking the condition. It's particularly useful when the loop must execute at least once regardless of the condition, such as validating user input.