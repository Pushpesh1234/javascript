// function encapsulation
const user={
    firstName:"Pushpesh",
    lastName:"Rawat",
    age:"23",
    birthYear(age){
        return new Date().getFullYear()-user.age
    }


}
const user1=user.birthYear()
// console.log(user1)


// factory function 
//Drawbacks: Redundant Method Creation (Memory Inefficiency)-birthYear method is recreated every single time createUser is called.

function createUser( firstName,lastName,age){
    const user={
        firstName,
        lastName,
        age,
        birthYear(){
            return new Date().getFullYear()-user.age
        }

    }
    return user
}

const user_1=createUser("Sachin","Das",34).birthYear()
// console.log(user_1)
const user_2=createUser("Vinod","Tendulkar",30).birthYear()
// console.log(user_2)
const birthYearUsedOne=createUser("dummyName","dummyLastName","dummyAge").birthYear
const birthYearUsedTwice=createUser("dummyName","dummyLastName","dummyAge").birthYear
// console.log(birthYearUsedOne===birthYearUsedTwice)

//Solving above drawback
// drawback of this is it inhilate the encapsulation principle of OOPS an d abstraction 
// calling birthYear() function from outside give NaN as pollute global space 
function birthYear(){
    return new Date().getFullYear()-this.age
}

const createUserPlus=function (firstName,lastName,age){
    const userPlus={
 firstName,
 lastName,
 age,
 birthYear:createUserPlus.commonMethods.birthYear
}
return userPlus
}


// Using function object and giving a common method property
createUserPlus.commonMethods={
    birthYear(age){
        return new Date().getFullYear()-this.age
    }
}

// console.dir(createUserPlus("sonam","Raul",21))
// const user_3=createUserPlus("Sanga","Singh",45)
// const user_4=createUserPlus("Sam","William",55)
// console.log(user_3.birthYear())
// console.log(user_4.birthYear())
// console.log(user_3.birthYear===user_4.birthYear)
//    console.log(createUserPlus("Rita","Morgan",37).birthYear())
// console.log(createUserPlus.commonMethods.birthYear(34))



// Prior  Constructor method
const  makeUser=function(firstName,lastName,age){

this.firstName=firstName
this.lastName=lastName
this.age=age
}
makeUser.prototype.birthYear=function(){
    return new Date().getFullYear()-this.age
}
// const user_5=new makeUser("Ram","Kumar",34)
// const user_6=new makeUser("Sita","Kumari",30)
// console.log(user_5.birthYear())
// console.log(user_6.birthYear())
// console.log(user_5.birthYear===user_6.birthYear)


function sayHi(typeName,typeLastName,typeAge){
    this.typeName=typeName
    this.typeLastName=typeLastName
    this.age=typeAge
}

sayHi.prototype.birthYear=function(){
    return new Date().getFullYear()-this.age
}
const Hi_1=new sayHi("AlienX","Dark",334)


