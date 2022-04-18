function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function computerPlay() {
    let result = getRandomInt(1, 3);
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

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt('Rock, Paper or Scissors?');
        console.log(`You chose ${playerSelection}`);
        let computerSelection = computerPlay();
        console.log(`The computer chose ${computerSelection}`);
        let result = playRound(playerSelection, computerSelection);
        if(result === 0){
            computerScore += 1;
            console.log(`You lost round ${i + 1}`);
        }
        else if(result === 2){
            console.log(`Its a draw!`);
        }
        else{
            playerScore += 1;
            console.log(`You won round ${i +1 }`);
        }
    }
    if(playerScore > computerScore){
        console.log(`You won with ${playerScore} points!`);
    }
    else{
        console.log('You lose!');
    }
}

game();