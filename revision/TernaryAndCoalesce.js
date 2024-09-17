/*

    Ternary Operator(?):
    Used for conditional expression, and choosing between the two values based on condition

    Coalescing Operator: Specifically used for providing default values for null and undefined cases. 
    It does not consider other falsy values like 0,'', false
*/


let age=1
let isAdult=age>=18 ? 'YES' : 'NO'
console.log(isAdult)

let user;
let defaultName='Guest'
let name=user ?? defaultName;
console.log(name)