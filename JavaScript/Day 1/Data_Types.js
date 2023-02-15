// ****** DATA TYPES ******

//String

let email = 'lson@itba.edu.ar';

console.log(email);

//string concatenation

let firstName = 'Brandon';
let lastName = 'Sanderson';

let full_Name = firstName + ' ' + lastName;
console.log(full_Name);

//getting characters

console.log(full_Name[2]);


//getting string length

console.log(full_Name.length);


// string methods 


console.log(full_Name.toUpperCase());

let result = full_Name.toLowerCase();
console.log(result, full_Name);

let index = email.indexOf('@'); // get index of a specific character
console.log(index);

result = email.lastIndexOf('n'); // last index of a particular character inside a string
console.log(result);

result = email.slice(0,6); // slice(a,b): slice from a to b
console.log(result);

result = email.substring(0,6); // very similar to slice. substring(a,b): from position a and how many characters to slice from that starting position
console.log(result);

result = email.replace('n','w'); // replace first time a character appears with another character
console.log(result);


// *** NUMBERS ***

let radius = 10;
const pi = 3.14;

console.log(radius, pi);
console.log(10 / 2);
result = radius % 3;

console.log(result);

result = pi * radius ** 2;
console.log(result);

likes = 10;
likes ++; // likes --
console.log(likes);

likes += 10;
console.log(likes);

likes -= 10;
console.log(likes);

likes *= 2;
console.log(likes);

likes /= 2;
console.log(likes);


// - NaN

console.log(5/ "hello");


// - Concatenate numbers to a string

result = 'the blog has ' + likes  + ' likes';
console.log(result);

// - template strings --> alllows to inject variables in a more efficient way

const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

result = 'the blog called ' + title + ' by ' + author + ' has ' + likes + ' likes'; 
console.log(result);

result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// *** UNDEFINED and NULL***


let age;
console.log(age, age + 3, `the age is ${age}`);

let age2 = null;
console.log(age2, age2 + 3, `the age is ${age2}`);



// *** BOOLEANS ***

console.log(true, false);


// - methods which return booleans

email = 'lson@itba.edu.ar';
let result = email.includes('@'); // checks if a character is in the string
console.log(result);

result = email.includes('!'); 
console.log(result);


let names = ['mario','luigi','toad'];
result = names.includes('luigi'); // can be used for looking up elements in an array
console.log(result);

age = 25;
console.log(age == 25);
console.log(age == 20);
console.log(age != 20);


let name = 'shaun';

console.log(name == 'shaun');
