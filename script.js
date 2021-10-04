const computerInput = document.getElementById('computer-choice')
const userInput = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoice = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userInput.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoice.length) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    } else if (randomNumber === 2) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }

    computerInput.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw"
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You win!'
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lose!'
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You win!'
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lose!'
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win!'
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lose!'
    }
    resultDisplay.innerHTML = result
}