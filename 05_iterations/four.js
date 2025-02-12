const myObject={
    JS:"Javascript",
    CPP: "C++ Progmmaging",
    rb:"ruby"
}

for(const key in myObject){
    // console.log(key)
    // console.log(myObject[key])
    // console.log(`${key} shortcut for ${myObject[key]}`)
}


const programm=["JS","C","Swift","PHP"]
for(const arr in programm){
    // console.log(arr)
    // console.log(programm[arr])
}

// const map= new Map                      Non Iterable in for in loop
// map.set('IN',"India")
// map.set('US',"UNITED STAE OF America")
// map.set('FRA',"FRANCE")
// for(const key  for in map){
//     console.log(key)
// }

// for each  loop is a higher order loop
//  It is ingrained in loop property

const coding=["JS","C++","PHP","Java"]
coding.forEach(function (lanaguage){
    // console.log(lanaguage)
})

coding.forEach((item)=>{
    // console.log(item)
})

function printMe(item){
    // console.log(item)

}

coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
// console.log(item,index,arr)
// })

const myCoding=
[{lanaguageaName:"javascript",
    filename:"JS"
},
{lanaguageaName:"Python",
    filename:"Py"
},
{
lanaguageaName:"Javascript",
    filename:"JS"
}
]
myCoding.forEach((item)=>{{
    console.log(item.lanaguageaName)
}
})













