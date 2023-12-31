const choices = [ //choices for random computer choice
    "rock" , 
    "paper", 
    "scissors" 
  ];
const lowerCaseArray = choices.map(item => item.toLowerCase());


function getComputerChoice() {
    return (choices[Math.floor(Math.random() *choices.length )]); //+ " chosen by computer.");
}
let computerScore = 0;
let playerScore = 0;


function playRound(computerSelection, playerSelection) {  //playRound function goes through all the possible outcomes 
    if (computerSelection === playerSelection) {
        return console.log("Player chose: " + playerSelection,"Computer chose: " + computerSelection +" .Draw!"), playerScore+0, computerScore+0;
      } 
      else if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
          return console.log("Player chose: "+ playerSelection, "Computer chose: "+ computerSelection), playerScore++, computerScore+0;
            } 
          else if (playerSelection === "paper") {
            return console.log("Player chose: "+ playerSelection, "Computer chose: "+ computerSelection),computerScore++,playerScore+0;
          }
        }
      else if (computerSelection === "rock") {
          if (playerSelection === "paper") {
            return console.log("Player chose: "+ playerSelection, "Computer chose: "+ computerSelection),playerScore++, computerScore+0;
            }
        else if (playerSelection === "scissors") {
          return console.log("Player chose: "+ playerSelection, "Computer chose: "+ computerSelection),computerScore++,playerScore+0;
        }
        }
      else if (computerSelection ==="paper") {
          if (playerSelection === "scissors") {
              return console.log("Player chose: "+ playerSelection, "Computer chose: "+ computerSelection),playerScore++,computerScore+0;
          }
          else if (playerSelection === "rock"){
            return console.log("Player chose: "+ playerSelection, "Computer chose: "+ computerSelection),computerScore++,playerScore+0;
        }
      }
    }//defining player choice here with a prompt each time asking for RPS (Rock paper scissors)


for (let i = 0; i < 1000; i++) { // Plays up to 5 rounds of the game
let playerSelection = prompt("Rock, Paper, Scissors?", "Rock").toLowerCase();
const computerSelection = getComputerChoice();
playRound(computerSelection,playerSelection);
console.log("Your Score: "+ playerScore);
console.log("Computer Score: " + computerScore);
if (playerScore === 3) {
  break; 
 }
 if (computerScore ===3) {
  break;
 }
}

function game() {
  if (playerScore > computerScore) {
   return console.log ("PLAYER WINS. REFRESH PAGE TO TRY AGAIN")
  } else {
    return console.log("COMPUTER WINS. REFRESH PAGE TO TRY AGAIN.")
  }
  
}

game();