function getComputerChoice() {
    const comChoices = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * comChoices.length)
    return comChoices[random]
}

console.log(getComputerChoice())

function getHumanChoice() {
    const humChoice = prompt("Rock, Paper, or Scissor?")

    return humChoice
}

console.log(getHumanChoice())