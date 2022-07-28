let score = 0;
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
    let points;
    // if player and computer make same selection
    if (playerSelection === computerSelection) {
        points = 0;
        return points;
    }
    // player winning logic
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        points = 1;
        return points;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        points = 1;
        return points;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        points = 1;
        return points;
    }
    // computer winning logic
    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        points = -1;
        return points;
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock') {
        points = -1;
        return points;
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        points = -1;
        return points;
    }
    // error handling
    else {
        points = 'ERROR';
        return points;
    }
}

// game loop
function game(e) {
    let computerInput, playerInput;
    let roundScore;
    e.stopPropagation();
    // generate inputs and play a round, then update the score
    playerInput = this.id;
    computerInput = getComputerChoice();
    roundScore = playRound(playerInput, computerInput);
    score += roundScore;
    // display score on the score block
    const scoreDisplay = document.querySelector('.scoreDisplay');
    scoreDisplay.textContent = score;
    // winning conditions
    if (score == -5) {

        setTimeout(() => {alert("You lose chump!")}, 100);
        score = 0;
    }
    else if (score == 5) {

        setTimeout(() => {alert("Congratulations, you beat the machine!")}, 100);
        score = 0;
    }
    
}

// select all the buttons and add an even listener that plays the game
const buttonType = document.querySelectorAll('button');
const buttons = Array.from(buttonType);
buttons.forEach(button => button.addEventListener('click', game, {capture: false}));