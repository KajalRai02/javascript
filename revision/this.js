//Note 1: this in global space is a globalObject, 
"use strict"
console.log(this)  //globalObject - window[inside browser], global[inside node environment]


/*

Note 2: 
this keyword works differently in strict mode and non strict mode,when used in strict mode it give undefined, else it gives globalobject[called as this substitution].
This happens because, the value of this keyword is undefined or null , this keyword will be replaced with globalObject[only in non strict mode]

*/

global.x=function (){
    
    console.log(this)
}
x()  //undefined[strict mode], global[non-strict mode]
global.x();  //global[strict mode, non-strict mode]

/*
NOte 3: This keywword value depends on how the function is called [during runtime]
*/

const obj={
    a:10,
    f1:function(){
        console.log(this) //here this refer to the object obj
    }
};
obj.f1();

/*
 NOTE 4: call apply bind methds(sharing methods)
*/

const student={
    name:"Kajal",
    printName: function(){
        console.log(this.name)
    }
}

student.printName();

const student2={
    name:"Shanti"
}
student.printName.call(student2)  // value of this in studentobj printName function = student2

/*
    this keyword inside arrow function does not have their own this binding 
    it retains the this value of the enclosing lexical context


    Lexical Context(Lexical scope) refers to the way, JS determines where will the function and variable accessible in the code
*/
const obj2={
    a:10,
    x:()=>{
        console.log(this)
    }
}
obj2.x();


//this inside nested arrow function

const obj3={
    a:30,
    x: function(){
        //enclosing lexical context
        const y = ()=>{
            console.log(this)
        }
        y();
    }
}
obj3.x();


//this inside DOM elements= reference to HTMLelement

//this inside class and constructor[read on own]