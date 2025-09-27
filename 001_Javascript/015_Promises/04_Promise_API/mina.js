//** 1. PROMISE (Constructor) */

// let p = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Done !!");
//     },2000)
// });
// p.then(v => console.log(v));


//**2. PROMISE.resolve(Value)*/

// Promise.resolve("Ok").then(v=>console.log(v));


//**3. Promise.reject */

// let p1 =Promise.reject("Bad")
// p1.catch(err=> console.log("Caught:",err))



//**4.Promise.prototype.Then */

// let p2 = Promise.resolve(2);
// p2.then(x=> x*3)
// .then(x=>x+2)
// .then(x => console.log(x));


//**5. Promise.prototype.catch */

// let lastValue;

// let p3 = Promise.resolve(2);

// p3.then(x => {
//   lastValue = x * 3;
//   return lastValue;
// })
// .then(x => {
//   console.log("Before error:", x); 
//   return Promise.reject("Error Caught!!!");
// })
// .catch(err => {
//   console.log("Caught error:", err);  
//   return lastValue;                   
// })
// .then(x => {
//   console.log("After recovery:", x);  
// });






//**6. promise.prototype.finally  */



// let lastValue;

// let p4 = Promise.resolve(2);

// p4.then(x => {
//   lastValue = x * 3;
//   return lastValue;
// })
// .then(x => {
//   console.log("Before error:", x); 
//   return Promise.reject("Error Caught!!!");
// })
// .catch(err => {
//   console.log("Caught error:", err);  
//   return lastValue;                   
// })
// .then(x => {
//   console.log("After recovery:", x);  
// })
// .finally(()=>{
//     console.group("Done");
// })




//**7.Promise.All */

// Promise.all([
//      new Promise ((res,rej) =>{
//         res(1)
//     }),
//     new Promise (res=>{
//         setTimeout(() => {
//             res(2)
//         }, 4000);
//     }),

        //* Its a reject
     //* Promise.reject("Opps"),
//      Promise.resolve(4)
    
// ])
// .catch(err => console.log(err))
// .then(arr => console.log(arr));


//** 8. promise.allSettled */

// Promise.allSettled([
//      new Promise ((res,rej) =>{
//         res(1)
//     }),
//     new Promise (res=>{
//         setTimeout(() => {
//             res(2)
//         }, 4000);
//     }),

        
//      Promise.reject("Opps"),
//      Promise.resolve(4)
    
// ])

// .then(arr => console.log(arr));


//**9Promise race */

// Promise.race([
//     new Promise((res,_)=>{
//         setTimeout(() => {
//             res("1 promise")
//         }, 4060);
//     }),
//     new Promise((_, reject) => {
//         setTimeout(() => {
//             reject("2 promise (But Reject)")
//         }, 4080);
//     }),
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise 3 ")
//         }, 7000);
//     })
// ]).then(v => console.log("Resolve Won:",v))
// .catch(e=> console.log("Reject Won:",e))

//**9Promise race */

Promise.any([
    new Promise((res,rej)=>{
        setTimeout(() => {
            rej("1 promise")
        }, 4060);
    }),
    new Promise((_, reject) => {
        setTimeout(() => {
            reject("2 promise (But Reject)")
        }, 4080);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 3 ")
        }, 7000);
    })
]).then(v => console.log("Success :",v))
