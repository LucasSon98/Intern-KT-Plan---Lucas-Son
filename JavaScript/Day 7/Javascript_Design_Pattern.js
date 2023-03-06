// Design Patterns
// https://www.freecodecamp.org/news/javascript-design-patterns-explained/
// https://refactoring.guru/design-patterns/catalog
// design patterns are useful patterns that can be implemented to solve common programming problems.
// It is oriented for object-oriented programming

// These patterns are not algorithms or specific implementations. They are more like ideas, opinions,
// and abstractions that can be useful in certain situations to solve a particular kind of problem.

// There are three types: Creational Design Patterns, Structural Design Patterns and Behavioral Patterns



// **** Creational Design Patterns ****
// Creational patterns consist of different mechanisms used to create objects.

// - Singleton Pattern 

// Singleton is a design pattern that ensures that a class has only one immutable instance.
// Said simply, the singleton pattern consists of an object that can't be copied or modified.
// It's often useful when we want to have some immutable single point of truth for our application.
// Two ways of implementing this pattern are using object literals and classes

// Example 1 (using object literal):

const Config = {
    start: () => console.log('App has started'),
    update: () => console.log('App has updated'),
}

// We freeze the object to prevent new properties being added and existing properties being modified or removed
Object.freeze(Config)

Config.start() // "App has started"
Config.update() // "App has updated"

Config.name = "Robert" // We try to add a new key
console.log(Config) // And verify it doesn't work: { start: [Function: start], update: [Function: update] }


// Example 2 (using classes):

class Config {
    constructor() {}
    start(){ console.log('App has started') }  
    update(){ console.log('App has updated') }
}
  
const instance = new Config()
Object.freeze(instance)

// - Factory Method Pattern

// The Factory method pattern provides an interface for creating objects that can be modified after creation.
// The cool thing about this is that the logic for creating our objects is centralized in a single place, simplifying and better organizing our code.
// Two ways of implementing this pattern are using classes or factory functions (functions that return an object).

// Example 1 (using classes):

class Alien {
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}

const alien1 = new Alien("Ali", "I'm Ali the alien!")
console.log(alien1.name) // output: "Ali"


// Example 2 (using a factory function):

function Alien(name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = "alien"
}

Alien.prototype.fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
Alien.prototype.sayPhrase = () => console.log(this.phrase)

const alien1 = new Alien("Ali", "I'm Ali the alien!")

console.log(alien1.name) // output "Ali"
console.log(alien1.phrase) // output "I'm Ali the alien!"
alien1.fly() // output "Zzzzzziiiiiinnnnnggggg"


// - Abstract Factory Pattern

// The Abstract Factory pattern allows us to produce families of related objects without specifying concrete classes.
// It's useful in situations where we need to create objects that share only some properties and methods.
// Basically it just adds an abstraction layer over the factory method pattern,
// so that we can create many different types of objects, but still interact with a single factory function or class.

// Example:

// We have a class or "concrete factory" for each vehicle type
class Car {
    constructor () {
        this.name = "Car"
        this.wheels = 4
    }
    turnOn = () => console.log("Chacabúm!!")
}

class Truck {
    constructor () {
        this.name = "Truck"
        this.wheels = 8
    }
    turnOn = () => console.log("RRRRRRRRUUUUUUUUUMMMMMMMMMM!!")
}

class Motorcycle {
    constructor () {
        this.name = "Motorcycle"
        this.wheels = 2
    }
    turnOn = () => console.log("sssssssssssssssssssssssssssssshhhhhhhhhhham!!")
}

// And and abstract factory that works as a single point of interaction for our clients
// Given the type parameter it receives, it will call the corresponding concrete factory
const vehicleFactory = {
    createVehicle: function (type) {
        switch (type) {
            case "car":
                return new Car()
            case "truck":
                return new Truck()
            case "motorcycle":
                return new Motorcycle()
            default:
                return null
        }
    }
}

const car = vehicleFactory.createVehicle("car") // Car { turnOn: [Function: turnOn], name: 'Car', wheels: 4 }
const truck = vehicleFactory.createVehicle("truck") // Truck { turnOn: [Function: turnOn], name: 'Truck', wheels: 8 }
const motorcycle = vehicleFactory.createVehicle("motorcycle") // Motorcycle { turnOn: [Function: turnOn], name: 'Motorcycle', wheels: 2 }


// - Builder Pattern

