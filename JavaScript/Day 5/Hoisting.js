// Hoisting is JavaScript's default behavior of moving declarations to the top.
// This is considered to be a feature of var declarations.
// Also, there is a set of 'HoistableDeclartion' which includes function, function*, async function, and async function* declarations
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.

// This allows the next examples to return the same result

// Example1:
var x; // Declare x
x = 5; // Assign 5 to x
console.log(x);

// Example2:
x = 5; // Assign 5 to x
console.log(x);
var x; // Declare x

// Note: we can't do this with let and const.
// Variables defined with let and const are hoisted to the top of the block, but not initialized.


// ------------------------------------------------------------------------------------------------

// ***** Strict Mode *****
// "use strict"; is a literal expression used to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.
// "use strict"; can be used in both global and local scope.
// For instance if we declere at the befinning of the code it will have global scope.
// But we could also declare it inside a function so it has local scope and stric mode is only applied inside that function.

// Example1:

"use strict";
x = 3.14;       // This will cause an error because x is not declared

myFunction();
function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}

// Example2:

x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}