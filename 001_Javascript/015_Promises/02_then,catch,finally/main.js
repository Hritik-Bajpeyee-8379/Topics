let mypromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let success = true;
        if(success) resolve("Data Loaded");
        else reject("Network Error!!!");
    }, 3000);
});

mypromise.then(result=>{
    console.log(result);
})
.catch(err =>{
    console.log(err);
})
.finally(()=>{
    console.log("Done");
});