let tick=setInterval(()=>{
    console.log("Tick!!!!")
},1000)

setTimeout(() => {
    clearInterval(tick)
    console.log('Stopeed at 10 tick')
}, 10000);