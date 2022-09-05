let navbar=document.querySelector(".navbar")
let left1=document.querySelector(".left1")
let right1=document.querySelector(".right1")
let left2=document.querySelector(".left2")
let right2=document.querySelector(".right2")
let left3=document.querySelector(".left3")
let right3=document.querySelector(".right3")
let left4=document.querySelector(".left4")
let right4=document.querySelector(".right4")

setInterval(()=>{
if(scrollY>729){
    navbar.style.borderBottom="4px solid rgb(208 208 208)"
}else{
    navbar.style.borderBottom="none"
}


if(scrollY>450){

    left1.style.transform="translateX(0)"
    right1.style.transform="translateX(0)"
}else{

    left1.style.transform="translateX(-800px)"
    right1.style.transform="translateX(800px)"
}



if(scrollY>=2088){
    left2.classList.remove("go-left")
    right2.classList.remove("go-right")
}else{
    left2.classList.add("go-left")
    right2.classList.add("go-right")
}

if(scrollY>=3500){
    left3.classList.remove("go-left")
    right3.classList.remove("go-right")
}else{
    left3.classList.add("go-left")
    right3.classList.add("go-right")
}

if(scrollY>=3870){
    left4.classList.remove("go-left")
    right4.classList.remove("go-right")
}else{
    left4.classList.add("go-left")
    right4.classList.add("go-right")
}
// console.log(scrollY)
// if(){
// 
// }

})

// click on image 

let imgs=Array.from( document.querySelectorAll(".facility img"))
imgs.forEach(img =>{
    img.onclick=function(){
        console.log(img)

        let overlay=document.createElement("div");
        overlay.className="overlay"
        let newImg=document.createElement("img")
        newImg.src=img.src;
        
        overlay.appendChild(newImg)
        
        let close=document.createElement("div")
        close.className="close"
        close.innerHTML="X"
        overlay.appendChild(close)
        
        close.onclick=function(){
            overlay.remove()
        }
        
//          right angle toggle
        let r=document.createElement("div")
        r.className="r"
        r.innerHTML=">"
        overlay.appendChild(r)
        

        let count=imgs.indexOf(img);
        console.log(count)
        r.onclick=function(){
            if(count<imgs.length-1 ){
                newImg.src=imgs[++count].src
                r.classList.remove("disabled")
            }else {
                r.classList.add("disabled")
                return 0
            }
        }


//          left angle toggle
        let l=document.createElement("div")
        l.className="l"
        l.innerHTML="<"
        overlay.appendChild(l)

        l.onclick=function(){
            if(count>0 ){
                newImg.src=imgs[--count].src
                l.classList.remove("disabled")
                
            }else{
                l.classList.add("disabled")
                return 0
            }
        }

        // append overlay in body
        document.body.appendChild(overlay)

    }
})