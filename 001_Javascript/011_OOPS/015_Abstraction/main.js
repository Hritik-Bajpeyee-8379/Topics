class Shape{
    constructor(){
        if (this.constructor === Shape) {
            throw new Error ("Shape is Abstract and Can't Be Created Directly");
        }
    }
    area(){
        throw new Error("Method Area must be Imnplemented");
    }

}

class Rectangle extends Shape{
    constructor(width,height){
        super();
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width*this.height;
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    area(){
        return Math.PI* Math.pow(this.radius, 2)
    }
}

let r = new Rectangle(10,5);
let c = new Circle(7);


console.log(r.area());
console.log(c.area());
