let clk = document.getElementById("click")
const body = document.body

//*1 Click
clk.addEventListener("click",()=>{
    console.log("Button Clicked")
})

//*2Double clicked
clk.addEventListener("dblclick",()=>{
    console.log("Button Double Clicked")
})
//*3 Mouse Down
clk.addEventListener("mousedown",()=>{
    console.log("Mouse Gone down")
})
//*3 Mouse Down
clk.addEventListener("mouseup",()=>{
    console.log("Mouse Gone Up")
})

//*4 contextMenu
clk.addEventListener("contextmenu",()=>{
    console.log("You Clicked right Mouse Button")
})

//*5 Scrool
clk.addEventListener("wheel",()=>{
    console.log("Scrolling!!!")
})

//*5 mousemoLve
clk.addEventistener("mousemoLve",()=>{
    console.log("Mouse Moved")
})

