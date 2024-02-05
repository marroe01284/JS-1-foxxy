// Example: Significance of Parentheses in Operations and Functions
// Part 1: Order of Operations
// Parentheses are crucial in mathematical expressions to explicitly specify the order in which operations should be performed. Without them, expressions are evaluated according to standard operator precedence, which might not always align with the intended calculations.

let withoutParentheses = 10 + 2 * 3; // Multiplication before addition
console.log(`Without parentheses: ${withoutParentheses}`); // Outputs: 16

let withParentheses = (10 + 2) * 3; // Forces addition before multiplication
console.log(`With parentheses: ${withParentheses}`); // Outputs: 36

// In the first case, JavaScript follows the standard mathematical precedence, multiplying 2 * 3 before adding 10. In the second case, parentheses change the order, ensuring 10 + 2 is calculated first, then multiplied by 3.

// Part 2: Function Invocation and Grouping Expressions
// Parentheses are also used to invoke functions and to group expressions, further affecting how a program behaves.

function multiply(a, b) {
    return a * b;
  }
  
  let result = multiply(4, 5); // Parentheses invoke the function with arguments 4 and 5
  console.log(`Function invocation: ${result}`); // Outputs: 20
  
  let complexExpression = (multiply(10, 2) + 5) * 3;
  console.log(`Complex expression: ${complexExpression}`); // Outputs: 75
  

// In the multiply function example, parentheses are used to call the function and pass arguments to it. Without parentheses, multiply would refer to the function object itself, not the result of calling the function.

// The complexExpression demonstrates combining function invocation with mathematical operations, where parentheses ensure the correct order of operations: multiply(10, 2) is executed first, its result is then added to 5, and the total is finally multiplied by 3.



// ------ Explanation ------
// Order of Operations: Parentheses override the default precedence in mathematical expressions, allowing developers to control the calculation order explicitly.

// Function Invocation: Parentheses are used to call functions. Including arguments within the parentheses passes those arguments to the function, enabling dynamic operation and reuse of function logic.

// Grouping Expressions: In complex expressions, especially those combining multiple operations and function calls, parentheses are essential for ensuring the intended order of evaluation.

// This example highlights the importance of parentheses in JavaScript for controlling execution flow, both in arithmetic operations and function execution, showcasing their dual role in affecting the order of operations and enabling function calls.