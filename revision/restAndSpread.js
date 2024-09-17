/*
    notes:
         Rest and spread both uses same [...args] syntax.

         Rest operator: To collect multiple elements into array or objects.

         Spread Operator: To spread elemnents into array or objects

*/

function sum(...numbers){
    return numbers.reduce((acc, curr)=>{
        acc+=curr
        return acc;
    },0);
}

console.log(sum(1,2,3))


//destructuring

const[first, ...rest]=[1,2,3,4]
console.log(rest) //[2,3,4]

//Spread operator

const number=[1,21,3]
console.log(Math.max(...number))

const arr1=[1,2]
const arr2=[...arr1, 3,4]
console.log(arr2)