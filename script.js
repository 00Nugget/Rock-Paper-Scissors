let choices = [
    "Rock" , 
    "Paper", 
    "Scissors" 
];

//function getComputerChoice() {
   // return (choices[(Math.floor(Math.random() * choices.length))]);
//}

function getComputerChoice() {
    return (choices[Math.floor(Math.random() *choices.length )] + " chosen by computer.");
}
/* function getPlayerChoice() {
    if (playerSelection != null){
       return playerSelection 
    } else {
        alert ("Invalid input: Please choose either Rock, Paper, or Scissors!")
    }
    //return playerSelection;
    } */
/* 
function playRound(playerSelection,computerSelection){
    let playerSelection = prompt("Rock? Paper? Scissors?","Rock");
    if (playerSelection != null) {
      if (computerSelection === playerSelection) {
        console.log( `Computer chose: "${computerSelection}." You chose: "${playerSelection}." It's a tie!`);
      }else if (computerSelection === "Scissors", 
        playerSelection === "Rock") { 
        console.log(`Computer chose: "${computerSelection}" and you chose: "${playerSelection}". You win! Rock beats Scissors!`) 
      } else if (computerSelection === "Scissors"   playerSelection === "Paper") {
       console.log( "You lose! Scissors beats Paper!")
         } else if (computerSelection === "Rock", playerSelection === "Paper") {
        console.log("You win! Paper beats Rock")
         } else if (computerSelection === "Rock", playerSelection === "Scissors") {
            console.log ("You lose! Rock beats Scissors!")
         } else if (computerSelection === "Paper", playerSelection === "Rock") {
            console.log("You lose! Paper beats Rock!") 
        } else if (computerSelection === "Paper", playerSelection === "Scissors") {
         console.log("You win! Scissors beats Paper!")
         } else {
            alert ("Error")
            } 
   return playerSelection  
    } else {
        alert ("Invalid input: Please choose either Rock, Paper, or Scissors!");
       }  */
/* function showMessage(playerSelection, computerSelection){
    if (computerSelection === playerSelection) {
         console.log( `Computer chose: "${computerSelection}." You chose: "${playerSelection}." It's a tie!`);
    } else if (computerSelection === "Scissors") {
        console.log(`Computer chose: "${computerSelection}" and you chose: "${playerSelection}". You win! Rock beats Scissors!`) 
    } else {
        console.log( "You lose! Paper beats Rock!")
    }
    } */

function getPlayerChoice() {
    return (prompt ("Rock, Paper,Scissors","Rock") + " chosen by player.") 
}


const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playerSelection,computerSelection);

//}
//for (let i = 0; i < 5; i++) {
 //   console.log(game());
//}
// computerSelection should be chosen at random each time the function playRound is called
