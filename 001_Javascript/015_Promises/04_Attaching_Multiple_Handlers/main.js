let mypromise = new Promise((reolve,reject)=>{
    setTimeout(()=>{
        reolve("hello");
    },1000)
   
});
let mypromise2 = new Promise((reolve,reject)=>{
  
    setTimeout(() => {
        reject("Something Went Wrong!!!");
    }, 2000);
});

mypromise.then(msg => console.log("Handler 1: ",msg));
mypromise.then(msg => console.log("Handler 2: ",msg));

mypromise2.catch(err => console.log("Handler 1: ",err));
mypromise2.catch(err => console.log("Handler 2: ",err));