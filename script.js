function computer(){
  const com = document.querySelectorAll(".piece");
  const ranNum = Math.floor(Math.random() * 3)
  return com[ranNum].getAttribute("value")
}
let playerSelect;
const body = document.querySelector("body")
body.addEventListener("click", function(event){
  if(event.target.classList.contains("piece")){
    console.log()
   console.log(event.target.getAttribute("value"));
   console.log(playerSelect)
 }
})
