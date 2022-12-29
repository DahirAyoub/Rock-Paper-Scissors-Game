function getComputerChoice(){
    let choice= Math.floor(Math.random()*3)
    const options = ["rock","paper","scissors"]
    return options[choice]
}

function playerSelection(){
    let choice = prompt("Rock, Paper, Scissors?").toLowerCase()
    return choice
}

function simulator(playerSelection,computerSelection){
    let outcome;
    switch(playerSelection,computerSelection){
        case playerSelection=="rock" && computerSelection=="rock":
            outcome="Tie!"
            break;
        
        case playerSelection=="rock" && computerSelection=="paper":
            outcome="Lose"
            break;
        
        case playerSelection=="rock" && computerSelection=="scissors":
            outcome="Win"
            break;
        
        case playerSelection=="paper" && computerSelection=="paper":
            outcome="Tie!"
            break;
            
        case playerSelection=="paper" && computerSelection=="scissors":
            outcome="Lose"
            break;
            
        case playerSelection=="paper" && computerSelection=="rock":
            outcome="Win"
            break;

        case playerSelection=="scissors" && computerSelection=="scissors":
            outcome="Tie!"
            break;
                
        case playerSelection=="scissors" && computerSelection=="rock":
            outcome="Lose"
            break;
                
        case playerSelection=="scissors" && computerSelection=="paper":
            outcome="Win"
            break;
    }
    return outcome
}

for (let i=0; i<5; i++){
    console.log(simulator(playerSelection(),computerSelection()))
}