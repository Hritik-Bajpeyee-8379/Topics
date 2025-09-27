console.log("MATH CONSTANTS")

console.log(Math.PI)
console.log(Math.E);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);
console.log(" ");



console.log("ROUNDING FUNCTION")
console.log(Math.round(4.6));   //(nearest integer)
console.log(Math.floor(4.9));     // (down)
console.log(Math.ceil(4.1));     //(up)
console.log(Math.trunc(4.9));     //(remove decimals)
console.log("");


console.log("Absolute And Sign");

console.log(Math.sign(-12));
console.log(Math.sign(-0));
console.log(Math.sign(0));
console.log(Math.sign(+12));
console.log(Math.sign(12));
console.log(Math.sign(+0));

console.log("");
console.log(Math.abs(-12));
console.log(Math.abs(-0));
console.log(Math.abs(+12));
console.log(Math.abs(12));
console.log(Math.abs(0));
console.log("");

console.log("POWERS AND ROOTS");

console.log(Math.pow(2,3));
console.log(Math.sqrt(16));
console.log(Math.cbrt(27));

console.log("")

console.log("RANDOM")

console.log(Math.random());// O to 1
console.log(Math.floor(Math.random()*20))+1;// This Prints One Random number between (0 to <20 or 0 t0 19)
console.log(Math.floor(Math.random()*45))+1;// This Prints One Random number between (0 to <45 or 0 t0 44)
console.log(Math.floor(Math.random()*987))+1;// This Prints One Random number between (0 to <987 or 0 t0 985)


//Print 5 Random Numbers
for (let int = 0; int < 5; int++) {
    let num = Math.floor(Math.random() * 20) + 1;
    console.log(num );
}


