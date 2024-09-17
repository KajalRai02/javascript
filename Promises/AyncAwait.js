//an async function, will always return a promise.
//if not, even if it returns a integer, string or boolean, it will automatically wrap it into  apromise

// async function getData(){
//     return "hellloo"
// }
// const data=getData();
// data.then(function (res){
//     console.log(res)
// })

// const p=new Promise((resolve, reject)=>{
//     resolve("promise resolved")
// })

// async function getPromise(){
//     return p;
// }
// const dataPromise=getPromise();
// dataPromise.then(function (res){
//     console.log(res)
// })


//async await are used to handle promises.
//use await in front of the promise'
//await can only be used inside an async function

const API_URL="https://randomuser.me/api/"

async function handlePromise(){
    const res= await fetch(API_URL)
    return res
}
handlePromise().then(function(res){
    console.log(res)
})