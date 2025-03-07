let humanScore = 0
let computerScore = 0

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

function playround(humanChoice, computerChoice) {
    console.log("Human: " + humanChoice)
    console.log("Computer: " + computerChoice)
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