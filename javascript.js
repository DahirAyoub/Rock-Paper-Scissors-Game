function getComputerChoice(){
    let choice=Math.random(1,3)
    const options = ["rock","paper","scissors"]
    console.log(options[choice])
}

console.log(getComputerChoice())