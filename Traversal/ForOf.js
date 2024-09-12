//Use: Iterates over iterable objects like arrays, strings, maps, sets, etc. (values directly).
// forOf is for array, doesnt work for objects

const arr1=[1,2,3,4]

for (const element of arr1) {
    console.log(element)
}

const arr2=[1,2,{greet:"hello", name:"Shahin"},4]

for (const element of arr2) {
    console.log(element)
}


//Map[unique, preerve the order]

const map=new Map()
map.set(1,"kajal")
map.set(2,"Vidhi")
map.set(3,"Shahin")

// console.log(map)

for (const [key, value] of map) {
    console.log(`${key}  :-  ${value}`)
}


