// ******* Synchronous programming *******

// Synchronous programming is when a program is designed to be run each line at a time.
// Therefore, before going to the next line we need the current line to finish running.
// The order in which each action is run is the same as they are called.
// The problem with synchronous programming is that it is vulnerable to inefficient algorithms
// which can signifantly increase the running time. Since each function runs once at a time,
// while this long-running functions are being executed nothing else can be done in the meanwhile.


// ******* Asynchronous programming *******

// Asynchronous programming is used to solve the problems stated above, allowing to emprove performance.
// setTimeout() and setInterval() are two commonly used functions for asynchronous programming.
// Both are designed to run functions after a given time, setInterval() will do it periodically,
// regardless if there is another function already being run.
// We can see asynchronous programming as a way of running functions in parallel.

// Example 1:

setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}

// In the example above we are passing the function myFunction as a callback to setTimeout()
// which will run myFunction after 3000 milliseconds


// Example 2:

function display(){
    console.log("Timer displayed after 1 second")
}

setTimeout(display, 1000)
console.log("One")
console.log("Two")

// In this example, despite the function setTimeout() is called before the console logs
// the function display won't be executed before 1 second pass. Therfore, "One" and "Two"
// will be printed before "Timer displayed after 1 second" appears in the console.