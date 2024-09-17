






// const a = async ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve("hello");
//     })
// }

// a().then(function(res){
//     console.log(res)
// });



// //npm,

function booleanValue(val){
    return false
}



const loadField = (value)=>{
    return new Promise((resolve,reject)=>{
        if(!booleanValue()){
            reject("load field threw error")
        }else{
            console.log("Checking...")
            setTimeout(function(){
                console.log("Field loaded with value", value)
                resolve(value)
            },5000)
        }
        

    } )
}

const resetField = (value)=>{
return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("Field reset successfully with value",value)
            resolve(value)
        },2000)
            
    })
}


const actions = [{
    type:'LOAD_FIELD',
    value:'abc'
},{
    type:'RESET_FIELD',
    value:'def'
}]


const getFunction = (actions)=>{
    const promises = actions.map((action)=>{
        console.log(1)
        switch(action.type){
            
            case 'LOAD_FIELD':
                const fun1= loadField(action.value)
                //check if rejected then return Promise.reject
    
            case 'RESET_FIELD':
                return resetField(action.value)

            default:
                return Promise.reject("Unknown action type")
                
        }
    })
    return Promise.all(promises)
}

getFunction(actions).then(function(res){
    console.log("All the fields loaded successfully :",res)
}).catch(function(err){
    console.log("Error=",err)
})







// // ??
// // memberData?.firstName

// // let a = memberData?.firstName ?? 'abc'


