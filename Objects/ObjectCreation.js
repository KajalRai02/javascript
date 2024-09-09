//Creating an object using object literal syntax.
const Person={
    name:"Kajal",
    age:10
}
console.log(Person)

//creating an object through constructor
function Person2(name, age){
    this.name=name
    this.age=age,
    this.func=function walk(){
        return "The person  can walk"
    }
}
const c1= new Person2("Kajal", 23)
const c2= new Person2("Shanti", 24)

console.log(c1.func())