// *** TYPE CONVERSION ***

// - explicit type convertion --> it can also be implicit. When doing loose comparisons is an example of implicit conversion since js automaticall converts the string '3' to a 3 number for example.

let score = '100';
console.log(score + 1);
console.log(typeof score);

score = Number(score);
console.log(score + 1);

console.log(typeof score);

let result = 'hello';
console.log(result);

result = Number(result);
console.log(result);

score = String(score);
console.log(score, typeof score);


result = Boolean(0);
console.log(result, typeof result)

result = Boolean(1);
console.log(result, typeof result)

result = Boolean('sd');
console.log(result, typeof result)

result = Boolean('');
console.log(result, typeof result)
