let playerInput = "ROCK";


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


function rockPaperScissors(playerSelection, computerSelection) {

    let outcome;
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        outcome = `You both chose ${playerSelection}, no winner!`;
        return outcome;
    }

    // player winning logic
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        outcome = 'You win! Rock beats scissors.';
        return outcome;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        outcome = 'You win! Paper beats rock.';
        return outcome;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        outcome = 'You win! Scissors beats paper.';
        return outcome;
    }

    // computer winning logic
    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        outcome = 'You lose! Rock beats scissors.';
        return outcome;
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock') {
        outcome = 'You lose! Paper beats rock.';
        return outcome;
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        outcome = 'You lose! Scissors beats paper.';
        return outcome;
    }

    // error handling
    else {
        outcome = 'error!';
        return outcome;
    }
}

function game() {
    let gameRound, winner;
    let score = 0;
    for (let i = 1; i <= 1; i++) {

        let computerInput;
        computerInput = getComputerChoice();

        gameRound = rockPaperScissors(playerInput, computerInput);

        if (gameRound.substring(0, 8) == 'You lose') {
            score -= 1;
        }
        else {
            score += 1;
        }

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

game()