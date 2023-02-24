// Copy by value is when we assign a variable 'x' to another variable 'y' and both share the same value but point to different memory addresses
// Copy by reference is when we assign a variable 'x' to another variable 'y' and both share the same value and point to the same memory addresses

// In JavaScript primitives are copied by value while objects are copied by reference.
// Therefore, it is guaranteed that every primitive value belongs to an unique memory location
// and the original value can't be mutated. Hence, we can do that with objects.

// Examples:

// primitive values

let n = 'hello';
let m = n; // hello

// we can get specific characters of a string as if it was a list, but we can't mutate it

console.log(n[0]): // h
n[0] = 'H'; // n will still be 'hello'

n = n + 'world'; // this is not mutating/changing n's value but rather assigning a new value to n's memory address
console.log(m); // still 'hello'

// NOTE: when we say mutate we mean changing the original value.


// objects

const a = {name: 'Kate'};
const b = a;

b.surname = 'Willis'; // this creates a new property 'surname' with value 'Willis'
b.name = 'Kevin'; // we are mutating the 'name' property

console.log(b);
console.log(a); // both will return the same result {name: 'Kevin', surnmae: 'Willis'} since they share the same memory address


// Instead, if we want to clone an object instead of coptying it using spread syntax

const a = {name: 'Kate'};
const b = {...a};

b.surname = 'Willis'; 
b.name = 'Kevin';

console.log(b); // {name: 'Kevin', surnmae: 'Willis'}
console.log(a); // {name: 'Kate'}