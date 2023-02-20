let button = document.getElementById("togglebtn")
let bulb=document.getElementById("bulb")
button.addEventListener("click",toggleBulb)

function toggleBulb(e) {
    if (button.textContent.includes()){
        bulb.src="/dommanuplation/project/black.jpg"
        bulb.textContent="Turn off"
    }
    else{
        bulb.src="/dommanuplation/project/bon.jpg"
        button.textContent="Turn on"
    }
    bulb.src="/dommanuplation/project/bon.jpg"
}