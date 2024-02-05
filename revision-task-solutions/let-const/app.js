//#region Task Sample Solution Explanation
// let for Cart Items: The cartItemCount variable uses let because the number of items in a shopping cart can change as users add or remove books.

// const for Fixed Values and Settings: The BOOK_PRICE variable is declared with const because the price of a book does not change once set. Similarly, storeSettings is declared with const because the reference to the settings object does not change, even though its properties (theme, currency) can be updated to reflect user preferences or other changes. Note the SNAKE_CASE variable naming style is commonly used for const variables as it is easy to visually show it is a constant variable

// Immutable vs. Mutable: This example highlights the difference between the immutability of const variables (which cannot be reassigned) and the mutability of their content (e.g., object properties), demonstrating best practices for managing application state in a dynamic web environment like a bookstore website.
//#endregion

// Variable declarations
let cartItemCount = 0; // Mutable variable for cart items count
const BOOK_PRICE = 20; // Constant book price, immutable
const storeSettings = { theme: "light", currency: "USD" }; // Store settings object

// Simulate adding books to the cart
console.log(`Initial Cart Item Count: ${cartItemCount}`);
cartItemCount += 3; // Adding three books to the cart
console.log(`Updated Cart Item Count: ${cartItemCount}`);

// Attempting to modify BOOK_PRICE would result in an error if uncommented
// BOOK_PRICE = 25; // This line, if uncommented, would cause a TypeError

// Modifying a property of a const object
console.log(`Initial Store Theme: ${storeSettings.theme}`);
storeSettings.theme = "dark"; // Changing the store theme
console.log(`Updated Store Theme: ${storeSettings.theme}`);

// Output: Demonstrating final states
console.log(`BOOK_PRICE remains unchanged: $${BOOK_PRICE}`);
console.log(`Store Settings after modification: `, storeSettings);
