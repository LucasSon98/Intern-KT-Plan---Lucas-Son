// async is a keyword that can be put at the befining of a function to make it and asynchronous function.

async function myFunction() {
    // This is an async function
}

// await is a keyword put before a call to a function that returns a promise.
// This forces the code to wait for that called function to return a settled promise.
// Then, either the fulfilled or the rejected value will be returned.
// This, in some way, allows us to make asynchronous functions work as synchronous.
// await can only be used inside an async functino.

// Example:

async function fetchProducts() {
    try {
      // after this line, our function will wait for the `fetch()` call to be settled
      // the `fetch()` call will either return a Response or throw an error
      const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      // after this line, our function will wait for the `response.json()` call to be settled
      // the `response.json()` call will either return the parsed JSON object or throw an error
      const data = await response.json();
      console.log(data[0].name);
    }
    catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  
  fetchProducts();


// NOTE: despite the asynchronous functions fetch() and json() are working as synchronous thanks to await,
// we need to remember that fetchProducts(), function in which they are being called, is running asynchronously.
// Since json() needs the response from fetch() this is necessary. But thanks to async we can still run them asynchornously.

// We are also using try...catch blocks for error handling if an error object is returned by either fetch() of json()

// NOTE: We can't make fetchProducts to return a value in a conventional way, since async functions always return promise objects

// Example:

async function fetchProducts() {
    try {
      const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return data; // Here we are trying to return de JSON data
    }
    catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  
  const promise = fetchProducts();
  console.log(promise[0].name);   // "promise" is a Promise object, so this will not work

// However, we can get and use the returned data using the then() handler

promise.then((data) => console.log(data[0].name));