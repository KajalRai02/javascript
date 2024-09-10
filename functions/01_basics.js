//this in an object method ,refer to the object that owns the method.

//this.username will return "kajal", because this refer to the object user,
//and the user object has a property named with value "kajal"

const user={
    username:"Kajal",
    price:999,
    welcomeMessage:function(){
        
        console.log(`${this.username}, welcome to website`)
    }
}
console.log(user.welcomeMessage())

console.log(this)

//this in stand alone function

//in non strict method
    // when u call func1(), this will refer to the global object. 
    //In browser, the global object is window, So this inside func1 refer to the window, not to any object
    //Since window doesn't have a username property , this.username is defined

//in strict method
    //if strict mode enabled it will give error, when trying to access this. username
function func1(){
    let username="kajal"
    console.log(this)
    console.log(`${this.username}, welcome`)
}

func1()


//how to fix this : .bind(), .call(), .apply()

const user2={username:"Shanti"}


//The .bind method creates a new function that, when invoked, has its this value set to provided to .bind()
//it does not immediately execute the function, but returns a new function with the this value bound to specified object
//useful in event listeners or callbacks where you want to ensure a specific this context
console.log("Using .bind method....")
const newfunc = func1.bind(user2)
newfunc()


//the .call() method immediately invokes the functionand sets the this to the value provided.
//we can pass additional arguments directly.

//Syntax: functionName.call(thisArgs, args1,args2)
console.log("Using .call method....")
func1.call(user2)


//The .apply method is similar to .call(), but instead of passing arguments oneby ne , it expects them as array
//Syntax: functionName.apply(thisArgs, [args1, args2])
console.log("Using .apply method....")
const user3={
    name:"Shahin"

};

function greet(greeting,ending){
    return `${greeting}, ${this.name}${ending}`
}

console.log(greet.apply(user3,['Hello','!']))


//Arrow functions

const sum=(a,b)=>{
    return a+b;
}
console.log("Sum="+sum(2,3))

//we can implcitly do the same thing

const add=(c,d)=> c+d;

const add2=(c,d)=>(c+d);
console.log(add2(3,4))

const values = ()=>({username:"Vidhi"})
console.log(values())
