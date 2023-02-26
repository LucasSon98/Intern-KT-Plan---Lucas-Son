// Events are 'things' that happen in the system you are programming — the system produces (or "fires") a signal of some kind when an event occurs,
// and provides a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs.
// Events are fired inside the browser window, and tend to be attached to a specific item that resides in it.
// This might be a single element, a set of elements, the HTML document loaded in the current tab, or the entire browser window.
// There are many different types of events that can occur:

// - The user selects, clicks, or hovers the cursor over a certain element.
// - The user chooses a key on the keyboard.
// - The user resizes or closes the browser window.
// - A web page finishes loading.
// - A form is submitted.
// - A video is played, paused, or ends.
// - An error occurs.

// More event references at https://developer.mozilla.org/en-US/docs/Web/Events

// We can attach these events to event handlers. An event handler is a block of code which reacts to an event.
// Associated to an event handler there is an event listener. They are sometimes used indifferently.
// However, strictly speaking the listener is in charge of detecting aa particular event happening
// and the handler is the one which is the code that runs in response to that event.

// To create event handlers we use addEventListener(), which is a method of objects that can fire events


//Example:

// HTML code
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<body>

    <button>Change color</button>
    <script>
    {/* JavaScript code */}
        const btn = document.querySelector("button");

        function random(number) {
        return Math.floor(Math.random() * (number + 1));
        }

        function changeBackground() {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`; // Random RGB color generator
        document.body.style.backgroundColor = rndCol; // we are assiging that color to the page background
        }

        btn.addEventListener("click", changeBackground);
    </script>

    
    
</body>
</html>

// The addEventListener() method consists of two parameters: an event triggered by the object
// and the block of code or function to be run as a response.
// NOTE: buttons can trigger other events such as "mouseover" and "keydown".


// **** Removing event handlers ****

// There are two ways of removing event handlers.
// The first one is using the removeEventListener() method, which is used as follows:

btn.removeEventListener("click", changeBackground);

// Here we are removing the event hangler created in the example above

// The other way is passing an AbortSignal to addEventListener().
// We can then call the abort() method to remove the event handler.
// Example:

const controller = new AbortController();

btn.addEventListener(
  "click",
  () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal } // here is the abort signal
); // pass an AbortSignal to this handler

controller.abort(); // removes any/all event handlers associated with this controller


// **** Adding multiple listeners for a single event ****

// We can provide multiple handlers to a single event creating multiple listeners.

myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);


// **** Event handler properties ****

// Objects (such as buttons) that can fire events also usually have properties whose name is on followed by the name of the event.
// For example, elements have a property onclick. To listen for the event, we can assign the handler function to the property.

// Example:

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;

// With event handler properties, we can't add more than one handler for a single event. 


// **** Event objects ****

// Event objects refer to the element which is responsible for triggering the event we are listening.
// It is automatically passed to event handlers and allows us to have access to the element's features and information.
// They are called under the names of event, evt or e.

// Example:

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) { // Here we are specifying we want the event object to be a parameter of our function
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = rndCol; // Here we are accessing the button's background color and assigning it an rgb value
  console.log(e);
}

btn.addEventListener("click", bgChange);

// The target property of the event object is always a reference to the element the event occurred upon.




// **** Preventing default behavior ****

// Sometimes, you'll come across a situation where you want to prevent an event from doing what it does by default.
// The most common example is that of a web form, for example, a custom registration form. When you fill in the details and click the submit button,
// the natural behavior is for the data to be submitted to a specified page on the server for processing, and the browser to be redirected to a "success message" page of some kind.

// The trouble comes when the user has not submitted the data correctly
// as a developer, you want to prevent the submission to the server and give an error message saying what's wrong and what needs to be done to put things right.

// Example:

<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<body>
    <form>
        <div>
            <label for="fname">First name: </label>
            <input id="fname" type="text" />
        </div>
        <div>
            <label for="lname">Last name: </label>
            <input id="lname" type="text" />
        </div>
        <div>
            <input id="submit" type="submit" />
        </div>
    </form>
    <p></p>

    <script>
        const form = document.querySelector("form");
        const fname = document.getElementById("fname");
        const lname = document.getElementById("lname");
        const para = document.querySelector("p");

        form.addEventListener("submit", (e) => {
            if (fname.value === "" || lname.value === "") {
                e.preventDefault();
                para.textContent = "You need to fill in both names!";
            }
        });
    </script>
</body>
</html>

// In this example we are checking if the first name and last name input by the user are empty or not.
// This is triggered when the submit event happens.
// If any of the fields was empty we ouptput a text warning the user.
// We prevent we default behaviour of the event by using the preventDeafult() method of the event object.



// **** Event bubbling ****

// Lets suppose we have the next html code

const x = 0; // Ignore this line

<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<body>
    <div id="container">
        <button>Click me!</button>
    </div>
    <pre id="output"></pre>

    <script>
        const output = document.querySelector("#output");
        function handleClick(e) {
            output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
        }

        const container = document.querySelector("#container");
        const button = document.querySelector("button");

        document.body.addEventListener("click", handleClick);
        container.addEventListener("click", handleClick);
        button.addEventListener("click", handleClick);
    </script>
</body>
</html>

// In the example above we have a button element inside a div element inside the body.
// Hence body is the parent of div and div is the parent of button.
// We say that button is the innermost element.
// The JavaScript code is printing the tag name of each element when they trigger a click event.

// What ends up happening is that since the button element is nested inside the div element, which is also nested inside the body,
// by just clicking the button element all the parent elements will also trigger that event.
// It starts from the innermost element, in this case the button element, and it propagates all the way up to the outmost element, being this the body.
// Then, it makes sense that this shows up in the web page:

// You clicked on a BUTTON element
// You clicked on a DIV element
// You clicked on a BODY element

// There might be cases where we don't want this to happen.
// We use the stopPropagation() method of event objects to preven this.

// Example:

const output = document.querySelector("#output");
function handleClick(e) {
    e.stopPropagation();
    output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);


// Here we changed the javascript code in the previous example and adde the stopPropagation() method
// By doing this only "You clicked on a BUTTON element" will show up when the button is clicked.
// Also, "You clicked on a DIV element" will show up only when we click somewhere else at the same level as the button.
// Finally, when we click anywhere else the "You clicked on a BODY element" will be output.


// We can reverse the order in which the nested elements are triggered by an event.
// Meaning reversing the same behaviour seen with event bubbling.
// This is called event capture and by default it is disabled.
// To enable it we have to pass the capture option in addEventListener().

// Example:

const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick, { capture: true });
container.addEventListener("click", handleClick, { capture: true });
button.addEventListener("click", handleClick);

// This is example is the same as the previous ones, only changing that we have passed the capture option to the body and div elements.
// The output on clicking the button will be:

// You clicked on a BODY element
// You clicked on a DIV element
// You clicked on a BUTTON element

// We can see it is the opposite of what we saw with the event bubbling example


// **** currentTarget vs target ****

// Notice that in the latest examples we have used the 'currentTarget' property rather than 'target' to refer to the event object feature.
// The difference is that currentTarget refers to the element that is being passed to the event handler rather than the element which is triggering the event being listened.
// Hence, in the previous example, if we used 'triger' instead we would be only refering to the button, which is the responsible for generating the click event.

const output = document.querySelector("#output");
function handleClick(e) {
    output.textContent += `You clicked on a ${e.target.tagName} element\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);

