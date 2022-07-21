


function getComputerChoice() {
    let random, choice;

    // generate a 1 - 3 choice of numbers
    random = Math.floor(Math.random() * 3) + 1;

    if (random == 1) {
        console.log("Rock")
    }
    else if (random == 2) {
        console.log("Paper")
    }

    else if (random == 3) {
        console.log("Scissors")
    }

    else {
        console.log("Ain't got no gas in it!")
    }

}

getComputerChoice();