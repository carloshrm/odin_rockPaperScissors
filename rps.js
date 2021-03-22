let result;
let playerChoice;
let computerChoice;
const win = ", you won!";
const loss = ", you lost...";

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return `The computer chose ${computerChoice}, it's a tie.`;
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
  return `The computer chose ${computerChoice}${result}`;
}

function computerPlay() {
  let random = Math.floor(Math.random() * Math.floor(3));
  if (random === 1) return "rock";
  if (random === 0) return "paper";
  if (random === 2) return "scissors";
}

function playerSelection() {
  let rawInput = prompt("Type in a choice: rock, paper, or scissors...");
  rawInput = rawInput.match(/(rock|paper|scissors)/i);
  try {
    return rawInput[0];
  } catch {
    alert("Not a valid choice, try again.");
    return;
  }
}

function game() {
  console.log(playRound(playerSelection(), computerPlay()));
}
