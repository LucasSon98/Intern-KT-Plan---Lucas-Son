// *** ARRAYS ***

let ninjas = ['shaun','ryu','chun-li'];
console.log(ninjas[1]);

ninjas[1] = 'ken';
console.log(ninjas[1]);


let ages = [20,25,30,35];
console.log(ages[2]);

let random = ['shaun','crystal', 30, 20];
console.log(random);

console.log(ninjas.length);


// - Array methods

let result = ninjas.join(','); //concatenates the strings with a ,
console.log(result);

result = ninjas.indexOf('chun-li');
console.log(result);

result = ninjas.concat(['ken','crystal']); // concatenate arrays
console.log(result);


result = ninjas.push('ken'); // it alters the array. It adds a value and returns the length of the new array
console.log(result);
console.log(ninjas);

result = ninjas.pop(); // eliminates the last value
console.log(result);