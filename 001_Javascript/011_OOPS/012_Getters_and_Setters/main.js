class Student{
    constructor(name){
        this.name = name;
    }

//* Getter
get name(){
    return this._name;
}

//* Setter
set name(newName){
    this._name = newName
}

}

let s1 = new Student("Hritik"); //*Getter used here
console.log(s1.name);

s1.name = "Divyaa" //* setter is called
console.log(s1.name) 

