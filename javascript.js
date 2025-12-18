let humanchoice = "";
let i = 5;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

 // Event listeners for each button
rock.addEventListener("click", rockChoice);
paper.addEventListener("click", paperChoice);
scissors.addEventListener("click", scissorsChoice);

// Sets each human choice and plays a round
function rockChoice() {
    playRound("rock", computerChoice());
}
function paperChoice() {
    playRound("paper", computerChoice());
}
function scissorsChoice() {
    playRound("scissors", computerChoice());
}

// Generates random computer choice
function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const rng = Math.floor(Math.random() * 3);
    console.log(choices[rng]);
    return choices[rng];
}

// Plays a round of the game
function playRound(humanchoice, computerChoice){
    if (i > 0){
        if (humanchoice === computerChoice){
            console.log("It's a tie!");
        } else if ((humanchoice === "rock" && computerChoice === "scissors") || (humanchoice === "paper" && computerChoice === "rock") || (humanchoice === "scissors" && computerChoice === "paper")) {
            console.log("You win!");
        } else {
            console.log("You lose!");
        }
        console.log("You have " + (i-1) + " turns left.");
    }else{
        console.log("Sorry, you are out of turns.")
    }
    i--;
    
}