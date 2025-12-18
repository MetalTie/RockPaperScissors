let humanchoice = "";
let i = 5;
let compscore = 0;
let humanscore = 0;

const scoreDiv = document.getElementById("score");

// Get buttons from the DOM
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
function playRound(humanchoice, computerchoice){
    if (i > 0){
        // tie
        if (humanchoice === computerchoice){ 
            console.log("It's a tie!");
        // Human wins
        } else if ((humanchoice === "rock" && computerchoice === "scissors") || (humanchoice === "paper" && computerchoice === "rock") || (humanchoice === "scissors" && computerchoice === "paper")) {
            console.log("You win!");
            humanscore++;
            scoreDiv.innerHTML = "Human Score: " + humanscore + " | Computer Score: " + compscore;
        // Computer wins
        } else {
            console.log("You lose!");
            compscore++;
            scoreDiv.innerHTML = "Human Score: " + humanscore + " | Computer Score: " + compscore;
        }
        console.log("You have " + (i-1) + " turns left.");
    }else{
        alert("Sorry, you are out of turns.");
    }
    i--;
    
}