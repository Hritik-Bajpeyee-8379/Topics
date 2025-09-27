class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduction(){
        return `Hi  I am ${this.name} AND I am ${this.age} Years old`;
    }
}


let p1 = new Person("Aman",33);
let p2 = new Person("Mohan",23);
let p3 = new Person("Neha",34);
let p4 = new Person("Riya",44);

console.log(p1.introduction());
console.log(p2.introduction());
console.log(p3.introduction());
console.log(p4.introduction());
