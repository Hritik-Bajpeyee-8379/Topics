function delay(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ()
        }, 2000);
    })
}

async function Steps (){

    await delay(5000)
    console.log("Step 5");

    await delay (4000)
    console.log("Step 4");

    await delay (2000)
    console.log("Step 2");
    
    await delay (3000)
    console.log("Step 3");

}

Steps()
console.log("Step 1");