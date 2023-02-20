
// Events
function call_me(){
    console.log(event.type)
    console.log(event.currentTarget)
    console.log(event.clientX)
    console.log(event.clientY)
    alert(" CALLED thanks for watching")
}
// clickbtn.onclick = call_me

clickbtn.addEventListener("click",call_me)//<---best practice
// clickbtn.addEventListener("click",function(){
//     alert("thanks")
// })<<<---- not good practice
// clickbtn.removeEventListener("click",call_me)
// clickbtn.removeEventListener('click',function(){
//     alert("thanks")
// })<---- not good practice