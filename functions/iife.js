//Immediately Invoked Function Expressions (IIFE)

//An IIFE is a function that runs as soon as it is defined
//It is done to avoid pollution by global scope.
//After iife runs, its internal variables and functions  won't exist in the global scope.

//()-> call to the function

(function func1(name){
    console.log(`DB Connected to ${name}`)
})("mongoDB");

//important to give semicolon at end to end of iife. 
//As js misinterprets them as a single expression , leading to syntax error.

(()=>{
    console.log("Hello")
})();