// Learning Anout Deep copy

/*Deep Copy: Creating Truly Independent Copies

A deep copy creates a completely new object or array, and then recursively copies the values from the original object or array into the new one. This means that if the original object contains other objects or arrays as properties (nested structures), those nested structures are also duplicated, creating entirely new instances in memory.   

Key Characteristics of a Deep Copy:

Independence: Modifications to the copied object (or its nested properties) do not affect the original object, and vice versa. They reside in separate memory locations.
Recursion: To achieve true independence for nested structures, the copying process must traverse down through all levels of the object or array, creating new copies at each level.   
New Memory Allocation: Each part of the deep copy (the top-level object/array and all its nested objects/arrays) occupies a distinct area in memory.
Why is it Called "Deep Copy"?

The term "deep" refers to the depth of the copying process. Unlike a shallow copy that only copies the top-level properties, a deep copy goes "deep" into the nested structure of the object, ensuring that all contained objects and arrays are also duplicated. It's like creating an entirely new tree where each branch and leaf is a separate entity, even though they hold the same values initially.

Shallow Copy: Just Copying References

To understand deep copy better, it's crucial to contrast it with a shallow copy.

A shallow copy creates a new object or array, but instead of copying the values of nested objects and arrays, it copies their references. This means that the new object or array will contain pointers to the same nested objects and arrays in memory as the original.   

Key Characteristics of a Shallow Copy:

Shared References: The copied object and the original object share references to nested objects and arrays.
Interdependence: If you modify a nested object or array within the shallow copy, those changes will be reflected in the original object, and vice versa, because they are pointing to the same underlying data.   
Only Top-Level is New: Only the top-level object or array is a new entity in memory. The nested structures are shared.
Analogy to Understand the Difference:

Imagine you have a blueprint (the original object) for a house that includes the addresses (references) of furniture in a warehouse.*/ 

const bioData={
    user:"Shivam",
    id:3400,
    address:{
        houseNumber:"2190/A3",
        city:"Pune",
        pinCode:'123000',

    } 
}

const copyBioData={}
Object.assign(copyBioData,bioData)
copyBioData.user='Kamlesh'
copyBioData.address.city="Indore"

// using deep copy
/*If you were thinking about a deep copy, here's how you can achieve it in JavaScript, along with some important considerations:


Common Ways to Perform a Deep Copy:

Using JSON.stringify() and JSON.parse() (Simple Cases):

This is a straightforward approach for simple objects and arrays that don't contain functions, Date objects, undefined, NaN, Infinity, or circular references.


*/

const copyBioData2=JSON.parse(JSON.stringify(bioData))

copyBioData2.address.city="Chandigarh"


// 2. Using Recursion (More Robust):

// For more complex objects and arrays, including nested structures, you can implement a recursive
// deep copy function. This approach can handle various data types more effectively.

// function deepCopy(obj, hash = new WeakMap()) {
//     if (obj === null || typeof obj !== 'object') {
//       return obj;
//     }
  
//     if (hash.has(obj)) {
//       return hash.get(obj); // Handle circular references
//     }
  
//     const copy = Array.isArray(obj) ? [] : {};
//     hash.set(obj, copy);
  
//     for (const key in obj) {
//       if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         copy[key] = deepCopy(obj[key], hash);
//       }
//     }
  
//     return copy;
//   }
  
//   const originalArray = [1, { a: [2, 3] }];
//   const deepCopyArray = deepCopy(originalArray);
  
//   deepCopyArray[1].a[0] = 99;
//   console.log(originalArray[1].a[0]); // Output: 2
//   console.log(deepCopyArray[1].a[0]); // Output: 99


// 3. Using Libraries (For Convenience and Edge Cases):

// Libraries like Lodash provide a _.cloneDeep() function that offers a robust and well-tested solution 
// for deep cloning, handling various edge cases and data types.

// const _ = require('lodash');

// const original = { x: 5, y: { z: true } };
// const cloned = _.cloneDeep(original);

// cloned.y.z = false;
// console.log(original.y.z); // Output: true
// console.log(cloned.y.z);   // Output: false


// Key Considerations for Deep Copying:

// Functions: JSON.stringify() will remove functions. Recursive deep copy functions will generally skip them as well, as there's no meaningful way to "copy" the behavior of a function.
// Dates: JSON.stringify() will convert Date objects to ISO string format. You'll need to handle these specifically if you need to preserve the Date object type in the copy.
// Special Values: undefined, NaN, and Infinity are not handled consistently by JSON.stringify().
// Circular References: If your object graph contains circular references (an object referring back to itself), JSON.stringify() will throw an error. Recursive solutions need to handle this to avoid infinite loops (as shown in the recursive example using WeakMap).
// Performance: Deep copying can be computationally expensive, especially for large and deeply nested objects. Consider the performance implications in your application.
// Could you tell me more about what you were trying to do with "deep coy"? Knowing the context will help me provide a more accurate and helpful answer!