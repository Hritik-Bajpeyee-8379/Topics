function fetchNumber(){
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve(42)
        },2000)
    });
}

async function demo(){
    let num = await fetchNumber();
    console.log("Results:", num);
     console.log("Fetching.....");
}
demo()

//* Not Understandable