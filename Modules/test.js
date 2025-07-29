const users=[{userName:"Punit",
              lastName:"Singh",
              emailId:"singhgamil.com"  
},
{userName:"Punit",
              lastName:"kumar",
              emailId:"singhgamil.com"  
},
{userName:"Punit",
              lastName:"Rana",
              emailId:"singhgamil.com"  
},
{userName:"Punit",
              lastName:"khatri",
              emailId:"singhgamil.com"  
},
{userName:"Punit",
              lastName:"Tiwari",
              emailId:"singhgamil.com"  
},
{userName:"Punit",
              lastName:"Aggarwl",
              emailId:"singhgamil.com"  
},
{userName:"Punit",
              lastName:"Goel",
              emailId:"singhgamil.com"  
}]

function getData(){
   let value=[]
    for(let i=0;i<users.length;i++){
      value.push(users[i].lastName)
   }
    // console.log(value)
    return value
 }

 console.log(getData())