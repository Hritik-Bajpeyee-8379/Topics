class Animal{
    constructor(name){
        this.name = name;
    }
    makeSound(){
        return "Some Generic Sound";
    }
    eating(){
        return`${this.breed} Eating`
    }
}

class Dog extends Animal{
    constructor(name,breed,foood){
        super(name); //* Here name goes to Animal class
        this.foood = foood
        this.breed = breed;
    }
    makeSound(){
        return super.makeSound()+ " Woof! "; //* Here Super Calls Making sound Function on Animal then add woof

    }
    eating(){
        return super.eating()+ ` ${ this.foood}`; //* Here Super Calls Eating Function on Animal
    }
}

let d = new Dog("Tommy","Labrador","Chicken");

console.log(d.name);
console.log(d.makeSound());
console.log(d.eating());    1