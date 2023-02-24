// variables & block scope

let age = 30; // this is a variable with global scope

if(true){
    let age = 40; // this is a variable with block or local scope. It only exists in the block.
    let name = 'shaun';
    console.log('inside 1st code block: ', age, name);

    if(true){ // this is a nested block
        let age = 50; // here we are creating another variable which only exists in this nested block
        console.log('inside 2nd code block: ', age, name);
    }
}

console.log('outside code block: ', age, name)

// the concept of scope works the same for const defined variables
// variables created with var statement are always global scope variables

// Example:

if (Math.random() > 0.5) {
  let x = 1;
  console.log(y); // This will return an error since y only exist in the else block
} else {
  let y = 2;
  console.log(x); // This will return an error since x only exist in the else block
} 
console.log(x); // This will return an error since x and y only exist in the if and else block respectively 

// However if we change the let statement with the var statement since all variables become global variables
// none of the console.log() will return an error.
// Note that variables might be undefined until the conditions in the if or else statements are met
// , but no error will be thrown.

if (Math.random() > 0.5) {
  var x = 1;
  console.log(y);
} else {
  var y = 2;
  console.log(x); 
} 
console.log(x);