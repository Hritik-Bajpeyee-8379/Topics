new Promise((resolve)=>{
    resolve("Start");
})
.then(msg =>{
    console.log("Step 1",msg);
    return Promise.reject("Network Failure");
})
.catch(err=>{
    console.log("Caught:",err);
    return "Recovered Value";
})
.then(msg =>{
    console.log("Step 2 After Recovery :", msg);
    return msg + " More work";
})
.then(final =>{
    console.log("Final", final);
});
