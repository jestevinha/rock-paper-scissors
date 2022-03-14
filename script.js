const plays =['rock','paper','scissors'];
const gameRules = [{
    play:'rock',
    wins:'scissors',
    loses:'paper'
    },
    {
        play:'paper',
        wins:'rock',
        loses:'scissors'
    },
    {
            play:'scissors',
            wins:'paper',
            loses:'rock'
        }];

function computerPlay(){
    return plays[Math.floor(Math.random() * plays.length)];
}

function playerPlay(){
    input= prompt("Enter your next play: ").toLowerCase();
    while(!(plays.find(play=>play===input))){
        input=prompt("Wrong input, select between Rock, Paper or Scissors ").toLowerCase();

    }
    return input;
}
function playRound(){
    computerGuess=computerPlay();
    playerGuess=playerPlay();
    if(computerGuess==playerGuess)
    return "It's a tie!";
    rules=gameRules.find(rule=>rule.play===playerGuess);
    if(computerGuess==rules.wins)
    return 'Player Wins! '+playerGuess+' beats '+computerGuess;
    else
    return 'Player Loses! '+computerGuess+' beats '+playerGuess;}

function playGame(){
    window.alert('To start the game, open up your console.')
    computerCount=0;
    playerCount=0;
    roundResult='';
    while(computerCount+playerCount<5){
        roundResult=playRound();
        console.log(roundResult);
    if(roundResult.includes('tie'))
    continue;
    if(roundResult.includes('Wins'))
        playerCount++;
    else 
        computerCount++;

    console.log('Player Score '+playerCount);
    console.log('Computer Score '+computerCount)
    }
    console.log('Game over: '+((playerCount>computerCount)?'Player':'Computer')+' Wins');
    replayInput=prompt('Want to play again ?(Yes/No)').toLowerCase();
    while(replayInput!='yes'&&replayInput!='no'){
        replayInput= prompt("Invalid Input: want to play again ?(yes/no)").toLowerCase();
    }

    if(replayInput.includes('yes'))
    playGame();
    else
    console.log('Thank you for playing!')
}

console.log(playGame());