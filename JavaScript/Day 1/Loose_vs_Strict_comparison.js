// - loose comparison

let age = 25;

console.log(age == 25);
console.log(age == '25'); // this will return true since javascript converts to numbers before comparing when using loose comparisons

// - strict comparison

console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');