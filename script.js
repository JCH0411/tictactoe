function computer(){
  const com = document.querySelectorAll(".piece");
  const ranNum = Math.floor(Math.random() * 3)
  console.log(com[ranNum].getAttribute("value"))
}
computer();
