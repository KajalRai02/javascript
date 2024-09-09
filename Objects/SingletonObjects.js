

const user = new Object()
user.age=23
console.log(user)

const user2={}

user2.id="123"
user2.name="Kajal"

user2.details=
    {
        Userdetail:{
            localAddress:{
                city:"Gandhinagar"
            },
            PermanentAddress:{
                city:"Delhi"
            }
        },
        "full name":"Kajal Rai"
    }

console.log(user2)

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}

const obj3={obj1,obj2}
console.log(obj3)  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

console.log(Object.assign(obj1,obj2)) // assign - copies value to target object.
console.log(obj1)   //adds to obj1

//assign 

console.log(Object.assign({},obj1,obj2))  // adds to empty object provided [here the target object is {}]

//spread operator


console.log({...obj1, ...obj2})  //does not add to obj
console.log(obj1)


const obj5={1:1,2:2,3:3}
function sum(a1,b1,c1){
    console.log(a1+b1+c1)
}
sum(...Object.values(obj5))


//object destructure

const newObj={
    name:"Kajal",
    course:"JS",
    price:4500
}

console.log(newObj.course)

const {course:c1, price:p}=newObj  

console.log(c1)
console.log(p)


 