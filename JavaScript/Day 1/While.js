// ** WHILE LOOP **

const names = ['shaun', 'mario', 'luigi'];
let i = 0;

while(i < 5){
    console.log('in loop: ', i);
    i++;
}

i = 0;

while(i < names.length){
    console.log(names[i]);
    i++;
}

i = 5;

do{
    console.log('val of i is: ', i);
    i++;
} while(i < 5); // Here we are forcing a block to run at least once despite meeting the finish condition 


const age = 23;

if (age > 20){
    console.log('you are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li','yoshi'];

if(ninjas.length > 3){
    console.log("that's a lot of ninjas")
}