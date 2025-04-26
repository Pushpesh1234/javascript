// const promiseCallback=function(resolve,reject){
//     // resolve("this message is resolved")
   
//     }


// const promises=new Promise( promiseCallback)

//  Promise.resolve(1).then((data)=> data+1).then((data)=>console.log(data))

// Promise.reject(1).then((data)=> data+1).then((data)=>console.log(data))

// Promise.reject("Error here").
// then((data)=>{ console.log("this one is ignored")} ,
// (error)=>{return error}

// ).catch((data)=>console.log(data))


Promise.reject("message not received").then(null,(error)=>{
    return `handled ${error}`

}).then((data)=>console.log(data))


 Promise.reject(1).then(null,(error)=>{
    return error+1

}).then((data)=>{console.log(data)})


Promise.reject("error").then(null,(error)=>{
    throw new Error("New Error")
}

).catch((error)=>console.log(error))


