function task(name,time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name+" Done");
        },time);
    })
}

async function runTask(){
    let rst = await Promise.all([
        task("A",3000),
        task("B",6000),
        task("C",8000),
        task("D",4000),
        task("E",6000)
    ]);
    console.log(rst);
}

runTask();