let humanchoice = "";
let i = 5;
let compscore = 0;
let humanscore = 0;
let tiescore = 0;

// Get score ID from the DOM
const scoreDiv = document.getElementById("score");

// Get turn ID from the DOM
const turn = document.getElementById("iteration");

// Get buttons from the DOM
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Get elements from the DOM to display choices and results
const displayhuman = document.getElementById("human-choice");
const displaycomputer = document.getElementById("computer-choice");
const displayresult = document.getElementById("result");


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
            tiescore++;
            turn.innerHTML = 'Turns left: ' + (i-1);
            scoreDiv.innerHTML = 'Human Score: ' + humanscore + ' | Ties: ' + tiescore + ' | Computer Score: ' + compscore;
            displayresult.innerHTML = 'It\'s a tie!';
            displayhuman.innerHTML = humanchoice;
            displaycomputer.innerHTML = computerchoice;
        // Human wins
        } else if ((humanchoice === "rock" && computerchoice === "scissors") || (humanchoice === "paper" && computerchoice === "rock") || (humanchoice === "scissors" && computerchoice === "paper")) {
            console.log("You win!");
            humanscore++;
            turn.innerHTML = 'Turns left: ' + (i-1);
            scoreDiv.innerHTML = 'Human Score: ' + humanscore + ' | Ties: ' + tiescore + ' | Computer Score: ' + compscore;
            displayresult.innerHTML = 'You win! ' + humanchoice.charAt(0).toUpperCase() + humanchoice.slice(1) + ' beats ' + computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1);
            displayhuman.innerHTML = humanchoice;
            displaycomputer.innerHTML = computerchoice;
        // Computer wins
        } else {
            console.log("You lose!");
            compscore++;
            turn.innerHTML = 'Turns left: ' + (i-1);
            scoreDiv.innerHTML = 'Human Score: ' + humanscore + ' | Ties: ' + tiescore + ' | Computer Score: ' + compscore;
            displayresult.innerHTML = 'You lose! ' + computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1) + ' beats ' + humanchoice.charAt(0).toUpperCase() + humanchoice.slice(1);
            displayhuman.innerHTML = humanchoice;
            displaycomputer.innerHTML = computerchoice;
        }
        console.log("You have " + (i-1) + " turns left.");
    }else{
        alert("Sorry, you are out of turns.");
        if (humanscore > compscore){
            alert("You won the game!");
        }else if (humanscore < compscore){
            alert("You lost the game.");
        }else{
            alert("You tied.");
        }
        i--;
    }
}