// Control Flow

// comparison operator in JS


// const isUserLoggedIn=true
// if(isUserLoggedIn){

// }
// <, >,  >=, <= , ==, != , ===,!==


// if(2!=="2"){


//     console.log("Executed 4th Time")
// }

let balance=300;
if(balance >100) console.log("TEST"),console.log("test2");

const userLoggedIn=true
const debitcard=true
const loggedFromGoogle=true
const loggedFromEmail=false
if(userLoggedIn && debitcard){
    console.log("Allow to buy")
}

if(loggedFromGoogle || loggedFromEmail){
    console.log("User logged In")
}
