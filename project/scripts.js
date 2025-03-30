
// Static import
// import {night, evening,afternoon,morning} from './greeting.js';

// night();
// evening();
// afternoon();
// morning();


// Dynamic import


// const {night,evening,afternoon,morning}=await import("./greeting.js");



// night();
// evening();
// afternoon();
// morning();


const promises=Promise.all(
[
await import('./greeting.js'),
await import('./calc.js')
]
);

console.log(promises);


promises.then(result =>
   { console.log(result)
    console.log(result[0].night());
    console.log(result[1].sum(4,5));
   }

)