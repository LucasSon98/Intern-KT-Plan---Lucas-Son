// Object literals -> Cobject initializer

const obj = {
  property1: value1, // property name may be an identifier
  2: value2, // or a number
  "property n": value3, // or a string
};

// Example

const obj = {
  property1: value1, // property name may be an identifier
  2: value2, // or a number
  "property n": value3, // or a string
};


// Using a constructor function

// 1 - Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter.
// 2 - Create an instance of the object with new.

function Car(make, model, year,owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

const myCar = new Car("Eagle", "Talon TSi", 1993, "Lucas Son");

// the property owner in the Car object could also be another object

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const rand = new Person("Rand McKinnon", 33, "M");
const car1 = new Car("Eagle", "Talon TSi", 1993, rand);

// ---- METHODS ----

// Object.create()

// it allows you to choose the prototype object for the object you want to create, without having to define a constructor function.

// Example:

// Animal properties and method encapsulation
const Animal = {
  type: "Invertebrates", // Default value of properties
  displayType() {
    // Method which will display type of Animal
    console.log(this.type);
  },
};

// Create new animal type called animal1
const animal1 = Object.create(Animal);
animal1.displayType(); // Logs: Invertebrates

// Create new animal type called fish
const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Logs: Fishes

// Object.keys(myObj)
// This method returns an array with only the enumerable own string property names ("keys") in the object myObj, but not those in the prototype chain.

// Example:

Object.keys(myCar); // returns: ['make', 'model', 'year', 'owner']
Object.keys(Car); // returns empty array 

// Object.getOwnPropertyNames(myObj)
//This method returns an array containing all the own string property names in the object myObj, regardless of if they are enumerable or not.

// Example:

Object.getOwnPropertyNames(myCar); // returns: ['make', 'model', 'year', 'owner']
Object.getOwnPropertyNames(Car); // returns: ['length', 'name', 'arguments', 'caller', 'prototype']



// Object.values()
// returns an array of a given object's own enumerable string-keyed property values.

// Example: 

Object.values(myCar); //returns: ['Eagle', 'Talon TSi', 1993, 'Lucas Son']
Object.values(Car); // returns empty array

// Object.entries()
// returns both propery keys and values as a set of paires key-value array ([key,value]) inside another array
Object.values(myCar); // returns [['make', 'Eagle'],['model', 'Talon TSi'],['year', 1993],['owner', 'Lucas Son']]

// ---------------------------------------------------------------------------------------------------------------------------------------



// Accessing Properties

// Dot notation
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

// Bracket notation
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;


// An object property name can be any JavaScript string or symbol, including an empty string.
// However, you cannot use dot notation to access a property whose name is not a valid JavaScript identifier.
// For example, a property name that has a space or a hyphen, that starts with a number, or that is held inside a variable can only be accessed using the bracket notation.
// This notation is also very useful when property names are to be dynamically determined, i.e. not determinable until runtime.

const myObj = {};
const str = "myString";
const rand = Math.random();
const anotherObj = {};

// Create additional properties on myObj
myObj.type = "Dot syntax for a key named type";
myObj["date created"] = "This key has a space";
myObj[str] = "This key is in variable str";
myObj[rand] = "A random number is the key here";
myObj[anotherObj] = "This key is object anotherObj"; // JavaScript calls the toString() method of anotherObj, and use the resulting string as the new key.
myObj[""] = "This key is an empty string";

console.log(myObj);
// {
//   type: 'Dot syntax for a key named type',
//   'date created': 'This key has a space',
//   myString: 'This key is in variable str',
//   '0.6398914448618778': 'A random number is the key here',
//   '[object Object]': 'This key is object anotherObj',
//   '': 'This key is an empty string'
// }
console.log(myObj.myString); // 'This key is in variable str'
console.log(myObj[str]);


// Nonexistent properties of an object have value undefined (and not null).

myCar.nonexistentProperty; // undefined

// ---------------------------------------------------------------------------------------------------------------------------------------

// ---- Comparing Objects -----

// Two distinct objects are never equal, even if they have the same properties. Only comparing the same object reference with itself yields true.

// Two variables, two distinct objects with the same properties
const fruit = { name: "apple" };
const fruitbear = { name: "apple" };

fruit == fruitbear; // return false
fruit === fruitbear; // return false

// Two variables, a single object
const fruit = { name: "apple" };
const fruitbear = fruit; // Assign fruit object reference to fruitbear

// Here fruit and fruitbear are pointing to same object
fruit == fruitbear; // return true
fruit === fruitbear; // return true

fruit.name = "grape";

// ---------------------------------------------------------------------------------------------------------------------------------------

// --- prototype property ---

// You can add a property to all objects created through a certain constructor using the prototype property.
// This defines a property that is shared by all objects of the specified type, rather than by just one instance of the object.

// The following code adds a color property to all objects of type Car, and then reads the property's value from an instance car1.

Car.prototype.color = "red";
console.log(car1.color); // "red"

// We can also add methods

Car.prototype.displayCar = function () {
    const result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
    console.log(result);
  };

// -- Object.prototype.constructor()

// The constructor data property of an Object instance returns a reference to the constructor function that created the instance object.
// Note that the value of this property is a reference to the function itself, not a string containing the function's name.

// Any object (with the exception of null prototype objects) will have a constructor property on its [[Prototype]].
// Objects created with literals will also have a constructor property that points to the constructor type for that object — for example, array literals create Array objects, and object literals create plain objects.

const o1 = {};
o1.constructor === Object; // true

const o2 = new Object();
o2.constructor === Object; // true

const a1 = [];
a1.constructor === Array; // true

const a2 = new Array();
a2.constructor === Array; // true

const n = 3;
n.constructor === Number; // true

// Assigning the constructor property to an object

const arr = [];
arr.constructor = String;
arr.constructor === String; // true
arr instanceof String; // false
arr instanceof Array; // true

const foo = new Foo();
foo.constructor = "bar";
foo.constructor === "bar"; // true

// etc.

// -- Object.prototype.hasOwnProperty()

// returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
// returns true if the specified property is a direct property of the object — even if the value is null or undefined.
// The method returns false if the property is inherited, or has not been declared at all.
// Unlike the in operator, this method does not check for the specified property in the object's prototype chain.

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// Expected output: true

console.log(object1.hasOwnProperty('toString'));
// Expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// Expected output: false

// `hasOwnProperty` will only return true for direct properties:
example.hasOwnProperty("prop"); // true
example.hasOwnProperty("toString"); // false
example.hasOwnProperty("hasOwnProperty"); // false

// The `in` operator will return true for direct or inherited properties:
"prop" in example; // true
"toString" in example; // true
"hasOwnProperty" in example; // true

// The method can be called on most JavaScript objects, because most objects descend from Object, and hence inherit its methods.
// For example Array is an Object, so you can use hasOwnProperty() method to check whether an index exists:

const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
fruits.hasOwnProperty(3); // true ('Orange')
fruits.hasOwnProperty(4); // false - not defined

// Objects created with Object.create(null)

// Objects created using Object.create(null) do not inherit from Object.prototype, making hasOwnProperty() inaccessible.

const foo = Object.create(null);
foo.prop = "exists";
foo.hasOwnProperty("prop"); // Uncaught TypeError: foo.hasOwnProperty is not a function

// The solutions in this case are the same as for the previous section: use Object.hasOwn() by preference, otherwise use an external object's hasOwnProperty()