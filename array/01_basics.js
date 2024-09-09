//can store any type of value[resizable, mix datatype,access using index]

const myarr=[1,2,3,4,5,true,"kajal"]
console.log(myarr)

//array creates shallow copies = copies share same reference to original array
const myarr2=myarr
myarr[0]="rai"
console.log(myarr)
console.log(myarr2)

//Array methods
myarr.push(9)
console.log(myarr)
console.log(myarr2)

//unshift[shift to first[0] position]
myarr.unshift(999)
console.log(myarr)


console.log(myarr.includes(67))
console.log(myarr.indexOf("Kajal"))  //take care of case senstive

//join converts array to string 
const newArr=myarr.join()
console.log(myarr)
console.log(newArr)
console.log(typeof newArr)


//slice and splice

const arr1=[1,2,3,4,5]
console.log("A",arr1)

//slice doesnt change the original array , also the ending range is not included

console.log(arr1.slice(1,3))  //[2,3]
console.log("B",arr1)    //[1,2,3,4,5]

//splice changes the original array as well, also include the ending index

console.log(arr1.splice(1,3))   //[2,3,4]
console.log("C",arr1)   //[1,5]

//merging two arrays

console.log("Merging array")

const veggies=["bottle gourd", "okra"]
const fruits=["Apple", "Mango"]

console.log(veggies.push(fruits)) // array inside array

console.log(veggies[2][0])  // to retrieve apple


const food=veggies.concat(fruits) //[creates a new merged up array]
console.log(food)

//spread operator  - spread the elements indivisually

const allFood=[...veggies, ...fruits]
console.log(allFood)


// Array operators : is, from, of

console.log(Array.isArray("Kajal"))   //false

console.log(Array.from("Kajal"))    // ['K','A','J','A','L']

console.log(Array.from([1,23]))    //[1,23]

console.log(Array.from({name:"kajal"}))  // [] -> since we havent specified , what i should convert[key or value ] to array

let score1=100
let score2 = "kajal"
let score3 = 300

console.log(Array.of(score1,score2,score3))
