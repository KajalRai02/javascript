// //Immediately Invoked Function Expressions (IIFE)

// //An IIFE is a function that runs as soon as it is defined
// //It is done to avoid pollution by global scope.
// //After iife runs, its internal variables and functions  won't exist in the global scope.

// //()-> call to the function

// (function func1(name){
//     console.log(`DB Connected to ${name}`)
// })("mongoDB");

// //important to give semicolon at end to end of iife. 
// //As js misinterprets them as a single expression , leading to syntax error.

// (()=>{
//     console.log("Hello")
// })();



// (function f1(name){console.log(`hello ${name}`)})("kajal");

// (function f2(name){
//     console.log(`hello ${name}`)
// })()
// // f2("kajal");



// (function f3(name){console.log(`hello ${name}`)})("kajal");


const arr1=[{
    "id":1,
    "name":"Smeet"
},{
    "id":2,
    "name":"Smeet"
},
{
    "id":3,
    "name":"Smeet"
}]


const newarr=[]
arr1.forEach( (items)=> (newarr.push({
    id:items.id,
    value:"Person"

})))
console.log(newarr)



const res= arr1.map( (items)=>({
    id:items.id,
    value:"Person"
}))
console.log(res)