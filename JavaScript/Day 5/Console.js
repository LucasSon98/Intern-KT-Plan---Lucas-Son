// The console object provides access to the browser's debugging console.
// The console object is a property of the window object.
// The console object is accessed with:
// window.console or just console
// The specifics of how it works varies from browser to browser, but there is a de facto set of features that are typically provided

// https://developer.mozilla.org/en-US/docs/Web/API/console

// ***** Methods ******

// - Text output
console.log(); // Outputs a message to the console
conosle.warn(); // Outputs a warning message to the console
console.error(); // Outputs an error message to the console
console.info(); // Outputs an informational message to the console
                // It allows to output multiple objects by listing them when calling the logging method
// Example
const car = "Dodge Charger";
const someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", someObject);

// - Styling console output
// We can use the %c directive to apply a CSS style to console output:

console.log(
    "This is %cMy stylish message",
    "color: yellow; font-style: italic; background-color: blue;padding: 2px"
  );

// We may use %c multiple times:

console.log(
    "Multiple styles: %cred %corange",
    "color: red",
    "color: orange",
    "Additional unformatted message"
  );

// There are many other usable properties. Check link in line 7

// - Using groups in the console

// You can use nested groups to help organize your output by visually combining related material.
// To create a new nested block, call console.group().
// The console.groupCollapsed() method is similar but creates the new block collapsed, requiring the use of a disclosure button to open it for reading.

// Example:
console.log("This is the outer level");
console.group("First group");
console.log("In the first group");
console.group("Second group");
console.log("In the second group");
console.warn("Still in the second group");
console.groupEnd();
console.log("Back to the first group");
console.groupEnd();
console.debug("Back to the outer level");


// - Timers

// You can start a timer to calculate the duration of a specific operation.
// To start one, call the console.time() method, giving it a name as the only parameter.
// To stop the timer, and to get the elapsed time in milliseconds, just call the console.timeEnd() method, again passing the timer's name as the parameter.
// Up to 10,000 timers can run simultaneously on a given page

// Example:

console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");


// - Stack traces

// The console object also supports outputting a stack trace; this will show you the call path taken to reach the point at which you call console.trace().

// Example:
function foo() {
    function bar() {
      console.trace();
    }
    bar();
  }
  
  foo();

// - Other methods

console.count(); // Logs the number of times that this particular call to count() has been called
console.clear(); // Cleas the console
