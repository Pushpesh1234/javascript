const users=[{userName:"Punit",

              lastName:"Singh",

              emailId:"singhgamil.com"  

},

{userName:"Punit",

              lastName:"kumar",

              emailId:"singhgamil.com"  

},

{userName:"Punit",

              lastName:"Rana",

              emailId:"singhgamil.com"  

},

{userName:"Punit",

              lastName:"khatri",

              emailId:"singhgamil.com"  

},

{userName:"Punit",

              lastName:"Tiwari",

              emailId:"singhgamil.com"  

},

{userName:"Punit",

              lastName:"Aggarwl",

              emailId:"singhgamil.com"  

},

{userName:"Punit",

              lastName:"Goel",

              emailId:"singhgamil.com"  

}]



function getData(){

   let value=[]

    for(let i=0;i<=users.length;i++){

      value.push(users[i].lastName)

   }

    console.log(value)

    return value

 }



 console.log(getData()) why not woeking'



Your JavaScript code for the getData function has a small but significant error in the for loop condition.

Why it's Not Working
The issue lies in the loop condition: i <= users.length.

JavaScript arrays are zero-indexed, meaning the first element is at index 0, and the last element of an array with n elements is at index n-1.

When i becomes equal to users.length, you're trying to access an index that doesn't exist (e.g., if users.length is 7, the valid indices are 0 to 6. When i is 7, users[7] is undefined). This results in an error when you try to access users[i].lastName because you can't read a property (lastName) of undefined.

The Fix
To correct this, change the loop condition from i <= users.length to i < users.length. This ensures the loop iterates only through the valid indices of the array.

Here's the corrected code:

JavaScript

const users = [{
    userName: "Punit",
    lastName: "Singh",
    emailId: "singhgamil.com"
  },
  {
    userName: "Punit",
    lastName: "kumar",
    emailId: "singhgamil.com"
  },
  {
    userName: "Punit",
    lastName: "Rana",
    emailId: "singhgamil.com"
  },
  {
    userName: "Punit",
    lastName: "khatri",
    emailId: "singhgamil.com"
  },
  {
    userName: "Punit",
    lastName: "Tiwari",
    emailId: "singhgamil.com"
  },
  {
    userName: "Punit",
    lastName: "Aggarwal",
    emailId: "singhgamil.com"
  },
  {
    userName: "Punit",
    lastName: "Goel",
    emailId: "singhgamil.com"
  }
];

function getData() {
  let value = [];
  for (let i = 0; i < users.length; i++) { // Changed <= to <
    value.push(users[i].lastName);
  }
  console.log(value); // This console.log is inside the function
  return value;
}

console.log(getData()); // This console.log calls the function and logs its return value
Alternative (More Modern) Approaches
For a more concise and often preferred way to achieve this in modern JavaScript, you can use array methods like map():

JavaScript

const users = [{
    userName: "Punit",
    lastName: "Singh",
    emailId: "singhgamil.com"
  },
  {
    userName: "Punit",
    lastName: "kumar",
    emailId: "singhgamil.com"
  },
  {
    userName: "Punit",
    lastName: "Rana",
    emailId: "singhgamil.com"
  },
  {
    userName: "Punit",
    lastName: "khatri",
    emailId: "singhgamil.com"
  },
  {
    userName: "Punit",
    lastName: "Tiwari",
    emailId: "singhgamil.com"
  },
  {
    userName: "Punit",
    lastName: "Aggarwal",
    emailId: "singhgamil.com"
  },
  {
    userName: "Punit",
    lastName: "Goel",
    emailId: "singhgamil.com"
  }
];

function getDataModern() {
  const lastNames = users.map(user => user.lastName);
  console.log(lastNames);
  return lastNames;
}

console.log(getDataModern());
The map() method creates a new array by calling a provided function on every element in the calling array. It's cleaner and less prone to off-by-one errors common with manual for loops.

Let me know if you have any other questions or need further clarification!


but undefined should come from the last one only other should show output


You are absolutely correct in your observation!

