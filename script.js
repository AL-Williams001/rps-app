const playerScoreLabel = document.getElementById("player-score-label");
const tieScoreLabel = document.getElementById("tie-score-label");
const pcScoreLabel = document.getElementById("pc-score-label");
const playerChoice = document.getElementById("player-choice");
const pcChoice = document.getElementById("pc-choice");
const weaponButtons = document.querySelectorAll("button");

let playerScore = 0;
let pcScore = 0;
let ties = 0;

const getPcSelection = () => {
  const weapons = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * weapons.length);
  return weapons[randomIndex];
};

const playRound = (playerSelection, pcSelection) => {
  if (playerSelection === pcSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && pcSelection === "scissors") ||
    (playerSelection === "paper" && pcSelection === "rock") ||
    (playerSelection === "scissors" && pcSelection === "paper")
  ) {
    return "You win";
  } else {
    return "You lose";
  }
};

const gameHandler = (playerSelection) => {
  const pcSelection = getPcSelection();
  pcChoice.textContent = pcSelection;
  playerChoice.textContent = playerSelection;
  const result = playRound(playerSelection, pcSelection);

  if (result === "You win") {
    playerScore++;
    playerScoreLabel.textContent = playerScore;
    if (playerScore === 10) {
      endGame("Player");
      return;
    }
  } else if (result === "You lose") {
    pcScore++;
    pcScoreLabel.textContent = pcScore;
    if (pcScore === 10) {
      endGame("PC");
      return;
    }
  } else {
    ties++;
    tieScoreLabel.textContent = ties;
  }

  if (playerScore === 10 || pcScore === 10) {
    playerScoreLabel.textContent = playerScore;
    pcScoreLabel.textContent = pcScore;
    tieScoreLabel.textContent = ties;
  }
};

const endGame = (winner) => {
  if (winner === "Player") {
    alert("Congratulations! You win!");
  } else {
    alert("The PC wins. Better luck next time!");
  }

  playerScore = 0;
  pcScore = 0;
  ties = 0;
  playerScoreLabel.textContent = playerScore;
  pcScoreLabel.textContent = pcScore;
  tieScoreLabel.textContent = ties;
};

weaponButtons.forEach((weaponButton) => {
  weaponButton.addEventListener("click", () => gameHandler(weaponButton.id));
});

// Drafted RPS Game that can only be played on console
// console.log(getpcSelection());

// const playerPick = prompt("Rock, paper, or scissors?");

// const getComputerChoice = () => {
//   const randomNumber = Math.floor(Math.random() * 3);
//   switch (randomNumber) {
//     case 0:
//       return "rock";
//     case 1:
//       return "paper";
//     case 2:
//       return "scissors";
//     default:
//       return "Invalid choice";
//   }
// };

// const computerChoice = getComputerChoice();

// console.log("Player pick: " + playerPick);
// console.log("Computer choice: " + computerChoice);

// if (playerPick === computerChoice) {
//   console.log("It's a tie!");
// } else if (
//   (playerPick === "rock" && computerChoice === "scissors") ||
//   (playerPick === "paper" && computerChoice === "rock") ||
//   (playerPick === "scissors" && computerChoice === "paper")
// ) {
//   console.log("You win!");
// } else {
//   console.log("Computer wins!");
// }
