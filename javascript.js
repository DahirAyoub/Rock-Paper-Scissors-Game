function getComputerChoice(){
    let choice= Math.floor(Math.random()*3)
    const options = ["rock","paper","scissors"]
    return options[choice]
}

function simulator(playerSelection){
    let computerSelection = getComputerChoice();
    if (playerSelection == "rock" && computerSelection == "rock") {
        const displayedOutcome=document.querySelector('#Outcome')
        displayedOutcome.textContent="IT'S A TIE!"
        return "Tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        const displayedOutcome=document.querySelector('#Outcome')
        displayedOutcome.textContent="YOU LOST!"
        return "Lose";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        const displayedOutcome=document.querySelector('#Outcome')
        displayedOutcome.textContent="YOU WON!"
        return "Win";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        const displayedOutcome=document.querySelector('#Outcome')
        displayedOutcome.textContent="IT'S A TIE!"
        return "Tie!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        const displayedOutcome=document.querySelector('#Outcome')
        displayedOutcome.textContent="YOU LOST!"
        return "Lose";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        const displayedOutcome=document.querySelector('#Outcome')
        displayedOutcome.textContent="YOU WON!"
        return "Win";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        const displayedOutcome=document.querySelector('#Outcome')
        displayedOutcome.textContent="IT'S A TIE!"
        return "Tie!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        const displayedOutcome=document.querySelector('#Outcome')
        displayedOutcome.textContent="YOU LOST!"
        return "Lose";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        const displayedOutcome=document.querySelector('#Outcome')
        displayedOutcome.textContent="YOU WON!"
        return "Win";
    }
}

function playerScoreCalculator(outcome){
    var x=0
    const playerScoreDom=document.querySelector('#playerscore')
    if(outcome="Win"){
        x++
        playerScoreDom.textContent='Player:'+ x
        
    }
    else{
        return x
    }
}  



function computerScoreCalculator(outcome){
    var x=0
    if(outcome="Win"){
        return x++
    }
    else{
        return x
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
        console.log(outcome);
        // playerScoreCalculator(outcome)
        // const playerScoreDom=document.querySelector('#playerscore')
        // playerScoreDom.textContent='Player:'+playerScoreCalculator(outcome)

        const computerScoreDom=document.querySelector('#computerscore')
        computerScoreDom.textContent='Computer:'+computerScoreCalculator(outcome)

        // const displayedOutcome=document.querySelector('#Outcome')
        // displayedOutcome.textContent="YOU WON!"

    })
}

if(paperChoice){
    paperChoice.addEventListener("click",e=>{
        choice='paper'
        let outcome = simulator(choice);
        console.log(outcome);  
    })
}

if(scissorsChoice){
    scissorsChoice.addEventListener("click",e=>{
        choice='scissors'
        let outcome = simulator(choice);
        console.log(outcome);
    })
}





