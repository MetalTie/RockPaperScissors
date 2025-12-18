
// This function generates the computer's choice
function getComputerChoice(){ 
    const comparray = ['rock', 'paper', 'scissors']; // This array holds the possible choices
    const rng = Math.floor(Math.random() * 3); // This generates a random index between 0 and 2
    const compchoice = comparray[rng]; // This selects the computer's choice based on the random index
    return compchoice; // This returns the computer's choice
}

// This function gets the human player's choice
function getHumanChoice(){
    const humanchoice = prompt("Enter rock, paper, or scissors:"); // This prompts the user for their choice
    return humanchoice.toLowerCase(); // This returns the user's choice in lowercase so it is easier to compare
}

// Use this to see who wins
function playRound(humanchoice, computerchoice){
    if (humanchoice == computerchoice) {
        return "It's a tie!";
    }
    else if ((humanchoice == 'rock' && computerchoice == 'scissors') || (humanchoice == 'paper' && computerchoice == 'rock') || (humanchoice == 'scissors' && computerchoice == 'paper')){
        return "You win!" + humanchoice + " beats " + computerchoice;
    }
    else {
        return "You lose!" + computerchoice + " beats " + humanchoice;
    }
}


console.log(playRound(getHumanChoice(), getComputerChoice())); // This plays a round and logs the result to the console