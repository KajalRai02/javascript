/*
    Destructuring is a  convienent way to extract values from arrays or
    properties from object into distinct variable.

*/

                    //  Array Destructuring
//1.Basic Syntax
const[a,b]=[1,2]
console.log(a)
console.log(b)

//2.Skipping items
const[first,,third]=[1,2,3]
console.log(first)
console.log(third)

//3.Default values
const[a1, b1=4, c1=9]=[1,2]
console.log(a1)
console.log(b1)
console.log(c1)

//4.Rest elements
const[f1,...s1]=[1,2,3,4]
console.log(f1)
console.log(s1)


                        //Object destructuring

//1.Basic Syntax[The order does not matter in object destructuring , because property are accessed by names]
const person={name:"Kajal",age:20}
const{name,age}=person
console.log(name)
console.log(age)

//2.RenamingVariables
const person2={n:"Vidhi",a:23}
const {n:fullName, a:currentAge}=person2
console.log(fullName)
console.log(currentAge)


//3.Default values
const person3={fname:"Shanti"}
const {fname, fage=23}=person3
console.log(fname)
console.log(fage)

//4.Nested Object Destructuring
const person4={names:"kajal",address:{
    city:"New York",
    zip:10001
}};

const {names,address:{city,zip}}=person4;
console.log(city)
console.log(zip)

//5.Rest Properties

const person5={place:"singapore",job:"Developer",company:"Args"}
const {place,...rest}=person5
console.log(place)
console.log(rest)

//6.Combining array and object destructuring

const people6=[{dob:678273, year:2000},{dob:325862,year:2001}]
const [{dob:firstBirthDate},{year:secondBirthYear}]=people6
console.log(firstBirthDate);   // Output: 678273
console.log(secondBirthYear);  // Output: 2001


//7.Function parameter Destructuring

    //7.a Array Destructuing in function Parameter

function greet([f2,l2]){
    console.log(`Hello ${f2} ${l2}`)
}
greet(["kajal","rai"])

    //7.b Object destructuring in function Parameter


function greeting({firstName,lastName}){
    console.log(`Hello ${firstName} ${lastName}`)
}
greeting({firstName:"kajal",lastName:"rai"});


                            //Practical Use cases

//1. Swapping variables
(function() {
    let an = 1;
    let bn = 8;

    [an, bn] = [bn, an];  // Swapping variables
    console.log(an, bn);  // Output: 8 1
})();


//2.Returning multiple values from functions


function getCoords(){
    return [10,20]
}
const[x,y]=getCoords();
console.log(x,y);

//3. Extracting Data from API responses

const user = {
    id: 1,
    fnames: "John",
    fdetail: { femail: "john@example.com", age: 25 }
};
const{fnames,fdetail:{femail}}=user
console.log(fnames)
console.log(femail)


