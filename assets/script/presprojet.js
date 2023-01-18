//*SLIDER
if(window.innerWidth < 1024){
    var btnnext = document.querySelector(".nextmob")
    var btnprev = document.querySelector(".prevmob")
}else{
    var btnnext = document.querySelector(".next");
    var btnprev = document.querySelector(".prev");
}


var listimg = document.querySelectorAll("#imgslider")

let addvisible = (i) => {
    listimg[i].classList.remove("invisible")
    listimg[i].classList.add("visible")
}

let addinvisible = (i) => {
    listimg[i].classList.remove("visible")
    listimg[i].classList.add("invisible")
}

let i = 0;
btnnext.addEventListener("click", ()=>{
    addinvisible(i)
    if(i === listimg.length - 1){
        i = 0
    }else{
        i++;
    }
    addvisible(i)
})

btnprev.addEventListener("click",()=>{
    addinvisible(i)
    if(i === 0){
        i = listimg.length-1
    }else{
        i--;
    }
    addvisible(i)
})

