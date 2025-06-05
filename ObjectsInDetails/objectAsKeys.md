# Objects as keys in an Object

### Let's break down what happens when you try to use an object as a key to another object's property in JavaScript.

##### In JavaScript, the keys of an object are inherently strings (or Symbols, which are a special primitive type). When you attempt to use an object as a key, JavaScript will implicitly convert that object into a string. This conversion happens by calling the toString() method of the object.

### Consider this example:
``` javaScript
const keyObject = { name: 'myKey' };
const mainObject = {};

mainObject[keyObject] = 'This is the value';

console.log(mainObject);
console.log(Object.keys(mainObject));

```

### When you run this code, the output will be:

##### { '[object Object]': 'This is the value' }
##### [ '[object Object]' ]

## Let's break down what happens when you try to use an object as a key to another object's property in JavaScript.

#### In JavaScript, the keys of an object are inherently strings (or Symbols, which are a special primitive type). When you attempt to use an object as a key, JavaScript will implicitly convert that object into a string. This conversion happens by calling the toString() method of the object.

## Consider this example:

```JavaScript

const keyObject = { name: 'myKey' };
const mainObject = {};

mainObject[keyObject] = 'This is the value';

console.log(mainObject);
console.log(Object.keys(mainObject)); 
```
#### When you run this code, the output will be:

##### { '[object Object]': 'This is the value' }
##### [ '[object Object]' ]
## Explanation:

####  const keyObject = { name: 'myKey' };: We create an object named keyObject.
#### const mainObject = {};: We create an empty object named mainObject.
#### mainObject[keyObject] = 'This is the value';: Here's the crucial part. JavaScript takes keyObject and calls its toString() method. By default, the toString() method of a plain JavaScript object returns the string '[object Object]'. This string is then used as the key in mainObject.
#### console.log(mainObject);: This shows that mainObject now has a property with the key '[object Object]' and the value 'This is the value'.
#### console.log(Object.keys(mainObject));: This confirms that the only key in mainObject is the string '[object Object]'.

### Important Consequence: Overwriting

#### If you try to use different objects as keys, but their toString() methods produce the same string, you will end up overwriting the previous value associated with that string key.

``` javaScript 
const keyObject1 = { a: 1 };
const keyObject2 = { b: 2 };
const anotherObject = {};

anotherObject[keyObject1] = 'First value';
anotherObject[keyObject2] = 'Second value';

console.log(anotherObject);
```


## Output:

### { '[object Object]': 'Second value' }


#### In this case, both keyObject1.toString() and keyObject2.toString() result in '[object Object]', so the second assignment overwrites the first.

#### How to Use Objects as "Unique" Keys

#### If you need to associate data with specific object instances as keys, you should use the Map data structure. Map allows objects to be used directly as keys without implicit string conversion.

``` javaScript 
const map = new Map();
const obj1 = { id: 1 };
const obj2 = { id: 2 };

map.set(obj1, 'Value associated with obj1');
map.set(obj2, 'Value associated with obj2');

console.log(map.get(obj1)); // Output: Value associated with obj1
console.log(map.get(obj2)); // Output: Value associated with obj2
console.log(map.has(obj1)); // Output: true


```
### In summary, when you assign an object as a key to an object property, the object is implicitly converted to the string '[object Object]', and this string becomes the key. If you need to use objects as unique identifiers for keys, Map is the appropriate data structure.


## "[object Object]" what it meaning

#### Ah, you're asking about the meaning of '[object Object]'!

#### In the context of JavaScript, the string '[object Object]' is the default string representation of a plain JavaScript object.

## Here's a breakdown of what that means:

### [object ...]: This part indicates the internal type of the value. In this case, it's an "object".
### bject: This specifies the constructor that was used to create the object (in this case, the built-in Object constructor).
## Why does it appear?

### As we discussed earlier, when JavaScript needs to convert an object to a primitive value (like a string), for example, when you try to use an object as a key in another object or when you try to concatenate an object with a string, it often calls the object's toString() method.

#### For plain JavaScript objects (those created using {} or new Object()), the default implementation of the toString() method returns the string '[object Object]'.

#### Think of it as a generic label. JavaScript is saying, "Hey, this is an object, and it was created using the basic Object constructor." It doesn't provide specific details about the object's properties.

## When you might see it:

### Object keys: As we saw, when you try to use an object as a key in another object.
### String concatenation:
```JavaScript

const myObj = { name: 'Alice' };
console.log('The object is: ' + myObj); // 
```
## Output: The object is: [object Object]
### Implicit type conversion: In certain operations where JavaScript expects a string.
### How to get a more meaningful string representation:

### If you want a more informative string representation of your object, you can override the toString() method within your object:

```JavaScript

const myCustomObj = {
  name: 'Bob',
  age: 30,
  toString() {
    return `Person: ${this.name}, Age: ${this.age}`;
  }
};

console.log('The custom object is: ' + myCustomObj);
```
#### // Output: The custom object is: Person: Bob, Age: 30
### By defining your own toString() method, you can control how your object is represented as a string.

#### So, in essence, '[object Object]' is JavaScript's way of saying "this is a generic object" when it needs a string representation of that object and no custom toString() method is defined. It's a default fallback.