// The eval() function evaluates JavaScript code represented as a string and returns its completion value.

console.log(eval('2 + 2'));
// Expected output: 4, argument is a string primitive

console.log(eval(new String('2 + 2')));
// Expected output: 2 + 2, argument is a string object

console.log(eval('2 + 2') === eval('4'));
// Expected output: true

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// Expected output: false


// In strict mode, declaring a variable named eval or re-assigning eval is a SyntaxError.
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode


// Direct and indirect eval

// methods to invoke indirect eval


// Indirect call using the comma operator to return eval
(0, eval)("x + y");

// Indirect call through optional chaining
eval?.("x + y");

// ***********************************************************************************************************************************************************************************

// optional chaining

// The optional chaining (?.) operator accesses an object's property or calls a function.
// If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

// Example:

const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

const dogName = adventurer.cat?.name;
console.log(dogName);
// Expected output: Dinah

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined

// ***********************************************************************************************************************************************************************************

// Indirect call using a variable to store and return eval
const geval = eval;
geval("x + y");

// Indirect call through member access
const obj = { eval };
obj.eval("x + y");


// Indirect eval works in the global scope rather than the local scope, and the code being evaluated doesn't have access to local variables within the scope where it's being called.
// Example:
function test() {
    const x = 2;
    const y = 4;
    // Direct call, uses local scope
    console.log(eval("x + y")); // Result is 6
    console.log(eval?.("x + y")); // Uses global scope, throws because x is undefined
}



// Indirect eval would not inherit the strictness of the surrounding context, and would only be in strict mode if the source string itself has a "use strict" directive.

function strictContext() {
    "use strict";
    eval?.(`with (Math) console.log(PI);`);
  }
  function strictContextStrictEval() {
    "use strict";
    eval?.(`"use strict"; with (Math) console.log(PI);`);
  }
  strictContext(); // Logs 3.141592653589793
  strictContextStrictEval(); // Throws a SyntaxError because the source string is in strict mode

// On the other hand, direct eval inherits the strictness of the invoking context.
function nonStrictContext() {
    eval(`with (Math) console.log(PI);`);
  }
  function strictContext() {
    "use strict";
    eval(`with (Math) console.log(PI);`);
  }
  nonStrictContext(); // Logs 3.141592653589793
  strictContext(); // Throws a SyntaxError because it's in strict mode



// var-declared variables and function declarations would go into the surrounding scope if the source string is not interpreted in strict mode — for indirect eval, they become global variables.
// If it's a direct eval in a strict mode context, or if the eval source string itself is in strict mode, then var and function declarations do not "leak" into the surrounding scope.
// Example:

// Neither context nor source string is strict,
// so var creates a variable in the surrounding scope
eval("var a = 1;");
console.log(a); // 1
// Context is not strict, but eval source is strict,
// so b is scoped to the evaluated script
eval("'use strict'; var b = 1;");
console.log(b); // ReferenceError: b is not defined

function strictContext() {
  "use strict";
  // Context is strict, but this is indirect and the source
  // string is not strict, so c is still global
  eval?.("var c = 1;");
  // Direct eval in a strict context, so d is scoped
  eval("var d = 1;");
}
strictContext();
console.log(c); // 1
console.log(d); // ReferenceError: d is not defined

// let and const declarations within the evaluated string are always scoped to that script.


// ***********************************************************************************************************************************************************************************

// Do NOT use eval()
// Executing JavaScript from a string is an BIG security risk.

// With eval(), malicious code can run inside your application without permission.

// With eval(), third-party code can see the scope of your application, which can lead to possible attacks.

// ***********************************************************************************************************************************************************************************

// More details on ways to optimize the use of the eval function, specially the indirect eval and examples of it:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval