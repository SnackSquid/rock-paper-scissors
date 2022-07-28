let playerScore = 0;
let computerScore = 0;

// display score on the score block
const playerScoreDiv = document.querySelector('.playerScoreDiv');
const computerScoreDiv = document.querySelector('.computerScoreDiv');
playerScoreDiv.textContent = `You: ${playerScore}`;
computerScoreDiv.textContent = `Computer: ${computerScore}`;
// function for determining the computers choice in game
function getComputerChoice() {
    let random;
    // generate a 1 - 3 choice of numbers
    random = Math.floor(Math.random() * 3) + 1;
    // assign values to determine RPS choice
    if (random == 1) {
        return("rock")
    }
    else if (random == 2) {
        return("paper")
    }
    else if (random == 3) {
        return("scissors")
    }
    else {
        return("error")
    }
}
// function to determine who won the round
function playRound(playerSelection, computerSelection) {
    // if player and computer make same selection
    if (playerSelection === computerSelection) {
       playerScore += 0;
       computerScore += 0;
    }
    // player winning logic
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore += 1;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore += 1;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore += 1;
    }
    // computer winning logic
    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        computerScore += 1;
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock') {
        computerScore += 1;
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        computerScore += 1;
    }
    // error handling
    else {
        points = 'ERROR';
        return points;
    }

    playerScoreDiv.textContent = `You: ${playerScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
}

function checkWinner(pScore, cScore) {

    if (cScore == 5) {
        alert("You lose chump!");
        computerScore = 0;
        playerScore = 0;
        playerScoreDiv.textContent = `You: ${playerScore}`;
        computerScoreDiv.textContent = `Computer: ${computerScore}`;
        
    }
    else if (pScore == 5) {
        alert("Congratulations, you beat the machine!");
        computerScore = 0;
        playerScore = 0;
        playerScoreDiv.textContent = `You: ${playerScore}`;
        computerScoreDiv.textContent = `Computer: ${computerScore}`;
        
    }
}

// game loop
function game(e) {
    let computerInput, playerInput;
    e.stopPropagation();
    // generate inputs and play a round, then update the score
    playerInput = this.id;
    computerInput = getComputerChoice();

    playRound(playerInput, computerInput);
    // winning conditions
    checkWinner(playerScore, computerScore);
    
    

    
}

// select all the buttons and add an even listener that plays the game
const buttonType = document.querySelectorAll('button');
const buttons = Array.from(buttonType);
buttons.forEach(button => button.addEventListener('click', game, {capture: false}));