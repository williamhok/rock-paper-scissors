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

function getHumanChoice(callback) {
    rock.addEventListener("click", function() {
        callback("rock")
    })

    paper.addEventListener("click", function() {
        callback("paper")
    })

    scissors.addEventListener("click", function() {
        callback("scissors")
    })
}

const result = document.querySelector(".result")
const resultText = document.createElement("h1")
resultText.textContent = "Choose your selection"
result.appendChild(resultText)

function playRound(humanChoice) {
    const computerChoice = getComputerChoice()
    

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            resultText.textContent = "Draw!"
        } else if (computerChoice == "paper") {
            resultText.textContent = "You lose! Paper beats Rock!"
            computerScore++
        } else {
            resultText.textContent = "You win! Rock beats Scissors!"
            humanScore++
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            resultText.textContent = "You win! Paper beats Rock!"
            humanScore++
        } else if (computerChoice == "paper") {
            resultText.textContent = "Draw!"
        } else {
            resultText.textContent = "You los! Scissors beats Paper!"
            computerScore++
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            resultText.textContent = "You lose! Rock beats Scissors!"
            computerScore++
        } else if (computerChoice == "paper") {
            resultText.textContent = "You win! Scissors beats Paper!"
            humanScore++
        } else {
            resultText.textContent = "Draw!"
        }
    }

    currRound++
}

// function playGame() {
//     while (currRound <= totalRound) {
//         const humanSelection = getHumanChoice().toLowerCase()
//         const computerSelection = getComputerChoice()
//         playRound(humanSelection, computerSelection)
//     }

//     console.log("Final Scores:")
//     console.log(`Human: ${humanScore}`)
//     console.log(`Computer: ${computerScore}`)
    
//     if (humanScore == computerScore) {
//         console.log("It is a draw")
//     } else if (humanScore > computerScore) {
//         console.log("You win the game!")
//     } else {
//         console.log("Computer win the game!")
//     }
// }

getHumanChoice(playRound)