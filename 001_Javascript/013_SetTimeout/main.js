function greet(){
    console.log("Heloo!");
}

setTimeout(greet,10000)

setTimeout(()=>{
    console.log("Wait 5 sec");
},5000)


//**Question Write a JavaScript program that prints the numbers 1 to 5, where each number appears 1 second apart (so 1 appears after 1 second, 2 after 2 seconds, and so on). */

for(let i =1 ; i<= 5;i++){
    setTimeout(()=>{
        console.log(i)
    },i*1000)
}
for(let i =5 ; i>= 0;i--){
    setTimeout(()=>{
        console.log(6-i)
    },i*1000)
}