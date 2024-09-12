
//Ways to create a shallow copy:

//spreadSyntax
//Array.prototype.concat()
//Array.prototype.slice()
//Array.from()
//Object.assign()

// const obj1={
//     name:"Kajal",
//     list:["rollNo", "Address","Phone number"],
//     anotherobj:{
//         id:1,
//         fullName:"Kajal Rai"
//     }
// }
// console.log(obj1)

// const arr1=["Shanti",{list:["Diwali", "Holi"]}]

// console.log("Array = ",arr1)

// const obj2=obj1 // not a shallow copy or deep copy



//     1. Spread Syntax


//a. Object
// const obj3={...obj1}
// obj1.name="Shaheen"
// obj1.list[1]="hello"

// console.log("Object1 = ",obj1)
// console.log(obj3)


// // if u entirely replace the prototype , the changes will not be affect, the copies
// obj1.list=["id"]
// obj1.anotherobj={id:2}

// console.log("After changing the list and object entirely = ",obj1)
// console.log(obj3)

// //b. Array
// const arr3=[...arr1]
// console.log("Using spread in array = "+arr3)  // properly logs array content
// // If you want to see the array with its objects in string form:
// // const temp = JSON.parse(JSON.stringify(arr3))
//  const temp2=JSON.stringify(arr3)
// // console.log(typeof temp)
// // console.log(typeof temp2)

// console.log(temp2)



//          2.Array.prototype.concat()


// const obj1={
//     name:"Kajal",
//     list:["rollNo", "Address","Phone number"],
//     anotherobj:{
//         id:1,
//         fullName:"Kajal Rai"
//     }
// }


// const obj2=Array.prototype.concat(obj1)

// obj1.list[1]="Hello"
// console.log(obj1)

// console.log(obj2)


//             3. Array.from []



// const arr1=[1,{list:"first"}]
// const arr2=Array.from(arr1)

// arr1[1].list="second"

// console.log(arr1)

// console.log(arr2)


//               4. Object.Assign()


const obj1={
    name:"Shaheen",
    list:["hello","Gm"]
}

const obj2=Object.assign({},obj1)
obj1.name="Vidhi"
obj1.list[0]="hii"

console.log(obj1)
console.log(obj2)