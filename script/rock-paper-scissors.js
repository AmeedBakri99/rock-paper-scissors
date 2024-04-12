
let scores = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

updateScores();

function result(gameName) {
  const gameNames = ["rock", "paper", "scissors"];
  const compuerChoose =
    gameNames[Math.floor(Math.random() * gameNames.length)];
  let result = "";
  if (gameName === "rock") {
    if (compuerChoose === "rock") {
      result = "Tie.";
    } else if (compuerChoose === "paper") {
      result = "You lose.";
    } else if (compuerChoose === "scissors") {
      result = "You win.";
    }
  } else if (gameName === "paper") {
    if (compuerChoose === "rock") {
      result = "You win.";
    } else if (compuerChoose === "paper") {
      result = "Tie.";
    } else if (compuerChoose === "scissors") {
      result = "You lose.";
    }
  } else {
    if (compuerChoose === "rock") {
      result = "You lose.";
    } else if (compuerChoose === "paper") {
      result = "You win.";
    } else if (compuerChoose === "scissors") {
      result = "Tie.";
    }
  }

  if (result === "You win.") {
    scores.Wins += 1;
  } else if (result === "You lose.") {
    scores.Losses += 1;
  } else {
    scores.Ties += 1;
  }
  
  document.querySelector(".js-result").innerHTML = `${result}`;



  let computeImageSrc =
    compuerChoose === "rock"
      ? "images/rock-emoji.png"
      : compuerChoose === "paper"
      ? "images/paper-emoji.png"
      : "images/scissors-emoji.png";

  let yourImageSrc =
    gameName === "rock"
      ? "images/rock-emoji.png"
      : gameName === "paper"
      ? "images/paper-emoji.png"
      : "images/scissors-emoji.png";

  let chooseResult = document.querySelector(".js-moves-chosen");

  chooseResult.innerHTML = `You <img src='${yourImageSrc}'> <img src='${computeImageSrc}'> Computer`;

  updateScores();
  localStorage.setItem("score", JSON.stringify(scores));
}
function updateScores() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${scores.Wins}, Losses: ${scores.Losses}, Ties: ${scores.Ties}`;
}
function restScore() {
  scores.Wins = 0;
  scores.Losses = 0;
  scores.Ties = 0;
  if (scores) {
    localStorage.removeItem("score");
    resetProperties();
  }
}
function resetProperties() {
  document.querySelector(".js-score").innerHTML =
    "Wins: 0, Losses: 0, Ties: 0";
}