let humanScore = 0
let computerScore = 0

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    let computerChoice = getRandomInt(3)
    if (computerChoice == 0) {
        computerChoice = "rock"
        console.log("rock")
    } else if (computerChoice == 1) {
        computerChoic = "paper"
        console.log("paper")
    } else {
        computerChoice = "scissors"
        console.log("scissors")
    }

    return computerChoice
}

function getHumanChoice() {
    let humanChoice = window.prompt("Rock Paper Scissors")
    console.log(humanChoice)

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
        console.log(humanChoice)
    } else if (humanChoice == "scissors") {
        console.log(humanChoice)

    }
}

const humanSelection = getHumanChoice().toLowerCase()
const computerSelection = getComputerChoice()

playround(humanSelection, computerSelection)