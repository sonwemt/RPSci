function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function computerPlay() {
    let result = getRandomInt(1, 3);
    console.log(result);
    switch(result) {
        case 1:
            return 'ROCK';
        case 2:
            return 'PAPER';
        case 3:
            return 'SCISSORS';
        default:
            return '???';
    }       
 }

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if(playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        return 0;
    }
    else if(playerSelection === 'Paper' && computerSelection == 'SCISSORS'){
        return 0;
    }
    else if(playerSelection === 'SCISSORS' && computerSelection == 'ROCK'){
        return 0;
    }
    else if(playerSelection === computerSelection){
        return 2;
    }
    else{
        return 1;
    }
}



function game(e) {
    if(computerScore > 4|| playerScore > 4){
        computerScore = 0;
        playerScore = 0;
    }
    let playerSelection = this.className;
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    if(result === 0){
        computerScore += 1;
        divs.textContent = 'You lost';
    }
    else if(result === 2){
        divs.textContent = 'Its a draw!';
    }
    else{
        playerScore += 1;
        divs.textContent = 'You won!';
    }
    player.textContent = `Player score: ${playerScore}`;
    computer.textContent = `Computer score: ${computerScore}`;
    if(playerScore > 4){
        divs.textContent = 'You win 5 times. You win this round!';
    }
    else if(computerScore > 4){
        divs.textContent = 'The computer wins 5 times. You lose this round.';
    }
    divs.appendChild(player);
    divs.appendChild(computer);
    
}

let computerScore = 0;
let playerScore = 0;
const divs = document.querySelector('div');
const player = document.createElement('div');
const computer = document.createElement('div');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', game));