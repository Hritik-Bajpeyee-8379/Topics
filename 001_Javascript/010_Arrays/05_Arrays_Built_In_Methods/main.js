let num = [2,4,6,8,10,12,33,22,13,55,66,33,100];
let fruit = ["Mango","Pineapple","Lichi","Gauava","Apple"]


//** Adding Removing Elements

//* push()

// fruit.push("Bananna");
// console.log(fruit);

// num.push(14);
// console.log(num);

//* Pop()

// console.log(fruit.pop());
// console.log(num.pop());]


//* Unshift()

// fruit.unshift("Banana");
// num.unshift(14);

// console.log(fruit);
// console.log(num);


//* Shift()

// let first1=fruit.shift();
// let first2 =num.shift();

// console.log(first1);
// console.log(first2);


//* Splice()

// fruit.splice(1,3,"Blank","Blank","Blank");
// console.log(fruit)

// num.splice(1,3,"Blank","Blank");
// console.log(num);




//** Combining And Copying

//* Concat

// let c = fruit.concat(num);
// console.log(c);


//* Slice()


// console.log(num);
// console.log(num.slice(1,4))
// console.log(fruit);
// console.log(fruit.slice(1,4))

//** Searching()


//* Indexof()

// console.log(num.indexOf(8));
// console.log(fruit.indexOf("Lichi"));


//* Includes()

// console.log(num.includes(8));
// console.log(fruit.includes("Lichi"));

// console.log(num.includes(54));
// console.log(fruit.includes("Lichi3"));

//* find()
// console.log(num);
// let founnd = num.find(n=>n>10);
// console.log(founnd);



// //* findIndex()
// console.log(num);
// let founnd = num.findIndex(n=>n>10);
// console.log(founnd);


//** Iteration

//* Map()

// let doubled = num.map(n=>n*2);
// console.log(doubled);


//* Filter()

let fillter = num.filter(n=> n%2 ===0);
console.log(fillter);