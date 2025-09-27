function Student(name,age,Course){
    this.name = name;
    this.age = age;
    this.Course = Course;
    this.greet = function(){
        return `Hi,I am ${this.name} and I Study ${this.Course}`
    }
}

//* Creating Objects Using Constructor

let s1 = new Student("Rahul",20,"JavaScript");
let s2 = new Student("Neha",22,"Python");
let s3 = new Student("Mohan",25,"C++");


console.log(s1.greet());
console.log(s2.greet());
console.log(s3.greet());