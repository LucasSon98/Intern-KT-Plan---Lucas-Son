// ****** Primitive Data Types *******

// In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.
// There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol and null.
// All primitives are immutable; that is, they cannot be altered.
// It is important not to confuse a primitive itself with a variable assigned a primitive value.
// The variable may be reassigned to a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.
// The language does not offer utilities to mutate primitive values.

// ****** Complex Data Types *******

// All primitive types, except null and undefined, have their corresponding object wrapper types, which provide useful methods for working with the primitive values.
// These object wrappers are: Boolean, Number, BigInt, String and Symbol.

// Example string primitive vs String object

const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"

// Sometimes, JS automatically wrap the string primitive into an object to call a specific methor or property

//String primitives and String objects also give different results when using eval().
// Primitives passed to eval are treated as source code; String objects are treated as all other objects are, by returning the object. For example:

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"