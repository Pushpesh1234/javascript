// Objects in function


const shopItems=function(item_1, item_2, ...collectExtraItem){
   return collectExtraItem
}
console.log(shopItems(4,5,6,7,8,9))

const anotherExample=function(...rest){
  return rest
}
console.log(anotherExample(5,6,7,9,7))


const obj={
    name:"Sonu",
    Email_id:"udit@gmail.com",
}

function myObjectFunction(inObj){
    console.log( ` my name is ${inObj.name} and my Email id is ${inObj.Email_id}` )
    return ` my name is ${inObj.name} and my Email id is ${inObj.Email_id}`

}

// console.log(myObjectFunction(obj))
myObjectFunction(
    {
    name:"Kavita",
    Email_id:"kavita@gmailcom"
}
)


// Passing the array in function 

const Arr=[2,3,4,5,6]
function arrFunction(arr){
 return arr[3]
}
console.log(arrFunction(Arr))
console.log(arrFunction( [2,7,600,544,432]))