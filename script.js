let choices = [
    "Rock" , 
    "Paper", 
    "Scissors" 
];

//function getComputerChoice() {
   // return (choices[(Math.floor(Math.random() * choices.length))]);
//}
function getComputerChoice() {
    return choices[Math.floor(Math.random() *choices.length )];
}
function getPlayerChoice(playerSelection,computerSelection) {
    let playerSelection = prompt("Rock? Paper? Scissors?","Rock");
    if (playerSelection != null){
        playerSelection + " selected. Good luck!"
    } else {
        alert ("Invalid input: Please choose either Rock, Paper, or Scissors!")
    }
    }


function showMessage(playerSelection, computerSelection){
    if (computerSelection === playerSelection) {
         console.log( `Computer chose: "${computerSelection}." You chose: "${playerSelection}." It's a tie!`);
    } else if (computerSelection === "Scissors") {
        console.log(`Computer chose: "${computerSelection}" and you chose: "${playerSelection}". You win! Rock beats Scissors!`) 
    } else {
        console.log( "You lose! Paper beats Rock!")
    }
    }
        
const playerSelection = "";
const computerSelection = getComputerChoice();

function game() {
    return showMessage(playerSelection,computerSelection);
}
//for (let i = 0; i < 5; i++) {
    console.log(game());
//}
// computerSelection should be chosen at random each time the function playRound is called

