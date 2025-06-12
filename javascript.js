function getComputerChoice(){
    const randomNumber = (Math.random()*10).toFixed(1);
    if(randomNumber<=3.3){
        return `rock`;
    }
    else if(randomNumber<=6.6){
        return `paper`
    }
    else{
        return `scissors`
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Choose one: Rock, Paper or Scissors")
    return humanChoice.toLowerCase();
}