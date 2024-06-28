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

function playRound(humanChoice) {
    const computerChoice = getComputerChoice()

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