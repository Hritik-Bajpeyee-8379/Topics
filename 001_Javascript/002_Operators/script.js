//Arithmetic Operator

console.log("Arithmetic Operator")
let a = 10, b = 3;

console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b);
console.log(a % b); 
console.log(a ** b); 

let x = 5;
console.log(++x); 
console.log(x--); 


//Assignment Operators

console.log("Assignment Operators")

let num = 10;
console.log(num += 5); 
console.log(num -= 3); 
console.log(num *= 2);
console.log(num /= 4); 
console.log(num %= 5);
console.log(num **=2);


// Comparison Operators

console.log("Comparison Operators")

console.log(5 == "5");   
console.log(5 === "5"); 
console.log(5 != "5");  
console.log(5 !== "5");  

console.log(10 > 5);  
console.log(10 < 5);   
console.log(10 >= 10); 
console.log(5 <= 10); 


//Logical Operators

console.log("Logical Operators")

let age = 20;

console.log(age > 18 && age < 30); 
console.log(age > 25 || age < 18); 
console.log(!(age > 18));  

//Bitwise Operators

console.log("Bitwise Operators");

let c = 5;   // 0101 (binary)
let d = 3;   // 0011 (binary)

console.log(c & d);  // 1 (0001)
console.log(c | b);  // 7 (0111)
console.log(c ^ d);  // 6 (0110)
console.log(~c);     // -6 (inverts bits)

console.log(c << 1); // 10 (1010) left shift
console.log(c >> 1); // 2  (0010) right shift
console.log(c >>> 1);// 2  (unsigned right shift)



//Teranary Operator

console.log("Ternary Operator");

let age1 = 18;
let message = (age1 >= 18) ? "You are an adult" : "You are a minor";
console.log(message); 





// Question

// Write a program that:

// Stores a student’s marks (0–100).

// Uses comparison + logical operators to decide the grade:

// 90 and above → "A"

// 75–89 → "B"

// 50–74 → "C"

// Below 50 → "Fail"

// Use the ternary operator to check if the student has passed (marks >= 50) and print "Pass" or "Fail" accordingly.

let marks = 24;
let grade;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 75) {
  grade = "B";
} else if (marks >= 50) {
  grade = "C";
} else {
  grade = "Fail";
}

console.log(`Grade: ${grade}`);

// Pass/Fail using ternary
let result = (marks >= 50) ? "Pass" : "Fail";
console.log(`Result: ${result}`);


//Nested Ternary Operator

let grade1 = (marks >= 90) ? "A" 
           : (marks >= 75) ? "B" 
           : (marks >= 50) ? "C" 
           : "Fail";


console.log(`Grade:1 ${grade1}`);

