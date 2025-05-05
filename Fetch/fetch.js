const fetchIt=fetch('https://dummyjson.com/products')
.then((data)=>data.json())
  .then((data)=>console.log(data))

    
// })

// fetch('https://dummyjson.com/products/add',{
//     method:"POST",   
// }).then((data)=>data.json()).then((data)=>console.log(data))


const request=new Request("/products")
console.log(request)

// const respone=new Response("/products/add")
// console.log(respone)