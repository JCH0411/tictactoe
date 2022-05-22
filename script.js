let playerSelect;
let computerSelect;
let outcome;
let comPic = document.querySelector("#comPic");
const user = document.querySelector(".userSelect");
let output = document.querySelector("#winner-loser");
let comOut = document.querySelector("#comOut");


function computer(){
  const com = document.querySelectorAll(".piece");
  const ranNum = Math.floor(Math.random() * 3);
  return com[ranNum].getAttribute("value");
}

function playRound(user,robot){

    if(user === "rock"){
      if(robot === "paper")
          return "Computer Wins!!"
      else if (robot === "rock")
             return "draw!!";
      else
        return "Human Wins!!"
    }
    else if (user === "paper") {
      if(robot === "scissors")
          return "Computer Wins!!"
      else if (robot === "paper")
             return "draw!!";
      else
        return "Player Wins!!"
    }
    else if(user === "scissors"){
       if(robot === "rock")
          return "Computer Wins!!"
       else if (robot === "scissors")
          return "draw!!";
       else
          return "Player Wins!!";
      }
}

user.addEventListener("click", function(event){
  if(event.target.classList.contains("piece"))
     playerSelect = event.target.getAttribute("value");

  computerSelect = computer();
   setTimeout(function(){
     // comOut.textContent = computerSelect;
      comPic.setAttribute("src","pics1/" + computerSelect + ".jpg")
      // output.textContent = outcome;
    },700)
  // comPic.setAttribute("src","pics1/" + computerSelect + ".jpg")

  console.log(playerSelect)
  console.log(computerSelect)
  outcome = playRound(playerSelect, computerSelect);
  setTimeout(function(){
      output.textContent = outcome;
    },1500)
})
