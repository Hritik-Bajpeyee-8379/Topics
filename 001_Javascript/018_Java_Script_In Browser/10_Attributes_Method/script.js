//**01 GetAttribute()
let lnk = document.getElementsByClassName("Not1");
console.log(lnk[0].getAttribute("href"));//expl- Here Lnk [0] because it choose class elements of first
console.log(lnk[0].getAttribute("id"));
console.log(lnk[1].getAttribute("id"));//expl- Here lnk[1] , selecting Not1 but second elements
console.log(lnk[0].getAttribute("class"));
console.log(lnk[1].getAttribute("class"));

//**02 Set Atrribute 

let set = document.getElementsByClassName("Set")

set[0].setAttribute("href","https//set") //expl- This Change or set the attribute setAttribute("attributename","value")
console.log(set[0].getAttribute("href"))

//**3 hasAttribute()

console.log(lnk[0].hasAttribute("alt")) //expl - If it has Atrribute it Shows true
console.log(lnk[0].hasAttribute("id"))
console.log(lnk[0].hasAttribute("target"))

//**4 removeAtribute

lnk[0].removeAttribute("target")
console.log(lnk[0].hasAttribute("target"))

//**5 Attribute Property

for(let arr of lnk[0].attributes){
    console.log(arr.name+ "="+ arr.value) //expl- Gives All Attribute of element
}


