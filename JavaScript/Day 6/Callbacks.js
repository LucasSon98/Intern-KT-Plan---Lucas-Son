// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
// Sometimes you would like to have better control over when to execute a function.
// Suppose you want to do a calculation, and then display the result.

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
let sum = num1 + num2;
return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);

// Here we are using to separate functions 'myCalculator' and 'myDisplayer' to add two numbers and display the result respectively.
// We could  instead make the 'myCalculator' functions display the result automatically after the calculation.

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
let sum = num1 + num2;
myDisplayer(sum);
}

myCalculator(5, 5);


// The problem with the first example above, is that you have to call two functions to display the result.
// The problem with the second example, is that you cannot prevent the calculator function from displaying the result.


// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished


// Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback),
// and let the calculator function run the callback after the calculation is finished.

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
let sum = num1 + num2;
myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// In the example above, myDisplayer is a called a callback function.
// It is passed to myCalculator() as an argument.
// Note that we don't use parenthesis when passing the callback function as an argument.


// Example:

// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById("demo").innerHTML = posNumbers;

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}

// In the example above, (x) => x >= 0 is a callback function.
// It is passed to removeNeg() as an argument.