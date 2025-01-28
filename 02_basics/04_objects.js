const tinderUser= new Object();
// const tinderUser={};
tinderUser.id="123abc";
tinderUser.emailId="Pushpesh@microsoft.com";
tinderUser.isLoggedIn=false
// console.log(tinderUser);


const regularUser={
    email:"Elon@Tesla.com",
    fullName: {
        userfullname:{
            firstname:"Elon",
            lastname:"Musk",
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName?.userfullname.firstname);


const obj1={
    1:"a",
    2:"b",
    3:"c",

}

const obj2={
    4:"a",
    5:"b",
    6:"c",
}

 //const obj3={obj1,obj2};


// const obj3=Object.assign(obj1,obj2);
 const obj3=Object.assign({},obj1,obj2);
//  const obj3={...obj1,...obj2}
// console.log(obj3);

const user=[
{
    id:1,
    emil_id:"rob@google.com",
},
{
    id:2,
    emil_id:"kaka@google.com",
},
{
    id:3,
    emil_id:"jane@google.com",
},
{
    id:4,
    emil_id:"suraj@google.com",
},
]
//  console.log(user[0].emil_id);
//  console.log(user[1].emil_id);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object .values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// ---------------------------------Object De-Construction-----------------------------------------------
// SUMMARRY :

// 1. To extract value from object => const {keyname} = object name;
// 2. To rename keyname for using more times => const {keyname: new name } = object name;
// 3. JSON is a collection of key-value pairs just like object and a JSON array is an ordered list of value.

const course={
    courseName:"javascript",
    courseInstructor:"Pushpesh",
    price:99
};

const { courseName, courseInstructor:instructor  }=course;
// console.log(instructor);

{
// "name":"Pushpesh",                     JSON API
// "CourseName":"AI with machine learning",
// "courseFee":4999


}

// [               Array form of API
//     {}
//     {}
//     {}
//     {}
// ]