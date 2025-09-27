class BankAccount{
    #balance  // This is Private Property

    constructor(initialBalance){
        this.#balance = initialBalance;
    }
    deposit(amount){
        this.#balance += amount;
        return `Deposited : ₹${amount} New Balance: ₹${this.#balance}`;
    }
    withdraw(amount){
        if (amount > this.#balance) {
            return "Insufficient Balance";
        }
        this.#balance -= amount;
        return `Withdraw: ₹${amount} and Remaining Balance is: ₹${this.#balance}`;
    }
    checkBalance(){
        return `Current Balance: ${this.#balance}`;
    }
}

let account = new BankAccount(10000);

console.log(account.deposit(20000));
console.log(account.withdraw(20000000));
console.log(account.withdraw(20000));
console.log(account.checkBalance(20000));