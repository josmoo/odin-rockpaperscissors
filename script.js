
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
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
    console.log("Your score: " + humanScore + ", and computer score: " + computerScore);

    
    function playRound(humanChoice, computerChoice) {
        console.log("The computer chose " + computerChoice);
        if (humanChoice == computerChoice) {
            console.log("Draw!")
        }
        if (humanChoice == "rock") {
            if (computerChoice == "scissors") {
                console.log("You won!");
                humanScore++;
                return;
            }
            console.log("The computer won...");
            computerScore++;
            return;
        }
        if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log("You won!");
                humanScore++;
                return;
            }
            console.log("The computer won...");
            computerScore++;
            return;
        }
        if (humanChoice == "scissors") {
            if (computerChoice == "paper") {
                console.log("You won!");
                humanScore++;
                return;
            }
            console.log("The computer won...");
            computerScore++;
            return;
        }
        console.log("big error uh oh oopsy");
        return;
    }
}

playGame();
