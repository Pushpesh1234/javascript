# About Async

#### In JavaScript, the async keyword plays a crucial role in handling asynchronous operations, particularly those involving Promises. Here's a breakdown of what async does in your code:

## 1.  async Keyword and Functions

#### When you declare a function with the async keyword (e.g., async function makeRequestt()), you're telling JavaScript that this function will likely contain asynchronous operations.

## 2.  Implicitly Returns a Promise

#### An async function always returns a Promise.

#### If the function returns a value directly, that value is automatically wrapped in a resolved Promise.

#### If the function throws an error, it results in a rejected Promise.

## 3.  Enables the await Keyword

#### The primary purpose of async is to allow the use of the await keyword within the function's body.  await is used to pause the execution of the function until a Promise is resolved.

#### The async keyword before the makeRequestt function indicates that this function is designed to handle asynchronous operations.

#### Even though there is no await keyword in your specific example, the function will still return a Promise.

#### If Fetch("some url") returns a promise, the makeRequestt function will return that promise.

####  If Fetch("some url") returns a value that is not a promise, the makeRequestt function will return a promise that resolves to that value.

# Working of Await 
## Enables the await Keyword

#### The primary purpose of async is to allow the use of the await keyword within the function's body. await is used to pause the execution of the function until a Promise is resolved.

## How await works:

#### await is an operator that you can use within an async function to wait for a Promise to be fulfilled (resolved) or rejected.

#### When you put await before a Promise, the execution of the async function is paused at that line.

#### The rest of the code in the async function is not executed until the Promise is settled (either resolved or rejected).

#### If the Promise is resolved, await returns the resolved value, and the execution of the async function continues.

#### If the Promise is rejected, the await expression throws the rejection reason, which you can catch using a try...catch statement.

## Where to use await:

#### You can use await before any expression that evaluates to a Promise. This is typically a function call that returns a Promise, such as fetch(), or another async function.

#### await is used to retrieve the resolved value of that Promise.

# Exception in Await

#### In JavaScript, the await keyword cannot be used outside of a function declared with the async keyword.

#### async functions: The async keyword is used to define a function that can contain asynchronous operations.  It also ensures that the function returns a Promise.

#### await operator: The await operator is used within an async function to pause the execution of that function until a Promise is resolved.

#### Therefore, await cannot work without async.

#### Exception: Top-Level Await

####In modern JavaScript environments, there's an exception: you can use await outside of an async function at the top level of a module.  A "module" is a self-contained piece of JavaScript code that can be imported into other code.

#### In summary:

####In most cases, await must be used inside an async function.

#### In modern JavaScript modules, await can be used at the top level (outside any function).