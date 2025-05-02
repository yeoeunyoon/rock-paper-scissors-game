const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const message = document.getElementById("message");
const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");
const userChoiceElement = document.getElementById("user-choice");
const computerChoiceElement = document.getElementById("computer-choice");

const choices = ["rock", "paper", "scissors"];
const emojis = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️"
};

let userScore = 0;
let computerScore = 0;

function updateScore() {
  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
}

function animateChoice(element) {
  element.style.transform = "scale(1.2)";
  setTimeout(() => {
    element.style.transform = "scale(1)";
  }, 200);
}

function play(event) {
  const userChoice = event.target.id;
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
  // Update choices display
  userChoiceElement.textContent = emojis[userChoice];
  computerChoiceElement.textContent = emojis[computerChoice];
  
  // Animate choices
  animateChoice(userChoiceElement);
  animateChoice(computerChoiceElement);
  
  // Update message
  message.innerHTML = `You selected ${userChoice}!<br>The computer chose ${computerChoice}!`;

  // Determine winner
  let resultText = "";
  if (computerChoice === userChoice) {
    resultText = "Draw!";
  } else if (
    (computerChoice === "rock" && userChoice === "paper") ||
    (computerChoice === "paper" && userChoice === "scissors") ||
    (computerChoice === "scissors" && userChoice === "rock")
  ) {
    resultText = "You win! 🎉";
    userScore++;
  } else {
    resultText = "You lose! 😢";
    computerScore++;
  }
  
  result.innerHTML = resultText;
  updateScore();
}

// Add hover effects
[rock, paper, scissors].forEach(button => {
  button.addEventListener("mouseover", () => {
    button.style.transform = "translateY(-5px)";
  });
  
  button.addEventListener("mouseout", () => {
    button.style.transform = "translateY(0)";
  });
});

rock.addEventListener("click", play);
paper.addEventListener("click", play);
scissors.addEventListener("click", play);