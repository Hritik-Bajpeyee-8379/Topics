function Student(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}

//* Adding method Using ProtoType

Student.prototype.greet = function(){
    return `Hi I Am ${this.name} and I Am ${this.age} And My Salary is: ₹${this.salary}` ;

};

let S1 = new Student('Rahul',32,30000);
let S2 = new Student('Moahn',22,40000);
let S3 = new Student('Riya',30,60000);

console.log(S1.greet())
console.log(S2.greet())
console.log(S3.greet())