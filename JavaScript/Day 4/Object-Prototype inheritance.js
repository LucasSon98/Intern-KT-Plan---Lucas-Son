// Protoype is an object property which allows it to reference another object.
// By default is set to null
// The object which is referenced is called 'prototype object'
// When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype.
// In programming, this is called “prototypal inheritance”

// One way of setting it is using __proto__
// Example:

let animal = {
    eats: true
};
  let rabbit = {
    jumps: true
};
  
rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

//Here we can say that "animal is the prototype of rabbit" or "rabbit prototypically inherits from animal".

alert( rabbit.eats ); // true
alert( rabbit.jumps ); // true

// Another way of setting the prototype property

let rabbit = {
    jumps: true,
    __proto__: animal
};

// We can make a prototype chain as long as we want
// Example:

let animal = {
    eats: true,
    walk() {
      alert("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)


// Limitations
// 1. The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
// 2. The value of __proto__ can be either an object or null. Other types are ignored.
// 3. There can be only one [[Prototype]]. An object may not inherit from two others
// 4. The prototype is only used for reading properties. Write/delete operations work directly with the object.

/*
Please note that __proto__ is not the same as the internal [[Prototype]] property.
It’s a getter/setter for [[Prototype]].
The __proto__ property is a bit outdated. It exists for historical reasons, modern JavaScript suggests that we should use Object.getPrototypeOf/Object.setPrototypeOf functions instead that get/set the prototype.
By the specification, __proto__ must only be supported by browsers. In fact though, all environments including server-side support __proto__.
*/

// Here is an example where we can use a method in the prototype object to write a property in the rabbit object, using set and get.

// Before this we need to understan what set and get are used for.

// The get syntax binds an object property to a function that will be called when that property is looked up.
// A getter must have exactly zero parameters.
// Example:

const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
      return this.log[this.log.length - 1];
    }
  };
  
  console.log(obj.latest);
  // Expected output: "c"

// The set syntax binds an object property to a function to be called when there is an attempt to set that property.
// A setter must have exactly one parameter.
// Example:

const language = {
    set current(name) {
      this.log.push(name);
    },
    log: []
  };
  
  language.current = 'EN';
  language.current = 'FA';
  
  console.log(language.log);
  // Expected output: Array ["EN", "FA"]


// Now lets return to the example

let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
};

let admin = {
__proto__: user,
isAdmin: true
};

alert(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

// Since the 'this' is inside set fullName(value), and we are calling this function through the object rabbit
// the properties 'name' and 'surname 'will be written in the object rabbit and not animal

alert(admin.fullName); // Alice Cooper, state of admin modified
alert(user.fullName); // John Smith, state of user protected




// The for..in loop iterates over inherited properties too

let animal = {
    eats: true
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  // Object.keys only returns own keys
  alert(Object.keys(rabbit)); // jumps
  
  // for..in loops over both own and inherited keys
  for(let prop in rabbit) alert(prop); // jumps, then eats

//  If that’s not what we want, and we’d like to exclude inherited properties, there’s a built-in method obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key.
//  We can use hasOwnProperty is a actually a method that comes from Object.prototype.
//  Therefore, we can say that rabbit has inherited that method from Object.prototype.

let animal = {
    eats: true
};

let rabbit = {
jumps: true,
__proto__: animal
};
  
for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
        alert(`Our: ${prop}`); // Our: jumps
    } else {
        alert(`Inherited: ${prop}`); // Inherited: eats
    }
}

// Something important to highlight is that for...in is not iterating over the hasOwnProperty inherited property.
// This is because for...in only iterates over enurable properties.
// But all the properties in Object.prototype have enumerable:false flag.
// Therefore, none of the inherited properties from Object.prototype can be iterated over by for...in