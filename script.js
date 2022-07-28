let score;
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

// use a click event to return the #id of the object
function game(e) {
    let computerInput, playerInput;
    e.stopPropagation();
    playerInput = this.id;
    computerInput = getComputerChoice();
    console.log(playerInput);
    console.log(computerInput);
}

// select all div elements
const buttonType = document.querySelectorAll('button');

const buttons = Array.from(buttonType);

buttons.forEach(button => button.addEventListener('click', game, {capture: false}));