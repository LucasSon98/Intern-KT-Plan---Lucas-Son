// ******  FUNCTIONS ******

// funciton declaration --> allows us to put the function anywhere in the code and call it anywhere too
function greet(){
    console.log('hello there');
}

// greet();

// function expresiion --> stores to a variable. The function must be before you call it.
const speak = function(name = 'luigi'){
    console.log(`good day ${name}`);
};

speak('mario');
speak();

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    console.log(area);

    return area;
}

const a = calcArea(5);
console.log(a);

// Another way of creating functions. Arrow functions

const calcArea = (radius) =>{
        let area = 3.14 * radius**2;
        console.log(area);
    
        return area;
    }


const a = calcArea(5);
console.log(a);

// arrow function when we only have one argument and want to return something specific

const calcArea = radius => 3.14 * radius**2;


const a = calcArea(5);
console.log(a);



const greet = () => 'hello world';
const result = greet();
console.log(result);



// callbacks and foreach

const myFunc = (callbackFunc) => {

    let value = 50;
    callbackFunc(value);
};

// The function myFunc will receiva another function as argument
// Now we are passing a functino to myFunc by directly declaring it as argument

myFunc(function(value){
    console.log(value);
});

// we are passing a function to another function
// Another way to write the above

const myFunc = (callbackFunc) => {

    let value = 50;
    callbackFunc(value);
};


const log = function(value){
    console.log(value);
};

myFunc(log);

// Example: 
// The following is an example where a function named map receives as argument a function (f) and an array (a).
// The function will create an empty array with the same length as a and will fill it with the cubic value of
// each element in a. The cubic value is obtained with the f function

function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const f = function (x) {
    return x * x * x;
  };
  
  const numbers = [0, 1, 2, 5, 10];
  const cube = map(f, numbers);
  console.log(cube);


let people = ['mario','luigi','ryu','shaun','chun-li']

const logPerson = (person,index) =>{
    console.log(`${index} - hello ${person}`)
}

people.forEach(logPerson); // here we are passing directly a function

people.forEach( (person,index) => {  // forEach iterates through the diferent elements in an array. Here we are using it to perform a function for each element in the array
    console.log(person,index);
});


// get a reference to the 'ul'

const ul = document.querySelector('.people');

const people = ['mario','luigi','ryu','shaun','chun-li'];

let html = ``;

people.forEach(function(person){
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
