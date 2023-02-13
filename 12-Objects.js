// ****** OBJECTS *******

// Objects are made of properties (variables) and methods (functions)

let user = {
    name: 'crystal', // key: value
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules','10 things to make with marmite']
};

console.log(user);
console.log(user.name); // calling a value

user.age = 35; // updating a value
console.log(user.age);


console.log(user['name']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);


// - object methods

// let user = {
//     name: 'crystal', // key: value
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules','10 things to make with marmite'],
//     login: function(){ // we are creating a method for this object called 'login'
//         console.log('the user logged in');
//     },
//     logout: function(){ 
//         console.log('the user logged out');
//     },
//     logBlogs: function(){
//         console.log('this user has written the following blogs');
//         this.blogs.forEach(blog =>{// this is used to refer to the user object to access the parameters
//             console.log(blog);
//         }) 
//     }
// };

// user.login();
// user.logout();
// user.logBlogs();




// const blogs = [ // array of objects
//     {title: 'why mac and cheese rules', likes: 30},
//     {title: '10 thing to make with marmite', likes: 30}
// ];



// let user = {
//     name: 'crystal', // key: value
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: [{title: 'why mac and cheese rules', likes: 30},
//     {title: '10 thing to make with marmite', likes: 30}
// ],
//     login: function(){ // we are creating a method for this object called 'login'
//         console.log('the user logged in');
//     },
//     logout: function(){ 
//         console.log('the user logged out');
//     },
//     logBlogs: function(){
//         console.log('this user has written the following blogs');
//         this.blogs.forEach(blog =>{// this is used to refer to the user object to access the parameters
//             console.log(blog.title, blog.likes);
//         }) 
//     }
// };

// user.login();
// user.logout();
// user.logBlogs();



// - Math object

console.log(Math);
console.log(Math.PI);

const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));