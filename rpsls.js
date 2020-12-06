const startButton = document.querySelector("#newgame");
startButton.addEventListener("click", game);

const scoreDisplay = document.querySelector("#score");
const winBackground = document.querySelector("#winner");
const roundWinner = document.querySelector("#roundWinner");
const winAction = document.querySelector("#winAction");
const playButtons = document.querySelectorAll(".playButton");
const playerSlot = document.querySelector("#player");
const computerSlot = document.querySelector("#computer");


function game(){
  const playOptions = [];
roundWinner.textContent = "";
winAction.textContent = "";


  let playerWins = 0;
  let computerWins = 0;

  scoreDisplay.textContent = `The score is Player: ${playerWins} to Computer: ${computerWins}`  
 
 function computerPlay(){
    return Math.floor(Math.random()*playOptions.length);
}
   
  function initiator(event){
    let playerResponse = event.target.id;
    playRpslsRound(playerResponse);
    
  }

  


playButtons.forEach((playButton) => {
    playOptions.push(playButton.id);
    playButton.addEventListener("click", initiator)
  })

 
 function playRpslsRound(playerResponse, computerResponse){
    let playerSelection = playerResponse;
    let computerSelection = playOptions[computerPlay()];

    const scoreReference =
    [
      [["tie","" ,"RR"], ["loss", "covers" ,"RP"], ["win", "breaks" ,"RSc"], ["win","crushes" ,"RL"], ["loss","vaporizes","RSp"]],
      [["win","covers","PR"], ["tie","" ,"PP"], ["loss","cuts" ,"PSc"], ["loss","eats" ,"PL"], ["win","disproves","PSp"]],
      [["loss","breaks" ,"ScR"], ["win","cuts" ,"ScP"], ["tie","","ScSc"], ["win","decapitates" ,"ScL"], ["loss","smashes" ,"ScSp"]],
      [["loss","crushes" ,"LR"], ["win","eats" ,"LP"], ["loss","decapitates" ,"LSc"], ["tie","" ,"LL"], ["win","poisons" ,"LSp"]],
      [["win","vaporizes" ,"SpR"], ["loss","disproves","SpP"], ["win","smashes" ,"SpSc"], ["loss","poisons","SpP"], ["tie","" ,"SpSp"]],
    ];

let scoreReferenceIndex = scoreReference[playOptions.indexOf(playerSelection)][playOptions.indexOf(computerSelection)];
 
     
      if (scoreReferenceIndex[0] === "win"){
        playerWins++
        winAction.textContent =`${playerSelection} ${scoreReferenceIndex[1]} ${computerSelection}!`;
roundWinner.textContent = "You Win this Round!";
      }
      else if (scoreReferenceIndex[0] === "loss"){
        computerWins++
        winAction.textContent =`${computerSelection} ${scoreReferenceIndex[1]} ${playerSelection}!`;
roundWinner.textContent ="You Lose this Round!";
      }
      else{
  winAction.textContent = ""      
roundWinner.textContent = "It's a Tie!";
      }

      scoreDisplay.textContent = `The score is Player: ${playerWins} to Computer: ${computerWins}`

if(playerWins ===5){
playButtons.forEach((playButton) => {
    playButton.removeEventListener("click", initiator)
  })
/*roundWinner.setAttribute();*/    
roundWinner.textContent = "YOU WIN THE GAME! \n Click below to play again!"
winAction.textContent = ""
   
}else if(computerWins ===5){
playButtons.forEach((playButton) => {
    playButton.removeEventListener("click", initiator)
  })
   
/*roundWinner.setAttribute();*/    
roundWinner.textContent = "YOU LOST THE GAME! \n Click below to play again!";
winAction.textContent = ""
  }
    }
}



    
