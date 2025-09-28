function divide(a,b) {
    if (b === 0) {
        throw new Error("Didnt You Study Math, Divisible by 0 is No0ty allow");
    }
    console.log(a / b);
}

try {
    let a = 10, b = 0;
    divide(a,b)



} catch (error) {
    console.log("Error Caught: ",error);
}
finally{
    console.log("I run No Matter Its Error or it Not")
}