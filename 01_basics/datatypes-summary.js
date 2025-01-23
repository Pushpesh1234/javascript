//#Primitive types (value)

// 7 types:String,Number,Boolean,null,undefined,Symbol,BigInt


// Refrence (Non-Primitive)
// Array,Functions,Objects

// variable does not have type but value have a type example

//  const score=100 (100 is a number type)

//  const isLoggedIn=false (false is a boolean type)

// let  useEmail;   (undefined is a undefined type)
// const anotherId= Symbol('123') (Symbol) (Symbol is a symbol type)
// const Id=Symbol('123')
// console.log(anotherId===Id);



// Bigint value type is bigint
// const bigNumber=1000000000000000n
// console.log(typeof(bigNumber)) 

// Arrays => value type is object
// const heroes=["Superman","Batman","Ironman"]

// Object => value type is object
// let myObj={
//     name:"Pushpesh",
//     age:23
 
// }
// Function=> type is Function orfunction object
// const myFunction= function(){
//     console.log("Hello World")
// }


// *********************************Memory Heap& Stack**************************************

// Stack(Primitive) & Heap(Non-Primitive)
// let myName="Pushpesh"
// let myhomeName=myName
// console.log(myhomeName)
// console.log(myName)
// myhomeName="Pappu"

// let user_1={
//     email:"Pgoogle.com",
//     upi:"user@ybl",
// }

// let user_2= user_1

// user_2.email="pr@google.com"

// console.log(user_1.email);
// console.log(user_2.email);
    
