let humanScore = 0
let computerScore = 0
let currRound = 1
let totalRound = 5

function getComputerChoice() {
    const comChoices = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * comChoices.length)
    return comChoices[random]
}

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

rock.addEventListener("click", () => {
    alert("Rock")
})

function getHumanChoice() {
    const humChoice = prompt("Rock, Paper, or Scissor?")

    return humChoice
}

function playRound(humanChoice, computerChoice) {
    console.log("Human: " + humanChoice)
    console.log("Computer: " + computerChoice)

    while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        humanChoice = prompt("Invalid choice! Please enter rock, paper, or scissors:").toLowerCase()
        console.log("New Human: " + humanChoice)
    }

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("Draw!")
        } else if (computerChoice == "paper") {
            console.log("You lose! Paper beats Rock")
            computerScore++
        } else {
            console.log("You win! Rock beats Scissors")
            humanScore++
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats Rock")
            humanScore++
        } else if (computerChoice == "paper") {
            console.log("Draw")
        } else {
            console.log("You los! Scissors beats Paper")
            computerScore++
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors")
            computerScore++
        } else if (computerChoice == "paper") {
            console.log("You win! Scissors beats Paper")
            humanScore++
        } else {
            console.log("Draw")
        }
    }

    currRound++
}

function playGame() {
    while (currRound <= totalRound) {
        const humanSelection = getHumanChoice().toLowerCase()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }

    console.log("Final Scores:")
    console.log(`Human: ${humanScore}`)
    console.log(`Computer: ${computerScore}`)
    
    if (humanScore == computerScore) {
        console.log("It is a draw")
    } else if (humanScore > computerScore) {
        console.log("You win the game!")
    } else {
        console.log("Computer win the game!")
    }
}

// playGame()