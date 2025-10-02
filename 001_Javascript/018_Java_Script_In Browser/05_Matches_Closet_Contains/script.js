//*1. Matches

let p = document.getElementById("para1")

console.log(p.matches("#para1")); //out- true
console.log(p.matches(".text")); //out- true
console.log(p.matches(".notxt")); //out- true
console.log(p.matches("p")); //out- true
console.log(p.matches("div")); //out- false


//* 2. Closet

let container = p.closest(".container");
console.log(container);

let inner = p.closest(".inner");
console.log(inner);

let div = p.closest("div")
console.log(div)

let pa = p.closest("p")
console.log(pa)

let img = p.closest("img")
console.log(img)






//* 3. Contains

console.log(container.contains(p));
console.log(p.contains(container));
