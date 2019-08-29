
var isGameStarted = false;

var humanScore = 0;
var computerScore = 0;

function play(humanPlay, computerPlay) {
  $('#humanPlay').text(humanPlay);
  $('#computerPlay').text(computerPlay);

  if(humanPlay === computerPlay){
    $('#result').text('You tied. :|');
  } else if (humanPlay === 'paper' && computerPlay === 'rock' ||
             humanPlay === 'rock' && computerPlay === 'scissors' ||
             humanPlay === 'scissors' && computerPlay === 'paper') {
    $('#result').text('You win! :)');
    humanScore += 1;
  } else {
    $('#result').text('You lose! :(');
    computerScore += 1;
  }

  $('#humanScore').text(humanScore);
  $('#computerScore').text(computerScore);
}

var options = ['rock', 'paper', 'scissors'];
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random()*(max - min)) + min;
}


function getComputerPlay(){
  return options[getRandomInt(0, 3)];
}

function startGame(){
  $('#scoreboard').addClass('show');
}

$('#rock').on('click', function(){
  if(!isGameStarted) {
    startGame();
  }

  play('rock', getComputerPlay());
});

$('#paper').on('click', function(){
  if(!isGameStarted) {
    startGame();
  }

  play('paper', getComputerPlay());
});

$('#scissors').on('click', function(){
  if(!isGameStarted) {
    startGame();
  }
  
  play('scissors', getComputerPlay());
});



// BONUS:
// Create a "best of 3" version

// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.