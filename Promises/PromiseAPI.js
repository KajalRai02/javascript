const p1= new Promise((resolve,reject)=>{
    //setTimeout(()=>{ resolve("P1 success")},5000)
    setTimeout(()=>{ reject("P1 failed")},5000 )
})

const p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve("P2 success")},3000)
    //setTimeout(()=>{ reject("P2 failed") },3000)
})

const p3= new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve("P3 success") },2000)
    //setTimeout(()=>{ reject("P3 failed") },2000)
})

//if all fails , it give aggregate error
// Promise.any([p2,p1,p3]).then(function(res){
//         console.log(res)
//     }).catch(function(err){
//         console.error(err)
//     })


Promise.race([p2,p1,p3]).then(function(res){
    console.log(res)
}).catch(function(err){
    console.error(err)
})



// Promise.all([p1,p2,p3]).then(function(res){
//     console.log(res)
// }).catch(function(err){
//     console.error(err)
// })

// Promise.allSettled([p1,p2,p3]).then(function(res){
//     console.log(res)
// }).catch(function(err){
//     console.error(err)
// })