//generate random number

const randomColor= function generate(){
    const hex= "0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
    
}
//whenever i click start it should start changing color

let interval;
const startChangingColor= () => {
    if(!interval){
        interval = setInterval(color,1000)
    }
    
    function color(){
        document.body.style.backgroundColor=randomColor();
    }
    
}

const stopChangingColor=()=>{
    clearInterval(interval)
    interval =null

}

document.querySelector("#start").addEventListener('click', startChangingColor)
document.querySelector("#stop").addEventListener('click', stopChangingColor)