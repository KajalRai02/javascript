const obj1={
    name:"kajal",
    list:["hello","hii"]

}

const obj2=JSON.parse(JSON.stringify(obj1))

obj1.list[0]="hii"

console.log(obj1)
console.log(obj2)