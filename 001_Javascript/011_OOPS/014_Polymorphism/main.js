class Student{
    Studen_name(name){
        this.name = name
        return `The student ${this.name} is Pass`
    }
}

class Child extends Student{
    
    Studen_name(name){
        this.name = name
        return `The student ${this.name} is Fail`
    }
}

let s1 = new Student("Aman");
let s2 = new Child ("Riya");


console.log(s1.Studen_name())
console.log(s2.Studen_name()) //* Here student_name Overrides  The Parent class (Student class) Because its have same Function