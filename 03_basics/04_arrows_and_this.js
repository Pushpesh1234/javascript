// const user={
//     username:"Pushpesh",
//     greetUser(){
//         console.log(`${this.username} , hello welcome`)
//         console.log(this)
//     }
// }
// user.greetUser()
// user.username="Pankaj"
// user.greetUser()
// console.log(this)


const standAloneFunction=function(){
    const username="Pushpesh"
    // console.log(this)
    console.log(this.username)
}

standAloneFunction()

function standAloneFunction1(){
    const username="Pushpesh"
    console.log(this)
    console.log(this.username)
}

standAloneFunction()

const arrowFuncrion= () =>{
    let username="Pushpesh"
    console.log(this)
    console.log(this.username)
}
arrowFuncrion()

const arrowFuncrion1= (num1 ,num2) =>{return num1+num2
}

arrowFuncrion1()
const arrowFunction2= (num1,num2) => num1+num2;


const arrowFunction3= (num1,num2) => (num1+num2)

const arrowFunction4= (num1,num2) => ({username:"Pushpesh"})
