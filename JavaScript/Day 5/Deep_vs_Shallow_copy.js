// ****** SHALLOW COPY ******

// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
// As a result, when you change either the source or the copy, you may also cause the other object to change too — and so, you may end up unintentionally causing changes to the source or copy that you don't expect.
// spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), Object.assign(), and Object.create() are built in object copy operations that create shallow copies

// Example of copying an array using spread syntax:

const arr = [1, 2, 3];
const arr2 = [...arr];

// Example of shallow copy:

let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];

let ingredients_list_copy = Array.from(ingredients_list);
console.log(JSON.stringify(ingredients_list_copy));
// ["noodles",{"list":["eggs","flour","water"]}]

ingredients_list_copy[1].list = ["rice flour", "water"];
console.log(ingredients_list[1].list);
// Array [ "rice flour", "water" ]
console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]

// ****************************************************************************************************************************************************************************************************

// Remember that spread syntax allows us to "spread" the elements of an array or any iterable objects.
// Example of spread syntax in functions:

function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction(...args);
// In the code above we are spreading the elements in the args list to take the place of each of the parameters of the myFunction function

// We can also create an object using spread syntax:

const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }


// ****************************************************************************************************************************************************************************************************


// ****** DEEP COPY ******

// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.
// As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too; that is, you won't unintentionally be causing changes to the source or copy that you don't expect.
// One way to make a deep copy of a JavaScript object, if it can be serialized, is to use JSON.stringify() to convert the object to a JSON string, and then JSON.parse() to convert the string back into a (completely new) JavaScript object


let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];
let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));

// Change the value of the 'list' property in ingredients_list_deepcopy.
ingredients_list_deepcopy[1].list = ["rice flour", "water"];
// The 'list' property does not change in ingredients_list.
console.log(ingredients_list[1].list);
// Array(3) [ "eggs", "flour", "water" ]


// NOTE: We can not make deep copies of non serializable objects (for example functions, Symbols, objects that represent HTML elements in the HTML DOM API, recursive data).
// REMEMBER: A serializable object is that which can be converted into a JSON string by calling the function JSON.stringfy()