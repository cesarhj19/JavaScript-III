/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Points to the object being worked on
* 2. Used for constructors
* 3. Can be used as parameters
* 4. This refers to the scope its being used in
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function speak(name) {
	console.log(this);
	return name;
}
speak(`C' Hernandez`);

// Principle 2

// code example for Implicit Binding
const obj = {
	name: 'Joe',
	sayAge: function(age) {
		console.log(`My name is ${this.name} and I'm ${age} years old.`);
	}
}
obj.sayAge(20);
// Principle 3

// code example for New Binding
function Person(name, homeTown) {
	this.name = name;
	this.homeTown = homeTown;
	console.log(`My name is ${this.name} and I'm from ${this.homeTown}.`)
}
const Bob = new Person('Bob', 'Santa Ana');
// Principle 4

// code example for Explicit Binding
let person = {
	name: 'John'
}
Person.call(person, 'Red', 'Blue');