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
for (let round = 0; round < 5; round++){
    if (humanChoice === 'rock' && computerChoice === 'paper'){
        console.log('You lose! Rock beats paper')
        computerScore = computerScore++
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! scissors beats paper")
        humanScore = humanScore++
    }
    else{
        console.log("It's a tie")
    }
}
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)