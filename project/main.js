console.log("Learning Js Modules...");

// import power,{sum,sub,mulp} from "./calc.js";

// import power,{sum as add,sub as minus,mulp as product} from "./calc.js";

//import {default as yourName} from "./whoAmI.js";

// import {default as myName} from "./whoAmI.js";

// import myName from "./whoAmI.js";

// import  * as calc from './calc.js';

// import yourName from "./whoAmI.js";


// console.log(add(5,6),minus(8,4),power(6,5),power(2,3));
// console.log(calc.sum(5,6),calc.sub(8,4),calc.mulp(6,5));

// console.log(yourName("Pushpesh")); 


// ################################### combine js  ###########################################


import * as combine from './combine.js';

// console.log(combine.yourName("Rakesh"));
console.log(combine.calc.sum(4,5));
console.log(combine.yourName("Rahul Kumar"));