// Therefore, the output being:

// You clicked on a BUTTON element
// You clicked on a BUTTON element
// You clicked on a BUTTON element


// **** Event delegation ****

// It is important to state this difference so we can approach the desired result in the propper way.

// This can be used when want multiple elements, which are capable of generating the same event, nested inside a parent element to trigger the same event handler.
// Instead of assigning the same event handler to each inner element, we can just assign the event handler to the parent elemet and use the 'target' property
// so that only the element which triggered the event calls the event handler. This is what we call event delegation

// Example:

<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- This is the css to set the size and position of the tiles -->
    <style>
        .tile {
            height: 100px;
            width: 25%;
            float: left;
        }
    </style>
</head>
<body>
    <div id="container">
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
    </div>

    <script>
        function random(number) {
            return Math.floor(Math.random() * number);
        }

        function bgChange() { // random color generator
            const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
            return rndCol;
        }

        const container = document.querySelector("#container");

        container.addEventListener(
            "click",
            (event) => (event.target.style.backgroundColor = bgChange()) // set random color to the tile when it is clicked
        );
    </script>
    
</body>
</html>

// In this example we have multiple div elements as tiles inside a parent div which id is "container".
// Each tile is capable of triggering a click event.
// We have a javascript code which generates a random color and we want to assign that color to any tile which is clicked.
// So, instead of assigning the event handler to every tile, we have assigned it to the parent tile
// and used the target property of the event object to only change the background color of the tile that was clicked.

