// Array specifics loop
// for of used in objects

// ["", "",""]
// [{},{},{}]

// for(const iterator of Object){}
const arr=[1,2,3,4,5,6,7]
for( const num of arr){
    console.log(num)
    console.log(arr)
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

//Maps
const map=new Map
map.set('IN',"India")
map.set('US',"United State of America")
map.set('JAP',"Japan")
map.set('IN',"India")

// console.log(map)

for(const [key,value] of map){
    console.log(key,':' ,value)
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
