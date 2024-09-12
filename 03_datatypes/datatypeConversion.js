let score =33
let stringScore=String(score);

console.log(typeof score)
console.log(typeof stringScore)


let a=""
console.log(typeof a)  //string

let b;
console.log(typeof b)   //undefined


let value1=null
console.log(typeof value1)   //object

let value2=NaN
console.log(typeof value2)   //number

let value3=undefined
console.log(typeof value3)   //undefined


let isAvailable=1;
let check =  Boolean(isAvailable)

console.log(typeof isAvailable)   //number
console.log(typeof check)         // boolean


//************************************operations*****************************************

console.log(1+2)            //3

console.log(1+"2")          //12

console.log("1"+2)          //12

console.log(1+"2"+2)        //122

console.log(1+2+"2")         //32

console.log(+true)           //1


//console.log(true+)  : gives error


console.log(+"")//0



// ******************************Comparisons*********************************************

console.log("2"==2)  //returns true

console.log(null > 0)  //false
console.log(null<0)   //false
console.log(null == 0)   //false
console.log(null <= 0)   //true
console.log(null >= 0)   //true

// ===  : strict comparisons[it also compares datatype along with value]

console.log("2"=== 2)  //false 



//****************************************  Types of datatypes********************************

//Also h=javascript is dynamically typed
const s= "I am a string"
console.log(typeof s)  //string  [ did not specify statically, so dynamically typed]

const d=2
console.log(typeof d)

/*
    primitive data type

        number, bigInt, String, Boolean, Symbol, null, undefined

    Non-primitive

        array, objects, functions
*/


//Array [Internally. JS stores them in the form of objects, with key, value pair. and last key being length]
const elements =["kajal", "shanti"]


console.log(elements)
console.log(typeof elements)    //objects
console.log(elements.length)

//objects[internally , js objects are hash map or hash table, they store key-value pair , 
//        where keys are string or symbol and value can be of any datatype]


const elements2 = {
    name:"Vidhi",
    "full name":"Vidhi Singh",
    age:24
}

console.log(elements2)
console.log(typeof elements2)     //objects

console.log(elements2["full name"])


