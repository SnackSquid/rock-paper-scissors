let playerInput;
let goodValues = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let random;

    // generate a 1 - 3 choice of numbers
    random = Math.floor(Math.random() * 3) + 1;

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

// use a click event to return the #id of the object
function getID(click) {
    let id;
    click.stopPropagation();
    id = this.id;
    return id;
}

function playerChoice() {

    let currentChoice;

    // select all div elements
    const divs = document.querySelectorAll('div');

    // assign the players choice to the current clicked on div by using the
    // getID function, setting capture to false so it doesn't select bubbled divs
    currentChoice = divs.forEach(div => div.addEventListener('click', getID, {
        capture: false
    })); 
    
    return currentChoice;

}

 
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

    else if (points = undefined) {
        
    }

    // error handling
    else {
        points = 'ERROR';
        return points;
    }
}

function game() {

    let winner;
     // create variables for inputs
    let computerInput, playerInput;
    let score = 0;

    // if score = 5, player wins
    // if score = -5, computer wins
    while (score < 5 || score > -5) {

       
        // get the computer and player inputs
        computerInput = getComputerChoice();
        playerInput = playerChoice();

        console.log(computerInput);
        console.log(playerInput);

        score += playRound(playerInput, computerInput);

        console.log(score);

    }
    
    if (score == 0) {
        winner = "You're both losers!";
        console.log(winner);
    }
    else if (score > 0) {
        winner = "You're a winner baby!";
        console.log(winner);
    }
    if (score < 0) {
        winner = "You lose chump!";
        console.log(winner);
    }

}

game();