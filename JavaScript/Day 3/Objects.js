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

user.gender = "Male"; // if the property does not exist in the object then it will be created. This also works for methods
console.log(user.gender);


console.log(user['name']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);


// ---------------------------------------------------------------------------------------------------------------------------------------


//This: keyword used to refer to the object from where it is being invoked


// - object methods

let user = {
    name: 'crystal', // key: value
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules','10 things to make with marmite'],
    login: function(){ // we are creating a method for this object called 'login'
        console.log('the user logged in');
    },
    logout: function(){ 
        console.log('the user logged out');
    },
    logBlogs: function(){
        console.log('this user has written the following blogs');
        this.blogs.forEach(blog =>{// this is used to refer to the user object to access the parameters
            console.log(blog);
        }) 
    }
};

user.login();
user.logout();
user.logBlogs();


// W3schols Example:

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };


// ---------------------------------------------------------------------------------------------------------------------------------------


// --- call and apply ---

// The call() and apply() methods are predefined JavaScript methods. They can both be used to call an object method with another object as argument.

// Example:

const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
  person1.fullName.call(person2);

// This example is similar to the one in line 58. Here we are passing the object "person2" to the function "fullName" in the object "person1".
// Despite this is being called inside "person1" since the function is being applied to "person2" the key this in this case is responding to "person2"

// The apply() method does the same as call(). The difference is that call() takes arguments separately; ej: call(object,arg1,arg2), while apply() takes arguments as an array; ej: apply(object,[arg1,arg2])



// --- bind ---

// With the bind() method, an object can borrow a method from another object.

// This example creates 2 objects (person and member).

// The member object borrows the fullname method from the person object:

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
const member = {
firstName:"Hege",
lastName: "Nilsen",
}
  
  let fullName = person.fullName.bind(member);

  
  
// ---------------------------------------------------------------------------------------------------------------------------------------

// ---- array of objects ------

const blogs = [ 
    {title: 'why mac and cheese rules', likes: 30},
    {title: '10 thing to make with marmite', likes: 30}
];



let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [{title: 'why mac and cheese rules', likes: 30},
    {title: '10 thing to make with marmite', likes: 30}
],
    login: function(){ // we are creating a method for this object called 'login'
        console.log('the user logged in');
    },
    logout: function(){ 
        console.log('the user logged out');
    },
    logBlogs(){ // Another of declaring a function
        console.log('this user has written the following blogs');
        this.blogs.forEach(blog =>{      // this is used to refer to the user object to access the parameters
            console.log(blog.title, blog.likes);
        }) 
    }
};

user.login();
user.logout();
user.logBlogs();


// ---------------------------------------------------------------------------------------------------------------------------------------

// -- Bracket notation --

// Untile now we have been accessing object properties using dot notation
// Another way of accessing object properties is using bracket notation

const member = {
    name: {
        first: "Lucas"
    },
    firstName:"Hege",
    lastName: "Nilsen",
}

console.log(member["firstName"]);
console.log(member["name"]["first"]);

// Dot notation is generally preferred over bracket notation because it is more succinct and easier to read.
// However there are some cases where you have to use brackets.
// For example, if an object property name is held in a variable, then you can't use dot notation to access the value, but you can access the value using bracket notation.

const person = {
    name: ["Bob", "Smith"],
    age: 32,
};
  
function logProperty(propertyName) {
    console.log(person[propertyName]);
}
  
logProperty("name");
// ["Bob", "Smith"]
logProperty("age");
// 32

// One useful aspect of bracket notation is that it can be used to set not only member values dynamically, but member names too.
// Let's say we wanted users to be able to store custom value types in their people data, by typing the member name and value into two text inputs

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
person.height;

// --- Math object ----

// Math is a built-in object that has properties and methods for mathematical constants and functions.
// It's not a function object.

console.log(Math);
console.log(Math.PI);

const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// max

Math.max(1,2,3);

// Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.

Math.max.apply(null, [1,2,3]);


// --- Date object ----

// JavaScript Date objects represent a single moment in time in a platform-independent format.
// Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
// There are several methods available to obtain a date in various formats, as well as to perform time zone conversions.

//In addition to methods to read and alter individual components of the local date and time (such as getDay() and setHours())
// , there are also versions of the same methods that read and manipulate the date and time using UTC (such as getUTCDay() and setUTCHours()).

// Some Date methods

Date(); //returns a string representation of the current date and time.
Date.now(); //Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.
Date.parse(Date()); // Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC, with leap seconds ignored.
//Parsing of strings with Date.parse is strongly discouraged due to browser differences and inconsistencies.


const birthday = new Date('August 19, 1975 23:15:30');
const date = birthday.getDate(); //Returns the day of the month
const day = birthday.getDay(); // Returns the day of the week
const year = birthday.getFullYear(); // Returns the year
const month = birthday.getMonth(); // Returns the month
const time = birthday.getTime(); // Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC. (Negative values are returned for prior times.)
const hours = birthday.getMinutes();
const minutes = birthday.getHours();
const seconds = birthday.getSeconds();







// ---------------------------------------------------------------------------------------------------------------------------------------



// --- deep and shallow copy of objects ---

// There are two ways to clone an object in Javascript:

// * Shallow copy: means that only the first level of the object is copied. Deeper levels are referenced.
// * Deep copy: means that all levels of the object are copied. This is a true copy of the object.

// A shallow copy can be achieved using the spread operator (…) or using Object.assign:

const obj = { name: 'Version 1', additionalInfo: { version: 1 } };

const shallowCopy1 = { ...obj };
const shallowCopy2 = Object.assign({}, obj);

shallowCopy1.name = 'Version 2';
shallowCopy1.additionalInfo.version = 2;

shallowCopy2.name = 'Version 2';
shallowCopy2.additionalInfo.version = 2;

console.log(obj); // { name: 'Version 1', additionalInfo: { version: 2 } }
console.log(shallowCopy1); // { name: 'Version 2', additionalInfo: { version: 2 } }
console.log(shallowCopy2); // { name: 'Version 2', additionalInfo: { version: 2 } }

// After updating a property in the first level of the cloned objects, the original property is not updated.
// After updating a property in a deeper level, the original property is also updated. This happens because, in this case, deeper levels are referenced, not copied.


// A deep copy can be achieved using JSON.parse + JSON.stringify:

const obj = { name: 'Version 1', additionalInfo: { version: 1 } };

const deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.name = 'Version 2';
deepCopy.additionalInfo.version = 2;

console.log(obj); // { name: 'Version 1', additionalInfo: { version: 1 } }
console.log(deepCopy); // { name: 'Version 2', additionalInfo: { version: 2 } }

// After updating a property in the first level of the cloned objects, the original property is not updated.
// After updating a property in a deeper level, the original property is neither updated. This happens because, in this case, deeper levels are also copied.

// Shallow copies are a lot faster than deep copies. But this doesn’t mean that you should always use a shallow copy, because sometimes you will also need a copy of the nested objects.

