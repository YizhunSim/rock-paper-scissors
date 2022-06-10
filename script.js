function playRound(playerSelection, computerSelection, scoreCard) {
  console.log('I am in playRound');
  const winMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
  const loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
  const drawMessage = `Draw! ${playerSelection} with ${computerSelection}`;

  if (playerSelection === 'Rock') {
    if (computerSelection === 'Rock') {
      console.log(drawMessage);
    } else if (computerSelection === 'Paper') {
      console.log(loseMessage);
      scoreCard['Computer'] += 1;
    } else if (computerSelection === 'Scissors') {
      console.log(winMessage);
      scoreCard['Player'] += 1;
    }
  } else if (playerSelection === 'Paper') {
    if (computerSelection === 'Rock') {
      console.log(winMessage);
      scoreCard['Player'] += 1;
    } else if (computerSelection === 'Paper') {
      console.log(drawMessage);
    } else if (computerSelection === 'Scissors') {
      console.log(loseMessage);
      scoreCard['Computer'] += 1;
    }
  } else if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      console.log(loseMessage);
      scoreCard['Computer'] += 1;
    } else if (computerSelection === 'Paper') {
      console.log(winMessage);
      scoreCard['Player'] += 1;
    } else if (computerSelection === 'Scissors') {
      console.log(drawMessage);
    }
  }
  return scoreCard;
}

function computerPlay() {
  const rockPaperScissorsArray = ['Rock', 'Paper', 'Scissors'];
  return rockPaperScissorsArray[
    Math.floor(Math.random() * rockPaperScissorsArray.length)
  ];
}

function promptUserInput() {
  let result = '';
  let isValidUserInput = false;
  while (!isValidUserInput) {
    const originalInput = window.prompt('Rock... Paper... Scissors');
    let formattedInput = originalInput.toUpperCase();
    switch (formattedInput) {
      case 'ROCK':
      case 'PAPER':
      case 'SCISSORS':
        result =
          formattedInput.charAt(0).toUpperCase() +
          formattedInput.slice(1).toLowerCase();
        isValidUserInput = true;
        break;
      default:
        alert("Please enter a valid 'Rock'/'Paper'/'Scissors' move!");
        console.log(`User Entered: ${originalInput}`);
        isValidUserInput = false;
    }
  }
  return result;
}

function game() {
  let scoreCard = { Player: 0, Computer: 0 };
  let winner = '';
  let roundOfGames = 1;
  let isWinnerFound = false;
  console.log(`Game of Rock, Paper, Scissors. Best of 5 Wins!`);
  while (!isWinnerFound) {
    // const playerSelection = promptUserInput();
    const playerSelection = btn;
    const computerSelection = computerPlay();
    console.log(
      `Game: ${roundOfGames} [Player played: ${playerSelection}] [Computer played: ${computerSelection}]`
    );
    // scoreCard = playRound(playerSelection, computerSelection, scoreCard);

    console.log(
      `scoreCard: Player scored: ${scoreCard['Player']} Computer scored: ${scoreCard['Computer']}`
    );
    roundOfGames += 1;
  }

  if (scoreCard['Player'] > scoreCard['Computer']) {
    winner = `Player Wins! [Final Score Card Best of 5:  Player scored: ${scoreCard['Player']} Computer scored: ${scoreCard['Computer']}`;
  } else if (scoreCard['Player'] < scoreCard['Computer']) {
    winner = `Computer Wins! [Final Score Card Best of 5:  Player scored: ${scoreCard['Player']} Computer scored: ${scoreCard['Computer']}`;
  } else {
    winner = `Nobody Wins! Its a Draw. [Final Score Card Best of 5:  Player scored: ${scoreCard['Player']} Computer scored: ${scoreCard['Computer']}`;
  }
  return winner;
}

const btnRock = document.getElementById('btn-rock');
const btnPaper = document.getElementById('btn-paper');
const btnScissors = document.getElementById('btn-scissors');
btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);
//const finalResult = game();
//console.log(finalResult);
