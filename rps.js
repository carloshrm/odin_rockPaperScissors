let result;
let playerChoice;
let computerChoice;
let round = 0;
let score = 0;
let roundChoice = 0;
const win = ", you won!";
const loss = ", you lost...";

const textDisplay = document.querySelector("#results");
const textFeedback = document.querySelector(".text");
const dropdown = document.querySelector("#roundSelect");
const start = document.querySelector("#startButton");
const buttons = document.querySelectorAll("#button_container > button");

buttons.forEach((btn) => btn.addEventListener("click", setPlayerChoice));
buttons.forEach((btn) => btn.addEventListener("click", game));
start.addEventListener("click", startGame);
window.addEventListener("DOMContentLoaded", initialSetup);

function evaluateChoices() {
  if (playerChoice === computerChoice) {
    textFeedBack.textContent = `The computer chose ${computerChoice}, it's a tie.`;
  }

  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      result = win;
    } else {
      result = loss;
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      result = win;
    } else {
      result = loss;
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      result = win;
    } else {
      result = loss;
    }
  }
  if (result === win) score++;
}

function playRound() {
  round++;
  evaluateChoices();

  resultsText.textContent = `It's round: ${round}, you have won ${score} and lost ${
    round - score
  }.`;
  textFeedBack.textContent = `The computer chose ${computerChoice}${result}`;

  if (round === +roundChoice) {
    endGame();
  }
  return;
}

function computerPlay() {
  let random = Math.floor(Math.random() * Math.floor(3));
  if (random === 1) computerChoice = "rock";
  if (random === 0) computerChoice = "paper";
  if (random === 2) computerChoice = "scissors";
}

function game() {
  computerPlay();
  playRound();
}

function startGame(e) {
  roundChoice = dropdown.value;
  dropdown.style.visibility = "collapse";
  start.style.visibility = "collapse";
  resultsText.textContent = " ... ";
  buttons.forEach((btn) => (btn.style.visibility = "visible"));
  textFeedback.style.visibility = "visible";
}

function endGame() {
  buttons.forEach((btn) => (btn.style.visibility = "hidden"));
  if (score === round - score) {
    resultsText.textContent = `The match was a tie, you won ${score} against ${
      round - score
    }.`;
    return;
  }
  if (score > round - score) {
    resultsText.textContent = `You won the match with a score of ${score}!`;
  } else {
    resultsText.textContent = `You lost the match with a score of ${score} against ${
      round - score
    }...`;
  }
  start.textContent = "Restart";
  start.style.visibility = "visible";
  start.removeEventListener("click", startGame);
  start.addEventListener("click", initialSetup);
}
function setPlayerChoice(e) {
  playerChoice = e.srcElement.id;
}
function initialSetup() {
  resultsText.textContent = "Choose a number of rounds: ";
  start.addEventListener("click", startGame);
  start.removeEventListener("click", initialSetup);
  textFeedback.style.visibility = "hidden";
  dropdown.style.visibility = "visible";
  start.textContent = "Start!";
  round = 0;
  score = 0;
}
