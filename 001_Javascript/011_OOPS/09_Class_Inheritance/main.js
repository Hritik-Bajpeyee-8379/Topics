class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    move() {
        return `${this.brand} is Moving`
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model
 
    }
    details(){
        return `${this.brand} is ${this.model}`; 
    }
}

let c1 = new Car("Mahindra","Scorpio");
let c2 = new Car("Hundai","Creta");

console.log(c1.move());
console.log(c1.details());

console.log(c2.move());
console.log(c2.details());