function fetchNumber(){
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve(42)
        },4000)
    });
}
function eg(){
    console.log('i dont wait')
}
async function demo(){
    let num = await fetchNumber();
    console.log("Results:", num);
    console.log("Fetching.....");
}
demo()
eg()

//* Not Understandable