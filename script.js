let userScore = 0;
let computerScore = 0;

const userScoreElement = document.querySelector('#user-score');
const computerScoreElement = document.querySelector('#computer-score');
const result = document.querySelector('.result > p');
const rock = document.querySelector('#r');
const paper = document.querySelector('#p');
const scissors = document.querySelector('#s');

const smallUserWord = '(user)'.fontsize(3).sub();
const smallCompWord = '(comp)'.fontsize(3).sub();

function main() {
  rock.addEventListener('click', () => game('r'));
  paper.addEventListener('click', () => game('p'));
  scissors.addEventListener('click', () => game('s'));
}
main();

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      userWins(userChoice, computerChoice);
      break;
    case 'sr':
    case 'rp':
    case 'ps':
      userLooses(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice);
      break;
  }
}
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function convertToWord(letter) {
  letter === 'r' && 'Rock';
  letter === 'p' && 'Paper';
  return 'Scissors';
}
function userWins(userChoice, computerChoice) {
  userScore++;
  userScoreElement.innerHTML = userScore;
  //prettier-ignore
  result.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
  const $userBorder = document.getElementById(userChoice);
  $userBorder.classList.add('green-glow');
  setTimeout(() => $userBorder.classList.remove('green-glow'), 500);
}

function userLooses(userChoice, computerChoice) {
  computerScore++;
  computerScoreElement.innerText = computerScore;
  //prettier-ignore
  result.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. Computer wins!`;
  const $userBorder = document.getElementById(userChoice);
  $userBorder.classList.add('red-glow');
  setTimeout(() => $userBorder.classList.remove('red-glow'), 500);
}

function draw(userChoice) {
  result.innerHTML = "It's a Draw!";
  const $userBorder = document.getElementById(userChoice);
  $userBorder.classList.add('gray-glow');
  setTimeout(() => $userBorder.classList.remove('gray-glow'), 500);
}
