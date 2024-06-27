let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const comChoices = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * comChoices.length)
    return comChoices[random]
}

function getHumanChoice() {
    const humChoice = prompt("Rock, Paper, or Scissor?")

    return humChoice
}

function playRound(humanChoice, computerChoice) {
    console.log("Human: " + humanChoice)
    console.log("Computer: " + computerChoice)
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("Draw")
        } else if (computerChoice == "paper") {
            console.log("Computer win")
        } else {
            console.log("You win")
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win")
        } else if (computerChoice == "paper") {
            console.log("Draw")
        } else {
            console.log("Computer win")
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("Computer win")
        } else if (computerChoice == "paper") {
            console.log("You win")
        } else {
            console.log("Draw")
        }
    }
}

const humanSelection = getHumanChoice().toLowerCase()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)