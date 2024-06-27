let humanScore = 0
let computerScore = 0
let currRound = 1
let totalRound = 5

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
            console.log("Draw!")
        } else if (computerChoice == "paper") {
            console.log("You lose! Paper beats Rock")
        } else {
            console.log("You win! Rock beats Scissors")
        }
        currRound++
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats Rock")
        } else if (computerChoice == "paper") {
            console.log("Draw")
        } else {
            console.log("You los! Scissors beats Paper")
        }
        currRound++
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors")
        } else if (computerChoice == "paper") {
            console.log("You win! Scissors beats Paper")
        } else {
            console.log("Draw")
        }
        currRound++
    }
}



while (currRound <= totalRound) {
    const humanSelection = getHumanChoice().toLowerCase()
    const computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
}