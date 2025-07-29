
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
},
{userName:"Punit",
              lastName:"Singh",
              emailId:"singhgamil.com"  
},
{userName:"Punit",
              lastName:"Singh",
              emailId:"singhgamil.com"  
},
{userName:"Punit",
              lastName:"Singh",
              emailId:"singhgamil.com"  
},
{userName:"Punit",
              lastName:"Singh",
              emailId:"singhgamil.com"  
},
{userName:"Punit",
              lastName:"Singh",
              emailId:"singhgamil.com"  
},
{userName:"Punit",
              lastName:"Singh",
              emailId:"singhgamil.com"  
},
{userName:"Punit",
              lastName:"Singh",
              emailId:"singhgamil.com"  
},
{userName:"Punit",
              lastName:"Singh",
              emailId:"singhgamil.com"  
},
{userName:"Punit",
              lastName:"Singh",
              emailId:"singhgamil.com"  
}
     
]

const newName="Vikas Prajapati"
const newNames_1="Rahul Vikas"
const newNames_2="Radha Yadav"
export{users,newName,newNames_1 as names_1,newNames_2} //Named Export
// export default  users[0].userName
 // function

 export default function getData(){
   let value=[]
    for(let i=0;i<users.length;i++){
      value.push(users[i].lastName)
   }
    
    return value
 }
 console.log("hello first")