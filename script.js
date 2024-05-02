function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);

    switch(randomNum) {

        case 0:
            return "rock"
        
        case 1:
            return "paper"
        
        default:
            return "scissor"
    }
}


function playRound(computerSelection, playerSelection) {
    
    if (computerSelection == playerSelection) {
        result.textContent = "Oops... Its a tie"
        
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        playerWins+=1;
        result.textContent = "You won!! paper beats rock"
        
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        playerWins+=1;
        result.textContent = "You won!! rock beats scissor"
        
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        playerWins+=1;
        result.textContent = "You won!! scissor beats paper"
        
    } else if (computerSelection == "scissor" && playerSelection == "paper") {
        computerWins+=1;
        result.textContent = "You lost! scissor beats paper"
        
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        computerWins+=1;
        result.textContent = "You lost! paper beats rock"
        
    } else if (computerSelection == "rock" && playerSelection == "scissor") {
        computerWins+=1;
        result.textContent = "you lost! rock beats scissor"
    }
    
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;

    if (computerWins === 5) {
        result.textContent = "GAME OVER! - You lost to Computer ";
        computerWins = 0;
        playerWins = 0;

    } else if (playerWins === 5) {
        result.textContent = "GAME OVER! - You Won Against Computer ";
        computerWins = 0;
        playerWins = 0;
    }
}

let playerWins = 0;
let computerWins = 0;


let div = document.body.querySelector(".container-1")
let rock = div.querySelector(".rock-img");
let paper = div.querySelector(".paper-img");
let scissor = div.querySelector(".scissor-img");

let result = document.body.querySelector(".result-info");
let playerScore = document.body.querySelector(".player-score");
let computerScore = document.body.querySelector(".computer-score");

rock.addEventListener("click",(e) => {
    let element = e.target
    playRound(getComputerChoice(), element.dataset.rock)
});

paper.addEventListener("click",(e) => {
    let element = e.target
    playRound(getComputerChoice(), element.dataset.paper)
});

scissor.addEventListener("click",(e) => {
    let element = e.target
    playRound(getComputerChoice(), element.dataset.scissor)
});