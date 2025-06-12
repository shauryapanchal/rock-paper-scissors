let humanScore=0;
let computerScore=0;
function playGame(humanChoice){
    const computerChoice=getComputerChoice();
    playRound(humanChoice, computerChoice);
    function playRound(humanChoice, computerChoice){
        const winText = document.createElement("p");
        winText.textContent=`You Win! ${humanChoice} beats ${computerChoice}`;
        const loseText = document.createElement("p");
        loseText.textContent=`You Lose, ${computerChoice} beats ${humanChoice}`;
        
        const tieText = document.createElement("p");
        tieText.textContent = `That's a tie`;
        if(humanChoice===computerChoice){
            choiceSelect.appendChild(tieText);
            return;
        }
        if(humanChoice==='rock'){
            if(computerChoice==='paper'){
                choiceSelect.appendChild(loseText);
                computerScore++;
            }
            else{
                choiceSelect.appendChild(winText);
                humanScore++;
            }
        }
        else if(humanChoice==='paper'){
            if(computerChoice==='scissors'){
                choiceSelect.appendChild(loseText);
                computerScore++;
            }
            else{
                choiceSelect.appendChild(winText);
                humanScore++;
            }
        }
        else{
            if(computerChoice==='paper'){
                choiceSelect.appendChild(winText);
                humanScore++;
            }
            else{
                choiceSelect.appendChild(loseText);
                computerScore++;
            }
        }
    }
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);
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

function clear(){
    const allLogs= choiceSelect.querySelectorAll("p");
    allLogs.forEach(element => {
        element.remove();
    });
}

function handleClick(choice){
    playGame(choice);
    para.textContent=`You: ${humanScore}, Computer: ${computerScore}`;
    choiceSelect.appendChild(para);
    if(humanScore===5){
        alert(`You won the Game`);
        humanScore=0;
        computerScore=0;
        clear();
    }
    if(computerScore===5){
        alert(`You lost the Game`);
        humanScore=0;
        computerScore=0;
        clear();
    }
}

const choiceSelect= document.querySelector(".choices")
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const para = document.createElement("p");
const result = document.createElement("h2");


rock.addEventListener('click',()=> handleClick('rock'));
paper.addEventListener('click',()=> handleClick('paper'));
scissors.addEventListener('click',()=> handleClick('scissors'));