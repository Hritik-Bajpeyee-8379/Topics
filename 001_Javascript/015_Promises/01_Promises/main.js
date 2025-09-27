let mypromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let success = false;

        if (success) {
            resolve("Data Loaded Sucessfully");
        }
        else{
            reject("Failed To Load");
        }
    },2000)
})

mypromise.then(rst =>{
    console.log(rst);
})
.catch(err => {
    console.log(err);
})
.finally(()=>{
    console.log("Operation finished!!!");
})