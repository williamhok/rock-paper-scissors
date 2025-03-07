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

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
let humanChoice = ""

function getHumanChoice() {
    rock.addEventListener("click", () => {
        console.log("Human: rock")
        humanChoice = "rock"
    })
    
    paper.addEventListener("click", () => {
        console.log("Human: paper")
        humanChoice = "paper"
    })
    
    scissors.addEventListener("click", () => {
        console.log("Human: scissors")
        humanChoice = "scissors"
    })

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

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()   

playround(humanSelection, computerSelection)