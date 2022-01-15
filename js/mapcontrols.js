var zoominbtn = document.getElementById("ZoomInbtn")
var zoomoutbtn = document.getElementById("ZoomOutbtn")
var zoomdetailbtn = document.getElementById("ZoomDetail")
var body = document.getElementById("bodyid")
var currentzoom = 1

zoominbtn.addEventListener("click", function(){
    currentzoom = currentzoom + 1
    body.style.zoom = currentzoom;
    changeinfo()
})
zoomoutbtn.addEventListener("click", function(){
    if (currentzoom > 1){
        currentzoom = currentzoom - 1
        body.style.zoom = currentzoom
        changeinfo()
    }
})

function changeinfo(){
    zoomdetailbtn.innerText = currentzoom.toString()
}