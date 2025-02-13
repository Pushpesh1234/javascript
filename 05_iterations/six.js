const num=[1,2,3,4,5,6,7,8]

// const numTaker=num.map((item)=>  item+1)
// console.log(numTaker)

// Chaining

const value=num.map((item)=>item*10).map((item)=>item+1).filter((item)=>item>=42)
console.log(value)