# Is prototype as a property only exsists in function ?

#### Yes, the prototype property in JavaScript is specifically associated with function objects. It's not a generic property of all objects. When a function is created, JavaScript automatically adds a prototype property to it. This prototype property is an object that can be used to add shared properties and methods that will be inherited by objects created using that function as a constructor. 
## Here's a more detailed explanation:
### Functions and prototype:
#### Every JavaScript function has a prototype property by default. This property is an object that serves as a blueprint for objects created using the new keyword with that function. 
### __proto__ and Inheritance:
#### Objects created using a constructor function inherit properties and methods from the function's prototype object through the __proto__ property (also known as [[Prototype]]). 
### Regular Objects:
#### Regular objects (created using object literals or Object.create()) do not have a prototype property in the same way that functions do. Instead, their __proto__ property points to the prototype of the object from which they were created (usually Object.prototype). 
### Setting Prototype:
#### You can modify the prototype of a constructor function to add or change properties and methods that will be inherited by all instances created from that constructor. 
### Example:
```javaScript

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log("Woof, I am " + this.name);
};

const dog1 = new Dog("Buddy");
const dog2 = new Dog("Lucy");

dog1.bark(); // Output: Woof, I am Buddy
dog2.bark(); // Output: Woof, I am Lucy

console.log(dog1.hasOwnProperty('bark')); // false, because it's inherited
console.log(dog2.hasOwnProperty('bark')); // false
console.log(Dog.prototype.isPrototypeOf(dog1)); // true
console.log(Dog.prototype.isPrototypeOf(dog2)); // true
```
### In this example, bark is added to Dog.prototype. Both dog1 and dog2 inherit the bark method, even though it's not directly defined on them. 