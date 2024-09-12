//Primitive - are stored in stack memory, and are passed by value

let name="kajal"
let anotherName = "rai"
console.log(name)
console.log(anotherName)


//Non - Primitive are stored in heap memory, and are passed by referenced

let object1=["kajal"]
let object2=object1;
object1[0]="Shanti"
console.log(object1)
console.log(object2)

//deep copy, shallow copy