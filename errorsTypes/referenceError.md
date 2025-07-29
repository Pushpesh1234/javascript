### Refernce Error in javaScript:
A ReferenceError in JavaScript occurs when the code attempts to access a variable or an identifier that has not been declared or is not within the current scope of execution. This means the JavaScript engine cannot find a reference to the intended item. 
When it occurs:
Accessing an undeclared variable: This is the most common scenario. If a variable is used without being declared using var, let, or const, a ReferenceError will be thrown.
JavaScript

    console.log(myVariable); // ReferenceError: myVariable is not defined
Accessing a variable outside its scope: Variables declared with let and const are block-scoped, and var is function-scoped. Attempting to access them outside their defined scope will result in a ReferenceError.
JavaScript

    function myFunction() {
      let scopedVar = "hello";
    }
    console.log(scopedVar); // ReferenceError: scopedVar is not defined
Temporal Dead Zone (TDZ) with let and const: let and const declarations are hoisted, but they are not initialized until their declaration line is executed. Accessing them before this point, within their scope but before their declaration, will trigger a ReferenceError. This period is known as the Temporal Dead Zone.
JavaScript

    console.log(anotherVar); // ReferenceError: Cannot access 'anotherVar' before initialization
    let anotherVar = "world";
Misspelling a variable or function name: If a variable or function name is misspelled, JavaScript will treat it as an undeclared identifier, leading to a ReferenceError.
JavaScript

    let correctName = "value";
    console.log(corrrectName); // ReferenceError: corrrectName is not defined