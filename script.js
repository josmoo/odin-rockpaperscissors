const ROUND_NUMBER = 5;

function getComputerChoice() { //the illusive 3-sided die
    let rand = Math.random();
    if (rand < .333) {
        return "rock";
    }
    if (rand < .666) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Please choose rock, paper, or scissors: ");
    return choice.toLowerCase();
}

function playGame() {
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let results = "The computer chose " + computerChoice + ". ";

    if (humanChoice == computerChoice) {
        return results + "It's a draw!";
    }
    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            incrementHumanScore();
            return results + "You won!";
        }
        incrementComputerScore();
        return results + "The computer won...";
    }
    if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            incrementHumanScore();
            return results + "You won!";
        }
        incrementComputerScore();
        return results + "The computer won...";
    }
    if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            incrementHumanScore();
            return results + "You won!";
        }
        incrementComputerScore();
        return results + "The computer won...";
    }
    console.log("big error uh oh oopsy look at results.textContent = playRound");
    return;
}

function incrementHumanScore(){
    const humanScore = document.querySelector("#humanScore");
    humanScore.textContent = parseInt(humanScore.textContent) + 1;
}

function incrementComputerScore(){
    const computerScore = document.querySelector("#computerScore");
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
}


const buttonsMenu = document.querySelector(".button-container");
const resultsDisplay = document.querySelector(".results-display");

buttonsMenu.addEventListener('click', (event) => {
    const target = event.target;
    const results = document.createElement("p");

    switch (target.id) {
        case 'rockBtn':
            results.textContent = playRound("rock");
            break;

        case 'paperBtn':
            results.textContent = playRound("paper");
            break;

        case 'scissorsBtn':
            results.textContent = playRound("scissors");
            break;

        default:
            console.log("big oopsy woopsy uh oh look at event listener");
    }
    resultsDisplay.appendChild(results);
    checkWinner();
});

function checkWinner(){
    const computerScore = document.querySelector("#computerScore");
    if (computerScore.textContent == ROUND_NUMBER){

        const winMessage = document.createElement("p");
        winMessage.textContent = "In a best of " + ROUND_NUMBER + " match, you let the clanker win... :/";
        resultsDisplay.appendChild(winMessage);
        return;
    }

    const humanScore = document.querySelector("#humanScore");
    if (humanScore.textContent == ROUND_NUMBER){
        console.log("AOWJEFAISJDFOIASDF");
        const winMessage = document.createElement("p");
        winMessage.textContent = "In a best of " + ROUND_NUMBER + " match, you won!";
        resultsDisplay.appendChild(winMessage);
    }
    //todo ideally should make player unable to continue playing
}


