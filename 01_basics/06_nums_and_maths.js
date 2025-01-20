const score = 100; //  JS auto detects it as a number
// console.log(score);

const balance = new Number(100); // Using Number Function to explicitly define number in JS
// console.log(balance);

// Note: Number has comparatively less prototype properties (methods) than String

// Methods with examples:

// console.log(balance.toString()); //This converts a number into string
// console.log(balance.toString().length); //Once we convert it to String, all properties / methods of Strings are now open to us, such as length
//console.log(balance.toFixed(2)) // Used to reduce or round of to specific decimal values
 //- Use Cases : a. After calculation of GST
                // b. In Ecommerce website
       
    // 4.
    //   const otherNumber=23.8966
    //   const otherNumberTwo=123.8966
    //   const otherNumberThree=1123.896
    //  console.log(otherNumber.toPrecision(2));  
    //  console.log(otherNumberTwo.toPrecision(3)) 
    //  console.log(otherNumber.toPrecision(1))   
     
     //5. 
    //  const hundreds = 1000000
    // console.log(hundreds.toLocaleString()) // By default it converts into US standards
    // hundreds.toLocaleString('en-IN') // As per Indian Standards
    //(Note: Check other formats in MDN Docs)


    //6.
    // .MAX_VALUE
    // .MIN_VALUE
    // .MAX_SAFE_INTEGER
  
    // .MIN_SAFE_INTEGER

// ***********************************Maths in JavaScript***********************************

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.5))
// console.log(Math.round(4.6))
// console.log(Math.round(4.4))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.6))
// console.log(Math.min(4,5,6,3))
// console.log(Math.max(4,8,2,6))

// Math.random tricks

console.log(Math.random()) //    [0.0,1)
console.log(Math.floor(Math.random()*10) )  // [0,9]
console.log(Math.floor((Math.random()*10))+1 ) // [1,10]


//Trick to randomize value between range
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min) //[10,20]
