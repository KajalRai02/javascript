"use strict"

/*
    The use of "use Strict" in js is useful to catch common coding mistakes, prevent use of unsafe actions, 
    also it is a better programming practise.
*/


//a=10 ;   a is not considered defined in this mode .

let a= 10;

console.log(a);

/*Duplicate parameter name not allowed in this context
function example(b,b){
    return b;
}
example(4,8)
*/
function example(b,c){
    return b;
}
example(4,8)


//variables

//number
//bigint
//string
//null
//undefined
//array
//objects

console.log(typeof null)   //object
console.log(typeof undefined)   ///undefined
console.log(typeof [])   //object
console.log(typeof {})   //object  