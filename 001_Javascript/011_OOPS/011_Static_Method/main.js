class Calculator{
    static add(a,b){
        return a+b;
    }
    static multiply(a,b){
        return a*b;
    }
    static Substract(a,b){
        return a-b;
    }
    static divide(a,b){
        if (b === 0) {
            console.log("B cant be 0 or less than 0");
            
        }else{
            return a/b;
        }
        
    }
}


console.log(Calculator.add(2,4));
console.log(Calculator.multiply(2,4));
console.log(Calculator.Substract(2,4));
console.log(Calculator.divide(2,4));
console.log(Calculator.divide(2,0));