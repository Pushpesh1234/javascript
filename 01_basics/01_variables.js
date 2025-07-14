const accountId = 1233345
let accountEmail= "rawat@gmail.com"
var accountPassword="1234"
 accountCity="delhi"
// accountId=345556 not allowed
accountEmail="pushpesh@gamil.com"
accountPassword="234"
accountCity="Mumbai"
let accountState;
console.log(accountId);
console.log([accountId,accountEmail,accountPassword,accountCity,accountState])


/* not use var because issue in blockscope and functional scope */

/*     var keyword and simple variable */
var x=5;
var x=56
console.log(x)
// let y=6;
let y=45;
const z=9;

q=7;
// y=69;
// x=699;
console.log(x,y,z);

function f1(){
var x2=2;
let x1=1;
const x3=4;
x4=8;
console.log()

}
f1();
// console.log();
const num=89;
// num=89;
// console.log(num);
let num2=67;
num2=90;
console.log(num2);
if(true){
    var ex=834;
    let ex2=786;
    const ex3=566;
    ex4=900;

}
console.log(ex4)
// hello;
// hello=67;
console.log(hello)