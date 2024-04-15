let scores = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};
const gameNames = ["rock", "paper", "scissors"];
let intervalId;
updateScores();
function computerChooseGame() {
  return gameNames[Math.floor(Math.random() * gameNames.length)];
}
function result(gameName) {
  const computerChoose = computerChooseGame();
  let result = "";
  if (gameName === "rock") {
    if (computerChoose === "rock") {
      result = "Tie.";
    } else if (computerChoose === "paper") {
      result = "You lose.";
    } else if (computerChoose === "scissors") {
      result = "You win.";
    }
  } else if (gameName === "paper") {
    if (computerChoose === "rock") {
      result = "You win.";
    } else if (computerChoose === "paper") {
      result = "Tie.";
    } else if (computerChoose === "scissors") {
      result = "You lose.";
    }
  } else {
    if (computerChoose === "rock") {
      result = "You lose.";
    } else if (computerChoose === "paper") {
      result = "You win.";
    } else if (computerChoose === "scissors") {
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
    computerChoose === "rock"
      ? "images/rock-emoji.png"
      : computerChoose === "paper"
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
  document.querySelector(".js-score").innerHTML = "Wins: 0, Losses: 0, Ties: 0";
}

function autoPlay() {
  const autoPlayButton = document.getElementById("autoPlayButtonId");
  if (autoPlayButton.innerText === "Auto Play") {
    autoPlayButton.innerHTML = "Stop Play";
    computerPlayAlone();
  } else {
    autoPlayButton.innerHTML = "Auto Play";
    clearInterval(intervalId);
  }
}
function computerPlayAlone() {
  intervalId = setInterval(function () {
    const computerChoose = computerChooseGame();
    result(computerChoose);
  }, 1000);
}
