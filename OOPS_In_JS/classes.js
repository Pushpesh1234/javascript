// Calsses in Js
class Creatuser{
    #age
    constructor(firstName,lastName,age){
        this.firstName=firstName
        this.lastName=lastName                  // age will show result only where #age is written like inside this 
        this.#age=age                           // constructor function.If it access from outside where age is not defined
       
        // console.log(firstName,lastName,age)  // using user1.age it shows error use #age outside the in the class
    } 
     #hi="hello world"                           // it print undefined as it is obvious and  also use  # age in function like
    birthYear(){                 
        console.log(this.hi)                    //birthYear & fullName show it can be accessed by them. 
     return new Date().getFullYear()-this.#age
    }
    fullName(){
        return this.firstName + ' ' + this.lastName

    }
}

//  Creatuser.prototype.birthYear=function(){
//   return new Date().getFullYear-this.age 
//  }

//  Creatuser.prototype.fullName=function(){
//       return this.firstName + '' + this.lastName
//  }


 const user1=new Creatuser("Aman","Kumar",32)
 const user2=new Creatuser("Rakhi","Kaur",22)
//  user1.age=56
//  user1.age=89
//  console.log(user1.age)
 console.log(user1.birthYear())
//  console.log(user1.fullName())
//  console.log(user2.birthYear())
//  console.log(user2.fullName())