const myCheckbox = document.getElementById("myCheckbox")
const view1 = document.getElementById("view1")
const view2 = document.getElementById("view2")
const view3 = document.getElementById("view3")
const mysumbit = document.getElementById("mysumbit")
const result = document.getElementById("result")
const paymnt = document.getElementById("paymnt")


mysumbit.onclick = function(){
    if (myCheckbox.checked) {
        result.textContent= "Subscriped"
        
    }
    else{
         result.textContent= "not"
    }
}
