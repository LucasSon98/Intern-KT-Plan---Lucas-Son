// ******** Lexical Scoping ********

// Lexical Scoping describes how a parser resolves viarable names when functions are nested.
// Lexical referes to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available.
// Nested functions have access to variables declared in their outer scope.

// Example:

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();

function displayName2() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName2();
// In this example we can notice how the displayName inner function has access to the outer function's variables.
// This happens regardless if we use var, let or const statements. 
// This does not work the other way around. The outer function does not have access to the inner function's variables.

// The scope in the previous example is called "function scope".
// This is because the variable is accessible and only accessible within the function body where it's declared.
// For example, if I try to get access to those variables from the global scope or another function's scope I won't be able to do so.


// ******** Block Scoping ********

// The concept of block scoping was introduced in ES6 when JavaScript introduced the let and const declarations,
// which allow to create block-scoped variables. Blocks wrapped in curly braces like those we use in if, else if and else blocks.
// This can not be done with var.
// ** Check Block_Scope.js from Day 1 to see examples.


// ******** Closure ********

// A closure is the combination of a function and the lexical environment within which that function was declared.
// Closures are created every time a function is created, at function creation time.
// To put it in simple words this means that whenever we create a function it will take all the variables from the outer funcions as its own.
// Technically speaking, we say that the inner function mantains a reference to its lexical environment.

// Example 1:

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

// In this example we are returning the inner funciton 'displayName' to the variable 'myFunc'.
// Therefore, 'myFunc' becomes a reference to the instance of the 'displayName' function, which is created when 'makeFunc' is run.
// When 'myFunc' is invoked "Mozilla" will be shown in the console, which means myFunc has in some way access to the variable 'name'.
// This is thanks to the concept of closure.
// In consequence, myFunc is not only a reference to the function 'displayName' but to the variables inside that function's lexical environment too (indirectly).
// Strictly speaking, 'myFunc' is not a reference to those variables. The one which has a reference to those variables is the inner function.
// We can think it as a chain of references. 'myFunc' has access to 'name' because 'displayName' has direct access to it.
// All these connections make up a closure


// Example 2:

function makeAdder(x) {
    return function (y) {
      return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

// What we can see in this example is that the lexical environment is not only made of declared variables.
// The parameter 'x' of the function 'makeAdder' is also part of the inner funciton's lexical environment.
// Now, what is interesting from this example is that both 'add5' and 'add10' form two different closures as different arguments are passed to 'makeAdder'.
// They share the same function body definition, but store different lexical environments.
// In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.
// As a consequence, we say that 'makeAdder' is a function factory.

// A practical use of this would be using buttons in a web page to trigger both functions.
// One button which allows you to invoke add5 and another to invoke add10.



// ******** Emulating private method with closures ********

// Languages such as Java allow you to declare methods as private, meaning that they can be called only by other methods in the same class.
// closures allow us to do the same without using classes.

// Example 3:

const counter = (function () {
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment() {
        changeBy(1);
      },
  
      decrement() {
        changeBy(-1);
      },
  
      value() {
        return privateCounter;
      },
    };
})();
  
console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.

// In this example, we are passing an anonymous function to 'counter' which is executed as soon as it has been defined.
// This is also called IIFE (Immediately Invoked Function Expression).
// Whithin the body of the IIFE there are private and public elements.
// The private elements are the variable 'privateCounter' and the function 'changeBy'.
// This means we can't access either of these private members from outside the anonymous function.
// The public elements are the 'increment', 'decrement' and 'value' functions,
// which have access to the private elements thanks to the lexical scoping, forming closures that share the same lexical environment.

// Similarly to Example 2 we can create to completely independent counters with their own lexical environment.

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.



// ******** Closure scope chain ********

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20