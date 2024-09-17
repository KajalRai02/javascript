
function f1(){
    return new Promise((resolve, reject)=>{
        const name="kajal"
        resolve(name)
    })
}

function f2(name){
    return new Promise((resolve,reject)=>{
        resolve(`the name is ${name}`)
    })
}

f1().then(function(name){
    return f2(name)
})
.then(function(res){
    console.log(res)
})

// const PromiseOne= new Promise(function(resolve, reject){
//     //Do an asyn Task
//     //DB calls, cryptography
//     setTimeout(function(){
//         console.log('Async task is completed')
//         resolve()
//     },1000)
// })
// PromiseOne.then(function(){
//     console.log("Promise consumed")
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task2")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Promise 2 consumed")
// })

// const promiseThree= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Kajal",password:123})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user)
// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"Shanti", password:1234})
//         }else{
//             reject('Error : Something went wrong')
//         }
//     },1000)
// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch(function(error){
//     console.log("Error : ", error)
// }).finally(function(){
//     console.log("The promise is either resolved or rejected")
// })


// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error=true
//         if(!error){
//             resolve({username:"Shaheen", password:"789"})
//         }else{
//             reject('Error : JS went wrong')
//         }
        
//     }, 1000);
// });

// async function consumeFunctionFive() {
//     try{
//         const response= await promiseFive
//         console.log(response)
    
//     }catch(error){
//         console.log(error)
//     }  
// }

// consumeFunctionFive()


// async function getAll() {

//     try {
//         const response= await fetch('https://randomuser.me/api/')
//         const data = await response.json()
//         console.log(data)
        
//     } catch (error) {
//         console.log(error)
        
//     }
    
// }
// getAll()


// /*
//     Note 0: A promise is an object, that represents the eventual completion(or failure) of an asynchronous operation and its return value

//     new Promise() - object instance, before we used to use bluebird and Q
//     Note 1: There are 3 promise states:
//          Pending
//          fulfilled 
//          rejected

// */