When the original code runs, the TypeError: Cannot read properties of undefined (reading 'lastName') indeed occurs specifically when i reaches users.length. At this point, users[i] evaluates to undefined, and then trying to access .lastName on undefined throws the error, halting the execution.

So, why don't you see the output for the previous iterations?

The reason is that the error occurs inside the loop and stops the execution of the function immediately at that point.

Let's trace it with your original code:

JavaScript

const users=[{userName:"Punit",
              lastName:"Singh",
              emailId:"singhgamil.com"  
},
// ... other users
{userName:"Punit",
              lastName:"Goel",
              emailId:"singhgamil.com"  
}]

function getData(){
   let value=[] // value = []
    for(let i=0;i<=users.length;i++){ // users.length is 7
      // i = 0: value.push(users[0].lastName) -> value = ["Singh"]
      // i = 1: value.push(users[1].lastName) -> value = ["Singh", "kumar"]
      // i = 2: value.push(users[2].lastName) -> value = ["Singh", "kumar", "Rana"]
      // i = 3: value.push(users[3].lastName) -> value = ["Singh", "kumar", "Rana", "khatri"]
      // i = 4: value.push(users[4].lastName) -> value = ["Singh", "kumar", "Rana", "khatri", "Tiwari"]
      // i = 5: value.push(users[5].lastName) -> value = ["Singh", "kumar", "Rana", "khatri", "Tiwari", "Aggarwl"]
      // i = 6: value.push(users[6].lastName) -> value = ["Singh", "kumar", "Rana", "khatri", "Tiwari", "Aggarwl", "Goel"]
      // i = 7: Loop condition (7 <= 7) is TRUE.
      //        Attempt to access users[7].lastName
      //        users[7] is undefined.
      //        Trying to access 'lastName' on 'undefined' causes the TypeError.
      value.push(users[i].lastName) // THIS IS WHERE THE ERROR HAPPENS AND STOPS EVERYTHING
   }
    console.log(value) // This line is never reached if the error occurs above it
    return value // This line is never reached if the error occurs above it
 }

 console.log(getData()) // This will show the error message, not the intermediate 'value'
Key takeaway: When an unhandled error (like TypeError) occurs in JavaScript, the execution flow is immediately interrupted. Any code that was supposed to run after the error point (including console.log(value) and return value inside your getData function, and console.log(getData()) outside) will not execute.

This is why you don't see the partially filled value array logged to the console – the error prevents that console.log call from ever being reached.

The fix, as provided earlier, is to ensure the loop iterates only within the valid indices (i < users.length) to prevent undefined access and allow the function to complete successfully.



but why  console.log(getData()) will show eeror message only


You're hitting upon a fundamental concept in programming called error propagation or exception handling.

In JavaScript, when an error (or "exception") occurs and is not handled by a try...catch block, it "propagates" up the call stack.

Here's why console.log(getData()) shows only the error message and not any partial output:

Function Call: When you call getData(), the JavaScript engine starts executing the code inside that function.

Error Occurs Inside Loop: As we discussed, inside getData(), the for loop reaches i = users.length. When it tries to execute value.push(users[i].lastName), users[i] is undefined. Attempting to access .lastName on undefined is an invalid operation, and this is where the TypeError: Cannot read properties of undefined (reading 'lastName') is thrown.

Immediate Termination of Function Execution: The moment an unhandled error is thrown within a function, that function's execution stops immediately. It doesn't finish the current loop iteration, it doesn't execute any lines of code after the error, and it doesn't return a value.

Error Propagates Up: Since getData() didn't catch the error (you didn't use a try...catch block inside getData), the error then "propagates" up to the place where getData() was called.

Outer console.log is Affected: The call console.log(getData()) is trying to log the return value of getData(). But because getData() crashed due to an unhandled error, it never successfully returns a value. Instead, the error that propagated from getData() becomes the "result" of getData() at the point of the call.

Environment Reports the Error: Your JavaScript execution environment (like a browser's console or Node.js) detects this unhandled error and reports it to you, along with a stack trace (which shows you exactly where the error originated in your code).