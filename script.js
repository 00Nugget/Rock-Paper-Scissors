let choices = ["Rock" , "Paper", "Scissors"];

function getComputerChoice() {
    return (choices[(Math.floor(Math.random() * choices.length))]);

}
function playRound(playerSelection, computerSelection){
    if (computerSelection === playerSelection) {
         console.log( computerSelection, playerSelection,"It's a tie!");
    } else if (computerSelection = "Scissors") {
        console.log(`Computer chose: "${computerSelection}" and you chose: "${playerSelection}" You win! Rock beats Scissors!`)
    } else {
        console.log( "You lose! Paper beats Rock!")
    }
    }
        
const playerSelection = "Rock";
const computerSelection = getComputerChoice();

playRound("Rock","");