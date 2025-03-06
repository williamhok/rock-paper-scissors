let humanScore = 0
let computerScore = 0

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    let computerChoice = getRandomInt(3)
    if (computerChoice == 0) {
        console.log("rock")
    } else if (computerChoice == 1) {
        console.log("paper")
    } else {
        console.log("scissors")
    }
}

function getHumanChoice() {
    let humanChoice = window.prompt("Rock Paper Scissors")
    getComputerChoice()
    console.log(humanChoice)
}

getHumanChoice()