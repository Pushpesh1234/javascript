class User{
    constructor(firstName,lastName,age){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age

}
birthYear(){
    return new Date().getFullYear()-this.age
}
fullName(){
    return `${this.firstName} ${this.lastName} ` 
}
}

class Student extends User{
constructor(firstName,lastName,age,standard){
    super(firstName,lastName,age)
    this.standard=standard

}
study(){
    return `${this.firstName} ${this.lastName} is studying in ${this.standard}`
}
}
const Student_1=new Student("Kavita","Krishnan","45","Poltical Activist")
console.log(Student_1.birthYear())
console.log(Student_1.standard)
console.log(Student_1.fullName())
console.log(Student_1.study())