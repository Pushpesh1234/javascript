// const promise=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     const error=true
//     if(!error){
//         console.log("data is resolved")
//         resolve({name:"Pushpesh", email:"rawat2001@gmail.com"})
//     }
//     else{
//         console.log("data is rejected")
//         reject( "Something went wrong")
//     }
   
//     },1000)
// })

// promise.then((user)=>{
//     return user.username
// }).then((username)=>{
//     console.log(username)
// })
// .catch((error)=>{
//     console.log(error)
// }).finally(()=> console.log("rejcted  or resolved message finally"))
    


//     const promiseTwo=new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//         const error=false
//         if(!error){
            
//             console.log("data is resolved")
//             resolve({name:"Pushpesh", email:"rawat2001@gmail.com"})
//         }
//         else{
//             console("data is rejected")
//             reject(   Error("Something went wrong"))
//         }
       
//         },1000)
//     })
    
// promiseTwo.then((user)=>{
//     console.log(user)
//     return user.name

// }).then((username)=>{
//     console.log(username)
// })

const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("message is resolved connection established")
    ,1000})
})

const promiseAgain=promiseThree.then((data)=>{
    console.log(data)
    return "a new promise"
})
.then((data)=>{
    console.log(data)
})
console.log(promiseAgain)