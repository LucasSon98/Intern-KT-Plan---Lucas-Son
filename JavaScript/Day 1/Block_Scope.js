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