/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}  

Person.prototype.eat = function (edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
  }

Person.prototype.poop = function (){
  this.stomach = [];
}

Person.prototype.toString = function (){
  return `${this.name}, ${this.age}`
}
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function(gallons){
  this.tank = this.tank + gallons;
}

Car.prototype.drive = function (distance){
const range = this.tank * this.milesPerGallon;
this.odometer = this.odometer + distance;
this.tank = range - distance;
if (distance > range){
  return `I ran out of fuel at ${this.odometer} miles!`
} else {
  this.odometer = this. odometer + distance;
  this.tank = range - distance;
}
}

const car1 = new Car('Mustang', 201);
console.log(car1.drive(201));
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age); //binding this to parent
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function (){
  return `Playing with ${this.favoriteToy}`
}

const babybaby = new Baby({
  name: "Maya",
  age: 2,
  favoriteToy: "robot"
})
console.log(babybaby);

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Explicit Binding: 
    a. .call(): immediately invokes a function, we pass in argyments 1 by 1
    b. .apply(): invokes function immediately, we pass in arguemnts as an array
    c. .bind(): pass in arguments 1 by 1 but it does not immediately invoke the function, but returns a brand new function that can be invoked later
  2. Implcit Binding: applies to objects with methods, when the function is invoked, look to the left of the dot, that's what "this" refers to
  3. Window Binding: if we don't give this any context it will return the window/ the global object in node and it will return undefined in strict mode
  4. New Binding: using the new keyword constructs a new object and 'this' points to it. When a function is invoked as a constructor function, using the 'new' keyword 'this' points to the new object that's created
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
