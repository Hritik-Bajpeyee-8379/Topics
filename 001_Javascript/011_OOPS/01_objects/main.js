let student ={
    name : "Rahul",
    age:20,
    Course:"JavaScript",
    greet: function(){
        return `Hello, My name is ${this.name}`
    }

}


//* Accessing Properties

//* 1st Way
console.log(student.name);
//* 2nd Way
console.log(student["age"]);


//* Calling Methods
console.log(student.greet());

