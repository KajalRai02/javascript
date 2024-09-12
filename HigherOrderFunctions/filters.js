const arr=[1,2,3,4,5]

const newarr=arr.filter( (nums)=>{
    return nums>4

})
console.log(newarr)


const obj1={
    1:"a",
    2:"b",
    3:"c"
}

const newobj= Object.entries(obj1).filter( ([key,value])=>{
        return value=="b"
})

console.log(newobj)


const nums2=[1,2]
// [{key:1,value:true}, {key:2,value:true}]

const newnums=nums2.map( (num)=>({
    id:num,
    value:"true"
}))

console.log(newnums)