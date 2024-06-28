let humanScore = 0
let computerScore = 0
let currRound = 0
let totalRound = 5

function getComputerChoice() {
    const comChoices = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * comChoices.length)
    return comChoices[random]
}

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

function getHumanChoice() {
    rock.addEventListener("click", function() {
        if (currRound < totalRound) {
            playRound("rock")
        }
    })

    paper.addEventListener("click", function() {
        if (currRound < totalRound) {
            playRound("paper")
        }
    })

    scissors.addEventListener("click", function() {
        if (currRound < totalRound) {
            playRound("scissors")
        }
    })
}

const roundNum = document.querySelector("#round-num")
const playerNum = document.querySelector("#player-score")
const computerNum = document.querySelector("#computer-score")

roundNum.textContent = "0"
playerNum.textContent = "0"
computerNum.textContent = "0"

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
            computerNum.textContent = computerScore
        } else {
            resultText.textContent = "You win! Rock beats Scissors!"
            humanScore++
            playerNum.textContent = humanScore
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            resultText.textContent = "You win! Paper beats Rock!"
            humanScore++
            playerNum.textContent = humanScore
        } else if (computerChoice == "paper") {
            resultText.textContent = "Draw!"
        } else {
            resultText.textContent = "You los! Scissors beats Paper!"
            computerScore++
            computerNum.textContent = computerScore
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            resultText.textContent = "You lose! Rock beats Scissors!"
            computerScore++
            computerNum.textContent = computerScore
        } else if (computerChoice == "paper") {
            resultText.textContent = "You win! Scissors beats Paper!"
            humanScore++
            playerNum.textContent = humanScore
        } else {
            resultText.textContent = "Draw!"
        }
    }

    currRound++
    roundNum.textContent = currRound

    if (currRound == totalRound) {
        setTimeout(announceWinner, 3000)
    }
}

const gameResult = document.querySelector("#game-result")
gameResult.textContent = ""

function announceWinner() {    
    if (humanScore == computerScore) {
        gameResult.textContent = "It is a draw"
    } else if (humanScore > computerScore) {
        gameResult.textContent = "You win the game!"
    } else {
        gameResult.textContent = "Computer win the game!"
    }

    document.querySelector(".game").classList.add("hidden")
    document.querySelector(".announcement").classList.remove("hidden")
    setTimeout(reset, 3000)
}

function reset() {
    location.reload()
}

getHumanChoice()