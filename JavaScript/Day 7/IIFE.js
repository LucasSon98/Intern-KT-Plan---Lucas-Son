// Immediately Invoked Function Expresison or Self-Executing Anonymous Function
// It is a JavaScript funciton that runs as soon as it is defined.


// ***** Syntax *****

(function () {
  // …
})();

(() => {
  // …
})();

(async () => {
  // …
})();


// The use of IIFEs is to avoid poluting the global scopoe with unnecessary variables.
// We keep all the variables declared inside the IIFE's lexical scope and allow a piece of code to run
// automatically without having to assign it a name. This last propery comes usefull when we need to run
// some initiation code that we don't need to use again.

// Example:

(() => {
    // some initiation code
    let firstVariable;
    let secondVariable;
  })();
  
  // firstVariable and secondVariable will be discarded after the function is executed.




// **** The module pattern ****

// The Module pattern is used to mimic the concept of classes (since JavaScript doesn’t natively support classes)
// so that we can store both public and private methods and variables inside a single object — 
// similar to how classes are used in other programming languages like Java or Python.

// Example:

const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  // privateCounter and changeBy are private elements that can't be accessed from the global scope
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
    // increment, decrement and value are public elements that can be accessed as methods.
    // these are the ones which have access to the private elements
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.

// NOTE: counter is not exposed to the global scope. This means we can't invoke counter again to create new instances of it.
//       This prevents us of having multiple instances of the same function floating aroung, polluting our environment and causing confusions.


// **** The revealing module pattern ****

// If we intentionally want to create a module pattern which can create multiple instances
// then we need to use functino declaration

const makeCounter = function () {
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
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.

// counter1 and counter2 are two indpendent instances of makeCounter with their own lexical scope.
// Therefore, we say that makeCounter is a function that is exposed to global scope.