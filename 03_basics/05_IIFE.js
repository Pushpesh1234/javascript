// Immediately Invoked Function Epression
//named IIFE
(function hereFunction(){
    console.log(`DB CONCTTED`)
})();

// "function decltarion bracket"=>()() <=Execution of declration bracket

( ()=>{
console.log("DB CONNECTED AGAIN")
})();

((name) =>{
 console.log(`DB CONNECTED TWO ${name}`)
})("Pushpesh")