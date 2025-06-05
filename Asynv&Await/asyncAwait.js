// Await can work alone without a async function but only 
// const url="https://dummyjson.com/products"
const url1='https://dummyjson.com/test'
// const response=await fetch(url)
// const data =await response.json()
// console.log(data) 
// console.log('hello')
// output:Uncaught SyntaxError: await is only valid in async functions 
                     //and the top level bodies of modules (at asyncAwait.js:3:16).
                
             // setting script type module get away with error & run the code without async function just
            //  with await        

//   Important:Using type= module   make other scope unavailable for all the variables and functions
//             used this script therefore nothing will show in console of dev tools but only in 
//             module scope        (doubt)    
async function request(){
const reply=await fetch(url1)
const info=await reply.json()
return info

}

request().then(console.log) 
// same as
 request().then((info)=>console.log(info))

