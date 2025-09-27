// Using readline, make a program that:

// Asks the user for their age

// If age ≥ 18 → print "You are an adult"

// Else → print "You are a minor"


// const readline = require("readline")

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter Age: ", (Age) => {
//     check = (Age >= 18) ? "Adult" : "Minor";
//     console.log(check)
//     rl.close()
// })




// Challenge mini-project:
// Make a simple calculator (Add, Subtract, Multiply, Divide) that:

// Asks the user for two numbers

// Asks which operation they want (+, -, *, /)

// Then prints the result

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter First Number : ", (a) => {
    rl.question("Enter second number: ", function (b) {
        rl.question("Enter Operands:(+,-,*,/)or (Add,Sub,Mul,Div) ", (O) => {
            a = Number(a);
            b = Number(b)
            if (O === '+' || O === "Add") {
                console.log(a+b);
            } else if (O === '-' || O === "Sub"){
                console.log(a-b);
            }
             else if (O === '*' || O === "Mul"){
                console.log(a*b);
            
            }else if (O === '/' || O === "Div"){
                console.log(a/b);
            }
            else{
                console.log( "You Typed Something Incorrect")
            }


            // Using Ternary Operator
            console.log((O === '+' || O === "Add")? a+b:
                        (O === '-' || O === "Sub")?a-b:
                        (O === '*' || O === "Mul")?a*b:
                        (O === '/' || O === "Div")?a/b:
                        "You Typed Something Incorrect"
                    
            )
             
            rl.close()
        })

    })
})