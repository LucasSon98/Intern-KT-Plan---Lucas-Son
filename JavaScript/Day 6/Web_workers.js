// Prgroms are by default single threaded, which means thay can only run one task at a time.
// A thread is a sequence of instructions that a program follows.
// This is why when a program is waiting for a long-running synchronous call to end, it can't do anything else.

// Workers allow us to run tasks in different threads along side our main code.
// To avoid a thread from altering the variables used by another thread
// the main code and worker code don't have access to each other's variables.
// Workers and the main code run in completely separate worlds, and only interact by sending each other messages.
// VERY IMPORTANT:
// In particular, this means that workers can't access the DOM (the window, document, page elements, and so on).

// There are three different types of workers:
// - dedicated workers
// - shared workers
// - service workers


// Example:

// Suppose we have two javascript files: main.js and generator.js
// We want a web page which is capable of generating a list of prime numbers by clicking a button
// main.js will be responsible of accessing and interacting with the DOW while generator.js of generating the prime numbers list.
// Here are the codes of each file:

// main.js

// Create a new worker, giving it the code in "generate.js"
const worker = new Worker('./generate.js');

// When the user clicks "Generate primes", send a message to the worker.
// The message command is "generate", and the message also contains "quota",
// which is the number of primes to generate.
document.querySelector('#generate').addEventListener('click', () => {
    const quota = document.querySelector('#quota').value;
    worker.postMessage({
        command: 'generate',
        quota,
    });
});

// When the worker sends a message back to the main thread,
// update the output box with a message for the user, including the number of
// primes that were generated, taken from the message data.
worker.addEventListener('message', (message) => {
    document.querySelector('#output').textContent = `Finished generating ${message.data} primes!`;
});

document.querySelector('#reload').addEventListener('click', () => {
    document.querySelector('#user-input').value = 'Try typing in here immediately after pressing "Generate primes"';
    document.location.reload();
});


// Explanation:

// - First, we're creating the worker using the Worker() constructor. We pass it a URL pointing to the worker script.
// - Next we add a click event handler to the "Generate primes" button. We send a message to the worker using worker.postMessage().
//   This message can take an argument, and in this case, we're passing a JSON object containing two properties:
//      - command: a string to be the message that the worker will receive.
//      - quota: the number of primes to generate.
// - Next, we add a message event handler to the worker. This is so the worker can tell us when it has finished, and pass us any resulting data.
//   Our handler takes the data from the data property of the message, and writes it to the output element.
// - Finally, we implement the click event handler for the "Reload" button.


//generator.js

// Listen for messages from the main thread.
// If the message command is "generate", call `generatePrimes()`
addEventListener("message", (message) => {
    if (message.data.command === 'generate') {
        generatePrimes(message.data.quota);
    }
});
  
// Generate primes (very inefficiently)
function generatePrimes(quota) {

    function isPrime(n) {
        for (let c = 2; c <= Math.sqrt(n); ++c) {
        if (n % c === 0) {
            return false;
            }
        }
        return true;
    }

    const primes = [];
    const maximum = 1000000;

    while (primes.length < quota) {
        const candidate = Math.floor(Math.random() * (maximum + 1));
        if (isPrime(candidate)) {
        primes.push(candidate);
        }
    }

    // When we have finished, send a message to the main thread,
    // including the number of primes we generated.
    postMessage(primes.length);
}

// The whole example is in the "dedicated worker example" folder

// generator.js is an example of a dedicated worker since it is being used by a single script instance


// ******* Shared Worker *****

// The SharedWorker interface represents a specific kind of worker that can be accessed from several browsing contexts, such as several windows, iframes or even workers.
// They implement an interface different than dedicated workers and have a different global scope, SharedWorkerGlobalScope.
// If SharedWorker can be accessed from several browsing contexts, all those browsing contexts must share the exact same origin (same protocol, host and port).

// Example: https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker