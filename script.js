let humanScore = 0
let computerScore = 0

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    let computerChoice = getRandomInt(3)
    if (computerChoice == 0) {
        computerChoice = "rock"
        console.log("Computer: rock")
    } else if (computerChoice == 1) {
        computerChoice = "paper"
        console.log("Computer: paper")
    } else {
        computerChoice = "scissors"
        console.log("Computer: scissors")
    }

    return computerChoice
}

function getHumanChoice() {
    let humanChoice = window.prompt("Rock Paper Scissors").toLowerCase()
    console.log("Human: " + humanChoice)

    return humanChoice
}

function playround(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("Draw")
        } else if (computerChoice == "paper") {
            console.log("You lose! Paper beats Rock")
        } else if (computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors")
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats Rock")
        } else if (computerChoice == "paper") {
            console.log("Draw")
        } else if (computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper")
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors")
        } else if (computerChoice == "paper") {
            console.log("You win! Scissors beats Paper")
        } else if (computerChoice == "scissors") {
            console.log("Draw")
        }
    }
}



function playGame() {
    let numRound = 1

    while (numRound < 6) {
        console.log("Round: " + numRound)

        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()   

        playround(humanSelection, computerSelection)
        numRound++
    }
}

playGame()