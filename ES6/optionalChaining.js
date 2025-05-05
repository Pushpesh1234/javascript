//Theory part
/*   Ah, optional chaining (?.) in JavaScript! This is a fantastic feature introduced in ECMAScript
 2020 that significantly simplifies working with nested object properties where the existence of 
 intermediate properties might be uncertain. It allows you to access properties deep within an object 
 without having to explicitly check if each level of the chain exists, thus preventing those dreaded
  TypeError: Cannot read properties of undefined errors.
  
  
  Think of it as a safer way to navigate potentially missing branches in your object tree.


How it Works:

The optional chaining operator ?. works like a regular property access operator (.) but with a 
crucial difference:

If a property in the chain before the ?. is null or undefined, the expression short-circuits 
and evaluates to undefined instead of throwing an error.
If all the properties in the chain exist, the expression evaluates to the value of the final property.
  */

const cars={
    carsTypes:{
        jeep:"Compass",
        convertibel:"BMW Z4",
        sportsCar:"Porsche 911"
    }
}

const carsCheck=cars?.carsTypes?.flyingCar
const carsCheckAgain=cars?.carsTypes
console.log(carsCheck,carsCheckAgain)



  
 
  

  
  const user = {
    name: "Alice",
    address: {
      city: "New York",
      street: "5th Avenue",
    },
  };
  
  // Without optional chaining, you'd have to do this:
  let streetWithoutOptionalChaining;
  if (user && user.address && user.address.street) {
    streetWithoutOptionalChaining = user.address.street;
  } else {
    streetWithoutOptionalChaining = undefined;
  }

  // Now, let's see how optional chaining simplifies this:

  const streetWithOptionalChaining = user?.address?.street;
  console.log(streetWithOptionalChaining); // Output: "5th Avenue"

//   Scenario with a Missing Property:

// If the user object doesn't have an address property:

const userWithoutAddress = {
    name: "Bob",
  };
  
  // Without optional chaining, this would throw a TypeError:
  // let streetError = userWithoutAddress.address.street; // Error!
  
  // With optional chaining, it gracefully returns undefined:
  const streetOptionalUndefined = userWithoutAddress?.address?.street;
  console.log(streetOptionalUndefined); // Output: undefined

//   Use Cases in Detail:

// Accessing Nested Object Properties: This is the most common use case, 
// as demonstrated above. It makes your code cleaner and
//  less verbose when dealing with potentially incomplete data structures.

// Calling Methods That Might Not Exist: You can also use optional chaining when 
// calling methods that might not be defined on an object:

const config = {
    analytics: {
      trackEvent: (eventName) => {
        console.log(`Tracking event: ${eventName}`);
      },
    },
  };
  
  config.analytics?.trackEvent?.("buttonClick"); // Executes if trackEvent exists
  config.nonExistent?.method?.(); // Safely does nothing and returns undefined

//   Here, if config.analytics or config.analytics.trackEvent is null or undefined, the 
// trackEvent("buttonClick") call will not be attempted, and the expression will evaluate to undefined.


// Accessing Array Elements That Might Be Out of Bounds: While less common, you can 
// technically use optional chaining with array indices, although direct index access 
// with ?. doesn't make much sense. However, if you have an array stored as a property:

const data = {
    items: ["apple", "banana"],
  };
  
  const firstItem = data?.items?.[0]; // "apple"
  const thirdItem = data?.items?.[2]; // undefined (no error)



//  Note the ?. after data.items to ensure items itself exists before trying to access an index.

// Key Benefits of Optional Chaining:

// Prevents TypeErrors: The most significant advantage is avoiding errors when trying to access properties of null or undefined.
// Cleaner and More Readable Code: It reduces the need for multiple && checks or nested if statements, making your code easier to follow.
// More Robust Code: Your application becomes more resilient to data inconsistencies or incomplete responses from APIs.
// Concise Syntax: It provides a more elegant and less verbose way to handle potentially missing properties.
// Important Considerations:

// Short-Circuiting: Once null or undefined is encountered in the chain before the ?., the rest of the chain is not evaluated.
// Assignment: You cannot use optional chaining on the left-hand side of an assignment:


// This is invalid:
// user?.address?.street = "New Street";


// You can only use it for accessing values.
// Not a Replacement for Proper Error Handling: While optional chaining prevents TypeErrors related to accessing properties of null or undefined, it doesn't handle other types of errors. You might still need try...catch blocks for other potential issues.
// Browser and Node.js Support: Optional chaining is a relatively modern feature, so ensure your target environment supports it. Most modern browsers and recent versions of Node.js do.