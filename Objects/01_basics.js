//use of symbol , along with the objects

//object declaration -- object literals, object.create() [using constructor, creates singleton objects]


const mysym = Symbol("key1")


//object literals
const jsUser={
    firstName : "Kajal",
    "full Name": "Kajal rai",
    [mysym]:"I am a symbol",  // this is a symbol
    mysym:"hello",  // this is a normal key
    age:18,
    "location": "Jaipur",
    isLoggedIn : false,
    lastLoginDays:["Monday", "thursday"],
    "location": "udaipur",  // overwrite on the last value stored
}

console.log(jsUser.firstName)
// console.log(jsUser."full name")  [ gives error: Unexpected string] we cannot access it using '.'
console.log(jsUser["full Name"])

console.log(typeof jsUser[mysym])
console.log(jsUser[mysym])

console.log(jsUser)


//freezing

jsUser["full Name"]="Shanti Suman"
Object.freeze(jsUser) // No changes can be done after this.

jsUser.firstName="Shanti"

console.log(jsUser)



// functions

const wishes={
    greeting:undefined

}

wishes.greeting=function(){
    console.log("Good morning")
}
console.log(wishes.greeting)  // [Function (anonymous)]

console.log(wishes.greeting())  


