function greet(name, callback) {
    callback() //* Here This Call Back calls sayBye Function
    console.log("Hello " + name);

}

function sayBye() {
    console.log('GoodBye!!');
}

greet("Alex", sayBye)


//** Asynchronous Function

console.log("Green");

setTimeout(() => {
    console.log("3 sec");
}, 3000)

console.log("WHAT!!!!");



//* CallBack Example
function Hello(green) {
    green()
    console.log("yes2")
}
function no(){
    console.log("Yes")
}

Hello(no)