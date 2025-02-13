// Reduce Method
const addNum=[1,2,3,4,5,6,7,8] 
const faddNum=[10,20,30,40,50]


const ftakeNum=faddNum.reduce(function (accumlator,currentValue) {
    // console.log(` accumlator=${accumlator} and currentValue=${currentValue}`)
    return accumlator+currentValue},0)
// console.log(ftakeNum)

const takeNum=addNum.reduce((accumlator,currentValue)=>accumlator+currentValue,0)
// console.log(takeNum)

const shoppingCart=[
    {course:"JS",
       price:1999 
    },
    {course:"Python",
        price:999},
    {course:"Data Analysis",
        price:4999},
    {course:"mobileDevCourse",
        price:12999}

]

const myCourseCost=shoppingCart.reduce((accu,item)=>

    accu + item.price
,0)
console.log(myCourseCost)

