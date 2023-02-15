// ** IF **

const password = 'p@ss';

if (password.length >= 12){
    console.log('that password is mighty strong');
}else if(password.lenght >= 8){
    console.log('that password is long enough');
}else{
    console.log('password is not long enough');
}

// - logical operators - OR || and AND &&

const password = 'p@ssword12';

if (password.length >= 12 && password.includes('@')){
    console.log('that password is mighty strong');
}else if(password.lenght >= 8 || password.includes('@') && password.length >= 5){
    console.log('that password is strong enough');
}else{
    console.log('password is not strong enough');
}


// - Logical NOT

let user = false;

if(!user){
    console.log('You must be loged in to continue')
}


// - break and continue

const scores = [50, 25, 0 ,30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue; // continue ignores everything that is below and returns to the top of the loop
    }

    console.log('your score: ', scores[i]);


    if (scores[i] === 100){
        console.log('congrats, you got the top score!');
        break;
    }

}