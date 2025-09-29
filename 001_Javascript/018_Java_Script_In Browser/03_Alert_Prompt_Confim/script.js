alert("Hello User")

let name = prompt("Enter Your Nmae");


let isSure = confirm(`Is This A Right Name ${name}`);

if (isSure){ 
console.log(`Hello ${name}`);
}
else{
    console.log("You Declined It")
}