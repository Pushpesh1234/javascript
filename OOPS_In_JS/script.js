// Functional Programming

// const user={
// firstName:"Arjun",
// lastName:"Tendulkar",
// age:"23",
 
// }



// function birthYear(age){
//    return  new Date.getFullyear()-age
// }

// birthYear(user.age)

//to make it Object oriented we need to encapsulate the function inside the object
// const user={
// firstName:"Arjun",
// lastName:"Tendulkar",
// age:"23",
//  birthYear(age){
//     console.log(user.age)
//    return  new Date().getFullYear()-user.age
// }
// }
// result=user.birthYear(24)
// console.log(result)

//Factory function/
// function createUser(firstName,lastName,age){
//    const user={
//    firstName,
//    lastName,
//    age ,
//    birthYear(){
//       return new Date().getFullYear()-user.age
//    }
// }
//    return user
// }
// const user1=createUser("Arjun","Tendulkar",24)
// console.log(user1.birthYear())
// const user2=createUser('Aman','Singh',22)
// console.log(user2.birthYear())

// console.log(user1.birthYear===user2.birthYear) // as the function doing same functionality for the objects but occupying
//  new memory for every object

//Solving above problem
// function birthYear(){
//    console.log(this)
//       return new Date().getFullYear()-this.age
//    }
// function createUser(firstName,lastName,age){
//    const user={
//    firstName,
//    lastName,
//    age ,
//   birthYear
// }
//    return user
// }
// const user3=createUser("Simran","kaur",32)
// console.log(user3.birthYear())

// const user4=createUser("Deepak","Kumar",23)
// console.log(user3.birthYear===user4.birthYear)// this method break the abstrication and encapsulation rule because of the
// birthYear() function 

// Solution


// function createUser(firstName,lastName,age){
//    const user={
//    firstName,
//    lastName,
//    age ,
//   birthYear:createUser.commonMethods.birthYear
// }
//    return user
// }

// createUser.commonMethods={
//     birthYear(){
//        return new Date().getFullYear()-this.age
//    }
// }
// const user5=createUser("Jasmine","Singh",19)
// console.log(user5.birthYear())

// using constructor
function createUser(firstName,lastName,age){
this.firstName=firstName
this.lastName=lastName
this.age=age
}

//protype
createUser.prototype.birthYear=function(){
   return new Date().getFullYear()-this.age
}

const user6=new createUser("rahul","Khatri",12)
console.log(user6.birthYear())

