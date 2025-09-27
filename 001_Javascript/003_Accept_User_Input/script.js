// Using Prmpt from Screen

// let name = window.prompt("Enter name");

// console.log(name);

// let name;
// document.querySelector("button").onclick =()=>{
//     name = document.getElementById("text").value;
//     document.getElementById("ne").textContent = `Hello ${name}`
// }

 // In Node js

 const readline = require("readline")

 const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
    
 });
 rl.question("Enter Your Name: ", (name)=>{
    console.log(`Hello ${name}`)
    rl.close()
 })