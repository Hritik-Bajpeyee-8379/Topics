
// In Node,.js


const { Console } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function Guess(max, min) {
    let Guess_no = Math.floor(Math.random() * (max - min + 1)) + min
     let attempts = 0;  


    function ask() {
        rl.question("Enter Number: ", (num) => {
            attempts++

            let input_num = Number(num);
            


            if (num.toLowerCase() === 'e') {
                rl.close()
                console.log(`Nice Try The Guessed Number was ${Guess_no}`);
                return;

            }

            else if (input_num === Guess_no) {
                console.log(`Yes You Guess Correctt Random number was: ${Guess_no} in ${attempts} Attempts`);

                rl.close()
            }
            else if (input_num < Guess_no) {
                console.log("Your Guess is Too low!!!!")
                console.log("Enter E For Exit");
                ask()
            }

            else {
                console.log("Your Guess is Too HIgh!!!!")
                console.log("Enter E For Exit");
                ask()
            }

        });


    }
    ask()
}
rl.question("Enter Your Max: ", (a) => {
    rl.question("Enter Your Min: ", (b) => {

        a = Number(a)
        b = Number(b)
        let max = Math.max(a, b);
        let min = Math.min(a, b);


        Guess(max, min)

    });
});


// For Browser In Console

// let a = window.prompt("Enter The Start Number")
// let b = window.prompt("Enter The last Number")

// let max = Math.max(Number(a), Number(b))
// let min = Math.min(Number(a), Number(b))


// let Guess_no = Math.floor(Math.random() * (max - min + 1)) + min
// let c;

// do {
//     c = prompt("Enter Your Gueesed Number: ")

//     let c_num = Number(c)
//     if (c === 'e' || c === 'E') {

//         console.log(`Nice Try The Guessed Number was ${Guess_no}`);
//         break;

//     }

//     else if (c_num === Guess_no) {
//         console.log(`Yes You Guess Correctt Random number was: ${Guess_no}`);


//     }
//     else if (c_num < Guess_no) {
//         console.log("Your Guess is Too low!!!!")
//         console.log("Enter E For Exit");

//     }

//     else {
//         console.log("Your Guess is Too HIgh!!!!")
//         console.log("Enter E For Exit");

//     }

// } while (true);














// let a = window.prompt("Enter The Start Number");
// let b = window.prompt("Enter The Last Number");

// let max = Math.max(Number(a), Number(b));
// let min = Math.min(Number(a), Number(b));

// let Guess_no = Math.floor(Math.random() * (max - min + 1)) + min;

// let guess;

// do {
//     guess = prompt("Enter your guess (or E to exit): ");

//     if (guess === 'e' || guess === 'E') {
//         console.log(`Nice try! The number was ${Guess_no}`);
//         break;
//     }

//     let guessNum = Number(guess);

//     if (guessNum === Guess_no) {
//         console.log(`🎉 Correct! The number was: ${Guess_no}`);
//         break;
//     } else if (guessNum < Guess_no) {
//         console.log("Too low! Try again.");
//     } else {
//         console.log("Too high! Try again.");
//     }

// } while (true);
