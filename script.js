let choices = ["Rock" , "Paper", "Scissors"];

function getComputerChoice() {
    return (choices[(Math.floor(Math.random() * choices.length))]);

}
function playRound(playerSelection, computerSelection){
    if (computerSelection === playerSelection) {
        return print( "It's a tie!");
    } else if (computerSelection = "scissors") {
        return print ("You win! Rock beats Scissors!")
    } else {
        return print( "You lose! Paper beats Rock!")
    }
    }
        
const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection));