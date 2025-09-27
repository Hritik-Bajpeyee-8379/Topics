const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let balance = 1000;

function askagain() {
    rl.question("Enter your Choice (1=Check, 2=Deposit, 3=Withdraw, 4=Exit): ", (choice) => {
        choice = Number(choice);

        if (choice === 4) {
            console.log("Goodbye!");
            rl.close();
        } 
        else if (choice === 1) {
            console.log(`Your balance is: ${balance}`);
            askagain();
        } 
        else if (choice === 2) {
            rl.question("How much to deposit? ", (deposit) => {
                deposit = Math.floor(Number(deposit));
                balance += deposit;
                console.log(`Your new balance is: ${balance}`);
                askagain();
            });
        } 
        else if (choice === 3) {
            rl.question("How much to withdraw? ", (withdraw) => {
                withdraw = Math.floor(Number(withdraw));
                if (withdraw <= balance) {
                    balance -= withdraw;
                    console.log(`Your new balance is: ${balance}`);
                } else {
                    console.log("❌ Insufficient funds!");
                }
                askagain();
            });
        } 
        else {
            console.log("Invalid choice, try again.");
            askagain();
        }
    });
}

// Start the ATM
askagain();