// The Builder pattern is used to create objects in "steps".
// Normally we will have functions or methods that add certain properties or methods to our object.
// The cool thing about this pattern is that we separate the creation of properties and methods into different entities.
// If we had a class or a factory function, the object we instantiate will always have all the properties and methods declared in that class/factory.
// But using the builder pattern, we can create an object and apply to it only the "steps" we need, which is a more flexible approach.


// We declare our objects
const bug1 = {
    name: "Buggy McFly",
    phrase: "Your debugger doesn't work with me!"
}

const bug2 = {
    name: "Martiniano Buggland",
    phrase: "Can't touch this! Na na na na..."
}

// These functions take an object as parameter and add a method to them
const addFlyingAbility = obj => {
    obj.fly = () => console.log(`Now ${obj.name} can fly!`)
}

const addSpeechAbility = obj => {
    obj.saySmthg = () => console.log(`${obj.name} walks the walk and talks the talk!`)
}

// Finally we call the builder functions passing the objects as parameters
addFlyingAbility(bug1)
bug1.fly() // output: "Now Buggy McFly can fly!"

addSpeechAbility(bug2)
bug2.saySmthg() // output: "Martiniano Buggland walks the walk and talks the talk!"


// - Prototype Pattern

// The Prototype pattern allows you to create an object using another object as a blueprint, inheriting its properties and methods.

// We declare our prototype object with two methods
const enemy = {
    attack: () => console.log("Pim Pam Pum!"),
    flyAway: () => console.log("Flyyyy like an eagle!")
}

// We declare another object that will inherit from our prototype
const bug1 = {
    name: "Buggy McFly",
    phrase: "Your debugger doesn't work with me!"
}

// With setPrototypeOf we set the prototype of our object
Object.setPrototypeOf(bug1, enemy)

// With getPrototypeOf we read the prototype and confirm the previous has worked
console.log(Object.getPrototypeOf(bug1)) // { attack: [Function: attack], flyAway: [Function: flyAway] }

console.log(bug1.phrase) // Your debugger doesn't work with me!
console.log(bug1.attack()) // Pim Pam Pum!
console.log(bug1.flyAway()) // Flyyyy like an eagle!


// ***** Structural Design Patterns *****
// Structural patterns refer to how to assemble objects and classes into larger structures.

// - Adapter Pattern
// The Adapter allows two objects with incompatible interfaces to interact with each other.

// Let's say, for example, that your application consults an API that returns XML and sends that information to another API to process that information.
// But the processing API expects JSON. You can't send the information as it's received since both interfaces are incompatible. You need to adapt it first.

// Example:

// Our array of cities
const citiesHabitantsInMillions = [
    { city: "London", habitants: 8.9 },
    { city: "Rome", habitants: 2.8 },
    { city: "New york", habitants: 8.8 },
    { city: "Paris", habitants: 2.1 },
] 

// The new city we want to add
const BuenosAires = {
    city: "Buenos Aires",
    habitants: 3100000
}

// Our adapter function takes our city and converts the habitants property to the same format all the other cities have
const toMillionsAdapter = city => { city.habitants = parseFloat((city.habitants/1000000).toFixed(1)) }

toMillionsAdapter(BuenosAires)

// We add the new city to the array
citiesHabitantsInMillions.push(BuenosAires)

// And this function returns the largest habitants number
const MostHabitantsInMillions = () => {
    return Math.max(...citiesHabitantsInMillions.map(city => city.habitants))
}

console.log(MostHabitantsInMillions()) // 8.9




// - Decorator Pattern

// The Decorator pattern lets you attach new behaviors to objects by placing them inside wrapper objects that contain the behaviors.
// These behaviours are not part of the object. You can freely unwrap the object to reset its original behaviour.
// On the other hand, when an object inherits a set of behaviours, they become a part of it.

// Example:
import { useState } from 'react'
import Context from './Context'

