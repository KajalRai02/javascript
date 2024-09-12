//works both for object and array, but doesn't work for map, however it doesnt show any error


const obj1={
    name:"Kajal",
    address:"Delhi"
}
for (const key in obj1) {
    // console.log(`${key}  --->   ${obj1[key]}`)
    
}

const obj2={
    name:"Kajal",
    anotherObj:{
        address:"Gujarat"
    }
}

for (const key in obj2) {
    if(typeof obj2[key]=='object'){
        for (const nestedKey in obj2[key]) {
            console.log(`${nestedKey}  --->   ${obj2[key][nestedKey]}`)
            
        }
    }else{
        console.log(`${key}  --->   ${obj2[key]}`)
    }
    
    
}
const obj3={
    name:"Kajal",
    anotherObj:{
        address:"Gujarat"
    },
    arr:[1,2,3]
}
for (const key in obj3) {
    // console.log(`${key}  --->   ${obj3[key]}`)
    
}


//works for array as well
const arr1=[1,2,3]
for (const key in arr1) {
    // console.log(arr1[key])
}

//dosnt work for map, but doesnt give error

const mp = new Map()
mp.set(1,"kajal")
mp.set(2,"Vidhi")
for (const [key,val] in mp) {
   console.log(mp[key])
}