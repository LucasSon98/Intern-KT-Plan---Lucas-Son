// Promises are used to design asynchronous methods without using callbacks.
// It helps to avoid callback hells.

// A Promise is a JavaScript object which is capable of running a piece of code asynchronously and return the state of the process.
// For instance, the Promise object returns three possible states: "pending", "fulfilled" and "rejected",
// and three results: undefined, a result value and an error object.
// The promise object will return "pending" as long as the code inside the object is still running.
// This code inside the pending object is called the "Producing Code".
// When the producing code ends two things may happen:
// - If a successful condition is met, then the promise object will return a "fulfilled" state and a result value.
// - If the desired conditinos isn't met, then the promise object will return a "rejected" state and an error object.

// We can use the state of the promise object to run a desired function or piece of code, after the "Producing Code" finishes.
// The code which is called after the "producing code" inside de promise object finishes is refered to as the "Consuming Code".

// Here a syntax example of a Promise object: 

let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
    if (condition){
        myResolve(value); // when successful
    }else{
        myReject(error);  // when error
    }
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
);

// We can see that the promise object also uses callbacks.
// After the "Producing Code" finishes, if a desired condition is met then myReolve is callbacked and a "fulfilled" state is returned
// with the value passed as an argument to myResolve as the result property.
// If the desired condition is not met then myReject is callbacked and a "rejected" state will be returned with the result being the error object passed as an argument.
// If there is no desired condition that needs to be met we can omit using both parameters and just use one.

// Example:

let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
    console.log(value);
});

console.log("Started request...")

// In this example we are using the setTimeout function to delay the fulfilled state of the promise object in 3 seconds.
// During those 3 seconds the stet of the promise object will be "pending".
// When the 3 seconds pass myResolve is immediately called returning a "fulfilled" state and "I love You !!" as the result.
// Then it's handled to the then() method to print the result in the console.
// Note that this is asynchronous because "Started request" will be printed first and then after 3 seconds "I love You !!" will appear in the console.


// There are promise-based APIs which return Promise objects.
// The fetch API is an example. It allows us to get a file from an HTTP request.
// While the file is still being fetched a pending state will be returned.
// When the file is successfully fetched then the state will change to "fulfilled"

//  Example:

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");

// response is an object returned by the fetch API which contains the server's response.
// A value of 200 means that the request succeeded.


// **** Chaining Promises ****

// After we fetch the file we might want to see part of the content inside that file.
// Since in this example we are fetching a json file, we can use the json method of the response object to access the data.
// Though, it turns out that json() is also asynchronous. Therefore, it also returns a promise object.
// Here comes the concept of chaining promises where we can chain two or more asynchronous functions successively.

// Example:

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`); // This block returns an error if the request wasn't successful
    }
    return response.json(); // we are returning the promise object returned by response.json() and passing it to the second then()
  })
  .then((data) => {
    console.log(data[0].name); // if the data was successfully obtained as JSON then a specific value of it will be printed in the console
  });

// The example above is a convination of synchronose and asynchronous because the json() asynchronous operation won't begin until the fetch() method settles.

  
// **** Catching errors ****

// Something that could happen in the example above is that some of the asynchronous operations used fails.
// We can handle these errors by using the catch method, which will be called when an asynchronous operation fails.
// If we add catch() to the end of a promise chain, then it will be called when any of the asynchronous function calls fails.
// So we can implement an operation as several consecutive asynchronous function calls, and have a single place to handle all errors.

const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'); // This is a wrong URL so fetch() should fail

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

// In conclusion, we use then() to call handler functions when the asynchronous operation succeeds
// and catch() to call a handler function when the asynchronous operation fails.



// **** Combining multiple promises ****

// In the examples above we had to chain the promises because one needed to completed first before running the other one.
// We might wan't multiple promses, which are independent from each other, at the same time and get a response when all of them are settled.
// Promise.all() allows us to do this. It is a method which takes an array of promiss and returns a single promise:
// - "fulfilled" when and if all the promises in the array are fulfilled.
//   In this case, the then() handler is called with an array of all the responses, in the same order that the promises were passed into all().
// - "rejected" when and if any of the promises in the array are rejected. In this case, the catch() handler is called with the error thrown by the promise that rejected

// Example:

const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`)
  });

// There is a similar method, any(), which returns a fulfilled state if any of the array of promises is fulfilled
// or rejected if all of them are rejected.