const ContextProvider: React.FC = ({children}) => {

    const [darkModeOn, setDarkModeOn] = useState(true)
    const [englishLanguage, setEnglishLanguage] = useState(true)

    return (
        <Context.Provider value={{
            darkModeOn,
            setDarkModeOn,
            englishLanguage,
            setEnglishLanguage
        }} >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider

// Then we wrap the whole application around it:

export default function App() {
    return (
      <ContextProvider>
        <Router>
  
          <ErrorBoundary>
            <Suspense fallback={<></>}>
              <Header />
            </Suspense>
  
            <Routes>
                <Route path='/' element={<Suspense fallback={<></>}><AboutPage /></Suspense>}/>
  
                <Route path='/projects' element={<Suspense fallback={<></>}><ProjectsPage /></Suspense>}/>
  
                <Route path='/projects/helpr' element={<Suspense fallback={<></>}><HelprProject /></Suspense>}/>
  
                <Route path='/projects/myWebsite' element={<Suspense fallback={<></>}><MyWebsiteProject /></Suspense>}/>
  
                <Route path='/projects/mixr' element={<Suspense fallback={<></>}><MixrProject /></Suspense>}/>
  
                <Route path='/projects/shortr' element={<Suspense fallback={<></>}><ShortrProject /></Suspense>}/>
  
                <Route path='/curriculum' element={<Suspense fallback={<></>}><CurriculumPage /></Suspense>}/>
  
                <Route path='/blog' element={<Suspense fallback={<></>}><BlogPage /></Suspense>}/>
  
                <Route path='/contact' element={<Suspense fallback={<></>}><ContactPage /></Suspense>}/>
            </Routes>
          </ErrorBoundary>
  
        </Router>
      </ContextProvider>
    )
  }

// And later on, using the useContext hook I can access the state defined in the Context from any of the components in my app.
const AboutPage: React.FC = () => {

    const { darkModeOn, englishLanguage } = useContext(Context)
    
    return (...)
}

export default AboutPage



// - Facade Pattern

// The Facade pattern provides a simplified interface to a library, a framework, or any other complex set of classes.
// A simple example could be JavaScript's map, sort, reduce and filter functions, which all work like good 'ol for loops beneath the hood.

// Another example could be any of the libraries used for UI development nowadays, like MUI.
// As we can see in the following example, these libraries offer us components that bring built-in features and functionalities that help us build code faster and easier.
// But all this when compiled turns into simple HTML elements, which are the only thing browsers understand.
// These components are only abstractions that are here to make our lives easier.



// - Proxy Pattern

// The Proxy pattern provides a substitute or placeholder for another object.
// The idea is to control access to the original object, performing some kind of action before or after the request gets to the actual original object.

// Let's see this in an example. Here I have a function that validates an authentication token. Don't pay much attention to how it does that.
// Just know that it receives the token as parameter, and once it's done it calls the next() function.


const jwt = require('jsonwebtoken')

module.exports = function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token === null) return res.status(401).send(JSON.stringify('No access token provided'))
  
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).send(JSON.stringify('Wrong token provided'))
      req.user = user
      next()
    })
}

// This function is a middleware, and we can use it in any endpoint of our API in the following way.
// We just place the middleware after the endpoint address and before declaration of the endpoint function:

router.get('/:jobRecordId', authenticateToken, async (req, res) => {
    try {
      const job = await JobRecord.findOne({_id: req.params.jobRecordId})
      res.status(200).send(job)
  
    } catch (err) {
      res.status(500).json(err)
    }
  })


//   In this way, if no token or a wrong token is provided, the middleware will return the corresponding error response.
// If a valid token is provided, the middleware will call the next() function and the endpoint function will get executed next.




// ***** Behavioral Design Patterns *****
// Behavioral patterns control communication and the assignment of responsibilities between different objects.

// - Chain of Responsibility Pattern

// The Chain of Responsibility passes requests along a chain of handlers.
// Each handler decides either to process the request or to pass it to the next handler in the chain.


// - Iterator Pattern

// The iterator is used to traverse elements of a collection. This might sound trivial in programming languages used nowadays, but this wasn't always the case.
// Anyway, any of the JavaScript built in functions we have at our disposal to iterate over data structures (for, forEach, for...of, for...in, map, reduce, filter, and so on) are examples of the iterator pattern.
// Same as any traversing algorithm we code to iterate through more complex data structures like trees or graphs.



// - Observer Pattern

// The observer pattern lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.
// Basically, it's like having an event listener on a given object, and when that object performs the action we're listening for, we do something.

// The hook is divided in two main parts, the executable function and an array of dependencies. If the array is empty, like in the following example, the function gets executed each time the component is rendered.

useEffect(() => { console.log('The component has rendered') }, [])

// If we declare any variables within the dependency array, the function will execute only when those variables change.

useEffect(() => { console.log('var1 has changed') }, [var1])