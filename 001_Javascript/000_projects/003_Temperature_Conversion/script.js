if (true) {
    let a = 10;  // block scoped
    var b = 20;  // function scoped
}
console.log(b); // ✅ Works
console.log(a); 

