

const shoppingCart=[
    {
        courseName:"JS",
        price:2000
    },
    {
        courseName:"CSS",
        price:200
    }
]

const priceTopay=shoppingCart.reduce( (acc, item)=> acc+item.price,0)

console.log(priceTopay)













const nums=[1,2,3]
const result = nums.reduce( (acc,item) =>{
    acc.push({id:item,value:"hh"});
    return acc;
},[])
console.log(result)