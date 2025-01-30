// funcction with declration

function myFirstFunction(){
    // console.log(" Function by Pushpesh")
    return " this output by myFirstFunction"
}
      myFirstFunction()
      myFirstFunction
// console.log(myFirstFunction())

function secondFunction(number1 ,number2){
    // console.log(" Sum of these two numbers=")
    let sumNumber=number1+number2
    return sumNumber

}
// let sumNumber=secondFunction(4 , 6)
// console.log(sumNumber)



// function with expression
const loginUserMessage=function(username){
    if(!username){
        // console.log("please enter a username")
        return 
    }
   return ` ${username} is logged in`
}

console.log(loginUserMessage("Pushpesh"))
console.log(loginUserMessage(" "))
console.log(loginUserMessage())


function myFunc(value1 , value2){
 return (value1+value2)

}
console.log( myFunc(3 , null))
console.log(myFunc(4 , "a"))
console.log(myFunc())
console.log(myFunc(6," "))
console.log(myFunc(7,"8"))




