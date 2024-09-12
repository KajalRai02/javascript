//Use: Iterates over the elements of an array (or array-like structures).

const coding=["python","js","cpp"]


//normal function
coding.forEach(function (item){
    // console.log(item)
})

//using arrow function
coding.forEach((item)=>{
    // console.log(item)
})

//for each is for array not for object[use object.entries to access]
const coding2={
    py:"python",
    cpp:"c++",
    java:"java"
}

//console.log(Object.entries(coding2))

Object.entries(coding2).forEach( ([key,value]) =>{
    // console.log(key,value)
})


const map = new Map();
map.set(1, "Kajal");
map.set(2, "Vidhi");
map.set(3, "Shahin");

map.forEach((value, key) => {
    console.log(key, value);
});
