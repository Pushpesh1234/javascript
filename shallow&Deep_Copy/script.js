
// Primitive data types(number,string,boolean,undefined,symbol) are immutiable and have 
//concept of deep copy where new memory address will be given to new variable despite they 
// having the same value (even though memory addredd in snapshot look same because optimation)
// Immutubiality means we cannot change the value once declare but we can reassign the variable to a 
//new value. And the old value is not assigned to any variable and may be garbage collected by javascript
// engine automatically

let personOne="Pushpesh";
let secondPerson=personOne;
secondPerson="Vikas"
console.log(personOne)

// personOne=personOne+ " Rawat"
// console.log(personOne)
console.log(secondPerson)

// personOne="Deepak";



// In case of non-primitve data types (object, Array, and function) concept of shallow copy followed 
//as the refrence of the object,array and function is passed when copying them to another variable
// as this refrence pointing to the same memory address where values exits therefore change in one 
// variable cause the change in another variable as they pointing same thing
// Also index of an array or property of an object is can accessed easily therefore it make them mutuiable
// it means we can change the current value of array or object 
// Deep copy can happen in non primitve by using methods like assign or using spread operator but 
// it will not work in case of nested array or nested object 


const fruitsColor={
 banana:"yellow",
 watermaleon:"redAndGreen",
 Apple:"red"
}

const fruitsColorCopy=fruitsColor;
fruitsColorCopy.watermaleon="outside  green and red inside"
 console.log(fruitsColor,fruitsColorCopy)



//Shallow Copy:
/* A shallow copy creates a new object or array, and then copies the references of the properties from the original object/array to the new object/array.

If the properties are primitive values (numbers, strings, booleans), their values are copied directly.

If the properties are reference values (objects, arrays), their references (memory addresses) are copied. This means the new object/array will point to the same memory locations as the original.

Consequences of Shallow Copy

With a shallow copy, changes to a nested object or array within the copied object will also affect the original object, and vice-versa. This is because both the original and the copy share the same underlying nested objects/arrays.*/

//using assign method

console.log("change after shaalow using assign method")

const fruitsColorAgain={
    mango:"yellow",
    imagnary:"redAndGreen",
    strawberry:"red"
   }
const fruitsColorCopyAgain={}

Object.assign(fruitsColorCopyAgain,fruitsColorAgain);

fruitsColorCopyAgain.imagnary="imagnary in this";
console.log(fruitsColorCopyAgain,fruitsColorAgain);

//using spread operator for shal;ow copy

const user1={
    userName:"Ravi Kant",
    enrollmentId:"2300926789",
    programmCode:"BCA",
    courseCode:"MCS-23"
}

const user2={...user1}
console.log(user1,user2)
user2.enrollmentId="2300925790"
user2.userName="Pushpesh Rawat"
console.log(user1,user2)

// Shallow Copy using Array

const country=["India","USA","China","South Korea"]
const copyCountry=[]

Object.assign(copyCountry,country)
console.log(copyCountry)
copyCountry.push("Japan")
console.log(copyCountry)

// Spread Operator
const anotherNation=[...country]
console.log(anotherNation)

//using conact method copying array
const copyCountry2=[].concat(country)

// using slice method
const copyCountry3=country.slice()



