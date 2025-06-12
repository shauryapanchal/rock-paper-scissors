function playGame(){
    let humanScore=0;
    let computerScore=0;
    
    for(let i=0; i<5; i++){
        const humanChoice=getHumanChoice();
        const computerChoice=getComputerChoice();
        playRound(humanChoice, computerChoice);
        function playRound(humanChoice, computerChoice){
            if(humanChoice===computerChoice){
                console.log("It's a tie");
                return;
            }
            if(humanChoice==='rock'){
                if(computerChoice==='paper'){
                    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
                    computerScore++;
                }
                else{
                    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                }
            }
            else if(humanChoice==='paper'){
                if(computerChoice==='scissors'){
                    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
                    computerScore++;
                }
                else{
                    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                }
            }
            else{
                if(computerChoice==='paper'){
                    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
                    computerScore++;
                }
                else{
                    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
                    humanScore++;
                }
            }
        }
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
    }
}

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

playGame();