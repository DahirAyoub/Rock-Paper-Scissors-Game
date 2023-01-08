let x = 0
let y = 0 

function getComputerChoice(){
    let choice= Math.floor(Math.random()*3)
    const options = ["rock","paper","scissors"]
    return options[choice]
}

function simulator(playerSelection){
    let computerSelection = getComputerChoice();
    const displayedOutcome=document.querySelector('#Outcome')
    if (playerSelection == "rock" && computerSelection == "rock") {    
        displayedOutcome.textContent="IT'S A TIE!"
        return "Tie";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        displayedOutcome.textContent="YOU LOST!"
        return "Lose";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        displayedOutcome.textContent="YOU WON!"
        return "Win";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        displayedOutcome.textContent="IT'S A TIE!"
        return "Tie";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        displayedOutcome.textContent="YOU LOST!"
        return "Lose";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        displayedOutcome.textContent="YOU WON!"
        return "Win";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        displayedOutcome.textContent="IT'S A TIE!"
        return "Tie";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        displayedOutcome.textContent="YOU LOST!"
        return "Lose";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        displayedOutcome.textContent="YOU WON!"
        return "Win";
    }
}

function scoreDisplayer(Outcome){
    const playerScoreDom=document.querySelector('#playerscore')
    const computerScoreDom=document.querySelector('#computerscore')
    if(Outcome==="Win"){
        x+=1
        playerScoreDom.textContent="Player:"+x
    }

    else if(Outcome==="Lose"){
        y+=1
        computerScoreDom.textContent="Computer:"+y
    }
}




const rockChoice = document.querySelector('#rockimg')
const paperChoice=document.querySelector('#paperimg')
const scissorsChoice=document.querySelector('#scissorsimg')

let choice;


if(rockChoice){
    rockChoice.addEventListener("click", e => {
        choice='rock'
        let outcome = simulator(choice);
        scoreDisplayer(outcome)

    })
}

if(paperChoice){
    paperChoice.addEventListener("click",e=>{
        choice='paper'
        let outcome = simulator(choice);
        scoreDisplayer(outcome)  
    })
}

if(scissorsChoice){
    scissorsChoice.addEventListener("click",e=>{
        choice='scissors'
        let outcome = simulator(choice);
        scoreDisplayer(outcome)
    })
}





