# Rock-Paper-Scissors
Rock, Paper, Scissors Game 

PLANNING
Rock Paper Scissors Game set up

Create function [getPlayerSelection] that will [prompt] user to input their choice 
[getPlayerSelection] input will be case insensitive
Create function [getComputerChoice]
[getComputerChoice] will return one of 3 string options at random: "Rock" , "Paper" , "Scissors"

Create function [playRound] that will return a string based on 2 parameters:[playerSelection] and [computerSelection]
        [playRound] (playerSelection, computerSelection)
        if `playerSelection` strictly equals `computerSelection`, print message: "It's a tie! Restart"
        else if 
       `computerSelection` = Rock AND `playerSelection` = Scissors 
        OR 
        `computerSelection` = Scissors AND `playerSelection` = Paper
         OR  
        `computerSelection` = Paper AND `playerSelection` = Rock,
        print message: ("You lose! `[computerSelection]`  beat `[playerSelection]`") 
        else
        print message:("You win! `playerSelection`  beat `computerSelection`)
        