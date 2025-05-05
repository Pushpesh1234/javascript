// simple array destructuring

const arr = [5, 5, 6, 7];
const [a, b, c, d] = arr;
console.log(a, b, c, d);
// Ah, array destructuring! It's a fantastic feature in JavaScript (and some other languages) that allows you to unpack values from arrays (or even properties from objects) into distinct variables in a concise and readable way. Think of it as a shortcut to extracting specific elements from an array without having to access them individually by their index.

// Let's break it down with some examples:

// Basic Array Destructuring

// Imagine you have an array of colors:

// JavaScript

// const colors = ["red", "green", "blue"];
// Without destructuring, you might access them like this:

// JavaScript

// const firstColor = colors[0]; // "red"
// const secondColor = colors[1]; // "green"
// const thirdColor = colors[2];  // "blue"
// With array destructuring, you can achieve the same result more elegantly:

// JavaScript

// const [first, second, third] = colors;

// console.log(first);  // Output: "red"
// console.log(second); // Output: "green"
// console.log(third);  // Output: "blue"
// Notice how the square brackets[] on the left - hand side of the assignment mirror the structure of the colors array.Each variable name inside these brackets corresponds to the element at the same index in the array being destructured.

// Skipping Elements

const colors = ["blue", "pink", "yellow", "green", "red", "black"];
const [color1, color2, , color4, color5] = colors;
console.log(color1, color2, color4, color5);

// Application of Array Destructuring

// Swapping two variables values

let num1 = 4;
let num2 = 5;

[num1, num2] = [num2, num1];
console.log(num1);

// let value1 = 1;
// let value2 = 2;
// [value1, value2] = [value2,value1 ];
// console.log(value1); // Output: 2
// console.log(value2); // Output: 1

// default values

let scores = [20, 40, 56];

let [maths, Physics, english, Hindi = 90, Chemistry = 78] = scores;
console.log(maths, english, Hindi, Chemistry);

//Destructuring Nested Arrays

let animals = [
  "Tiger",
  "Dog",
  ["Bull Dog", "German Spheard"],
  "Cows",
  ["Nil Gaaye"],
  "Elephant",
];

let [animal1, animal2, [animal3, animal4], , [animal6], animal7] = animals;

console.log(animal1, animal2, animal3, animal4, animal6);

// Rest Paramaters:

// Can use the rest parameter (...) to capture the remaining elements of an array into a new array:

const superHeroes = ["Superman", "Batman", "Spiderman", "Hulk", "Shaktiman"];
const [hero1, hero2, ...restofHeroes] = superHeroes;
const [hero3Destructured1, hero3Destructured2, hero3Destructured3] =
  restofHeroes;
console.log(
  hero2,
  restofHeroes,
  hero3Destructured1,
  hero3Destructured2,
  hero3Destructured3
);

// The ...restofHeroes collects all elements from the third element onwards into a new array called restOfHeroes.

// Application of Destructuring more

// Extracting specific values: Quickly getting the first, second, or other specific elements from an array
// Returning multiple values from a function: Functions can return arrays, and destructuring makes it easy to assign those values to distinct variables
// Working with function arguments: You can destructure array arguments directly in the function definition:

function sayHi([person2, person1]) {
  console.log(`Good Morning Mr.${person1}`, "\n", `Good Morning Mr.${person2}`);
}

const personName = ["Mukesh", "Rakesh"];
sayHi(personName);

// Iterating with forEach and map: Destructuring can make the callback functions more readable when dealing with arrays of arrays or objects within arrays.
