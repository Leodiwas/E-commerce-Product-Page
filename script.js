const open = document.getElementById("fullImgBox");
const close = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg")

function openfullImg(img){
    open.style.display = "flex" ;
    fullImg.src = img ;
}

function closeImg(){
    close.style.display = "none" ;
}