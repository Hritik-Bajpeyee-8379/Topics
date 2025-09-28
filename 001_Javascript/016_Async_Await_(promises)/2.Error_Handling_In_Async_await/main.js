function FetchData(){
    return new Promise((_,reject)=>{
        setTimeout(() => {
            reject("Network Error!!!")
        }, 2000);
    })
}

async function Defo(params) {
try {
    let data = await FetchData();
    console.log("Data", data)
} catch (error) {
    console.log("Caught Error", error);
}
}

Defo();