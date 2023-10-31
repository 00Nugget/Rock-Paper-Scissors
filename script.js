let choices = [ //choices for random computer choice
    "Rock" , 
    "Paper", 
    "Scissors" 
];


function getComputerChoice() {
    return (choices[Math.floor(Math.random() *choices.length )]) //+ " chosen by computer.");
}
let computerScore = 0;
let playerScore = 0;
let noContestScore = 0;

function playRound(computerSelection, playerSelection) {  //playRound function goes through all the possible outcomes 
    if (computerSelection === playerSelection) {
        return console.log(playerSelection, computerSelection), playerScore+0, computerScore+0;
      } 
      else if (computerSelection === "Scissors") {
        if (playerSelection === "Rock") {
          return console.log("P: "+ playerSelection, "C: "+ computerSelection), playerScore++, computerScore+0;
            } 
          else if (playerSelection === "Paper") {
            return console.log("P: "+ playerSelection, "C: "+ computerSelection),computerScore++,playerScore+0;
          }
        }
      else if (computerSelection === "Rock") {
          if (playerSelection === "Paper") {
            return console.log("P: "+ playerSelection, "C: "+ computerSelection),playerScore++, computerScore+0;
            }
        else if (playerSelection === "Scissors") {
          return console.log("P: "+ playerSelection, "C: "+ computerSelection),computerScore++,playerScore+0;
        }
        }
      else if (computerSelection ==="Paper") {
          if (playerSelection === "Scissors") {
              return console.log("P: "+ playerSelection, "C: "+ computerSelection),playerScore++,computerScore+0;
          }
          else if (playerSelection === "Rock"){
            return console.log("P: "+ playerSelection, "C: "+ computerSelection),computerScore++,playerScore+0;
        }
      }
    }


for (let i = 0; i < 5; i++) { // Plays up to 5 rounds of the game
let playerSelection = prompt("Rock, Paper, Scissors?", "Rock"); //defining player choice here with a prompt each time asking for RPS (Rock paper scissors)
const computerSelection = getComputerChoice();
playRound(computerSelection,playerSelection);
console.log("Your Score: "+ playerScore);
console.log("Computer Score: " + computerScore);

}



/* function game(playerScore, computerScore) {
if (playerScore === 3) { //if player score = 3, they win
  return console.log(playerVictory);
  }

  if (computerScore === 3) {
    return console.log(computerVictory);
  }
}
 */