class Student{
    constructor(name,marksarray){
        this.name = name;
        this.marksarray= marksarray
    
    }
    getAverage(){
         let Total = this.marksarray.reduce((sum,marks)=> sum+marks,0)/this.marksarray.length;
         return `Name: ${this.name} and Its Result Average is : ${Total}`
    }
    
}

let s1 = new Student("Hritik",[33,55,66,88,44]);
let s2 = new Student("Abhishek",[98,25,61,55,22]);
let s3 = new Student("John",[33,57,61,86,22]);
let s4 = new Student("Mohan",[43,55,66,38,44]);

console.log(s1.getAverage());
console.log(s2.getAverage());
console.log(s3.getAverage());
console.log(s4.getAverage());
