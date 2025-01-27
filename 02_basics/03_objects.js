//literal ===> No Singleton
// Constructor ===> Singleton
// object.create

// Objects Literal
const mySym=Symbol("key1");
  const mySym1=Symbol("key2");

const jsUser={
    name:"Pushpesh",
    fullName:"Pushpesh Rawat",
   [mySym]:"myKey1",
   mySym1:"myKey2",
    age:23,
    location:"New York",
    Email_Id1:"Elon@google.com",
    isLoggedIn:false,
    "Email_Id2":"Grimes@musick.com",
    lastLoginDays:["Tuesday","Wednesday"],
    printInsideThis:function(){
      return `This is the message from ${jsUser.name}`
    }



};
console.log(jsUser.printInsideThis())
// console.log(jsUser.Email_Id1);
// console.log(jsUser["fullName"]);
// console.log(jsUser["Email_Id2"]);
// console.log(jsUser[mySym])
// console.log(typeof jsUser.mySym)
// console.log(jsUser.mySym1)
//   console.log(typeof(jsUser.mySym1))
// console.log(jsUser);
// jsUser.Email_Id1="pushpesh@deepseek.com";
// console.log(jsUser["Email_Id1"]);
// Object.freeze(jsUser);
// jsUser.Email_Id1="pushpesh@openAI.com"
// console.log(jsUser.Email_Id1);
// console.log(jsUser);

// jsUser.greeting=function(){
 // return " JSuser";
//     console.log("Hello World!");
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greeting);

// jsUser.greetingAgain=function(){
//   return ` Hello JSuser ${this.name}`;
// }

// console.log(jsUser.greetingAgain());