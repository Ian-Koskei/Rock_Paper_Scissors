console.log("Hello World!")
// let humanChoice = 0
// let computerChoice = 0
function getComputerChoice() {
    let words = ["rock" , "paper" , "scissors"]
    
    let i = Math.floor(Math.random() * words.length);
    var computerChoice = words[i];
    return computerChoice; 
}


function getHumanChoice() {
    var humanChoice = prompt("Do you choose rock, paper or scissors? ");
    return humanChoice;
}


let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {

    if (humanChoice === 'rock' && computerChoice === 'paper'){
        console.log('You lose! paper beats rock')
        computerScore = computerScore++
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! scissors beats paper")
        humanScore = humanScore++
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! paper beats rock")
        humanScore = humanScore++
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! rock beats scissors")
        computerScore = computerScore++
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! scissors beats paper")
        computerScore = computerScore++
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You lose! rock beats scissors")
        computerScore = computerScore++
    }
    else{
        console.log("It's a tie")
    }
}


const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)
}
console.log(humanScore)