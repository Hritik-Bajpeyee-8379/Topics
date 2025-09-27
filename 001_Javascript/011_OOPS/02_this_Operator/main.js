let person ={
    first_name:"Amit",
    last_name:"Kumar",
    full_name: function(){
        return this.first_name+" "+this.last_name;
    }
}

console.log(person.full_name())