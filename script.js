function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    let computerChoice = getRandomInt(3)
    if (computerChoice == 0) {
        computerChoice = "rock"
    } else if (computerChoice == 1) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }

    return computerChoice
}

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
let humanChoice = ""

rock.addEventListener("click", () => {
    humanChoice = "rock"
    playround(humanChoice, getComputerChoice())
})

paper.addEventListener("click", () => {
    humanChoice = "paper"
    playround(humanChoice, getComputerChoice())
})

scissors.addEventListener("click", () => {
    humanChoice = "scissors"
    playround(humanChoice, getComputerChoice())
})

let round = 0
let playerScore = 0
let compScore = 0

function playround(humanChoice, computerChoice) {
    round++
    document.getElementById("round").textContent = round
    document.getElementById("playerChoice").textContent = humanChoice
    document.getElementById("compChoice").textContent = computerChoice

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            document.getElementById("finalResult").textContent = "Draw!"
        } else if (computerChoice == "paper") {
            compScore++
            document.getElementById("finalResult").textContent = "You lose! Paper beats Rock"
            document.getElementById("compScore").textContent = compScore
        } else if (computerChoice == "scissors") {
            playerScore++
            document.getElementById("finalResult").textContent = "You win! Rock beats Scissors"
            document.getElementById("playerScore").textContent = playerScore
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            playerScore++
            document.getElementById("finalResult").textContent = "You win! Paper beats Rock!"
            document.getElementById("playerScore").textContent = playerScore
        } else if (computerChoice == "paper") {
            document.getElementById("finalResult").textContent = "Draw!"
        } else if (computerChoice == "scissors") {
            compScore++
            document.getElementById("finalResult").textContent = "You lose! Scissors beats Paper!"
            document.getElementById("compScore").textContent = compScore
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            compScore++
            document.getElementById("finalResult").textContent = "You lose! Rock beats Scissors!"
            document.getElementById("compScore").textContent = compScore
        } else if (computerChoice == "paper") {
            playerScore++
            document.getElementById("finalResult").textContent = "You win! Scissors beats Paper!"
            document.getElementById("playerScore").textContent = playerScore
        } else if (computerChoice == "scissors") {
            document.getElementById("finalResult").textContent = "Draw!"
        }
    }
}  