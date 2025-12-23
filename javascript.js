let playerchoice = "";
let i = 5;
let compscore = 0;
let playerscore = 0;
let tiescore = 0;

// Get score ID from the DOM to keep track of the score
const scoreDiv = document.getElementById("score");

// Get iteration ID from the DOM to keep track of number of turns left
const numberOfTurns = document.getElementById("iteration");

// Get buttons from the DOM to get the player choice
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Get elements from the DOM to display choices and results
const displayplayer = document.getElementById("player-choice");
const displaycomputer = document.getElementById("computer-choice");
const displayresult = document.getElementById("result");


 // Event listeners for each button
rock.addEventListener("click", onRockChoice);
paper.addEventListener("click", onPaperChoice);
scissors.addEventListener("click", onScissorsChoice);

// Sets each player choice and plays a round
function onRockChoice() {
    getResult("rock", fetchComputerChoice());
}
function onPaperChoice() {
    getResult("paper", fetchComputerChoice());
}
function onScissorsChoice() {
    getResult("scissors", fetchComputerChoice());
}

// Generates random computer choice
function fetchComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const rng = Math.floor(Math.random() * 3);
    return choices[rng];
}

// Plays a round of the game
function getResult(playerchoice, computerchoice){
    if (i > 0){
        // tie
        if (playerchoice === computerchoice){ 
            tiescore++;
            numberOfTurns.innerHTML = 'Turns left: ' + (i-1);
            scoreDiv.innerHTML = 'Human Score: ' + playerscore + ' | Ties: ' + tiescore + ' | Computer Score: ' + compscore;
            displayresult.innerHTML = 'It\'s a tie!';
            displayplayer.innerHTML = playerchoice;
            displaycomputer.innerHTML = computerchoice;
        // Human wins
        } else if ((playerchoice === "rock" && computerchoice === "scissors") || (playerchoice === "paper" && computerchoice === "rock") || (playerchoice === "scissors" && computerchoice === "paper")) {
            playerscore++;
            numberOfTurns.innerHTML = 'Turns left: ' + (i-1);
            scoreDiv.innerHTML = 'Human Score: ' + playerscore + ' | Ties: ' + tiescore + ' | Computer Score: ' + compscore;
            displayresult.innerHTML = 'You win! ' + playerchoice.charAt(0).toUpperCase() + playerchoice.slice(1) + ' beats ' + computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1);
            displayplayer.innerHTML = playerchoice;
            displaycomputer.innerHTML = computerchoice;
        // Computer wins
        } else {
            compscore++;
            numberOfTurns.innerHTML = 'Turns left: ' + (i-1);
            scoreDiv.innerHTML = 'Human Score: ' + playerscore + ' | Ties: ' + tiescore + ' | Computer Score: ' + compscore;
            displayresult.innerHTML = 'You lose! ' + computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1) + ' beats ' + playerchoice.charAt(0).toUpperCase() + playerchoice.slice(1);
            displayplayer.innerHTML = playerchoice;
            displaycomputer.innerHTML = computerchoice;
        }
    }else{
        alert("Sorry, you are out of turns.");
        if (playerscore > compscore){
            alert("You won the game!");
        }else if (playerscore < compscore){
            alert("You lost the game.");
        }else{
            alert("You tied.");
        }
    }
    i--;
}