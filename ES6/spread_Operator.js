const numbers1=[4,5,6,7,5,9];
const numbers2=[10,4,58,65,45];
const numbers3=[90,45,33];
const combineNumbers=[...numbers1,...numbers2,...numbers3];
console.log(combineNumbers);


//Object Destructuring and Spreading both
 
const person={
    name:"John Doe",
    age:39,
    emailId:"user@google.com",
    address:"620/Bay Road"

}

const{name,age,emailId,address}=person;
console.log(name,'\n',age,'\n',emailId,'\n',address)

const anotherPerson={
    country:"Iran",
    occupation:"Market Consultant"
}

const combineInfo={...person,...anotherPerson}
console.log(combineInfo);


