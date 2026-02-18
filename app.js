let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset-btn");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const updateMsgStyle = (result) => {
  msg.classList.remove("winning-msg", "losing-msg", "draw-msg");
  if (result === "win") {
    msg.classList.add("winning-msg");
  } else if (result === "loss") {
    msg.classList.add("losing-msg");
  } else {
    msg.classList.add("draw-msg");
  }
};

const drawGame = () => {
  msg.innerText = "It's a Draw! 🤝 Try again.";
  updateMsgStyle("draw");
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! 🎉 ${userChoice} beats ${compChoice}`;
    updateMsgStyle("win");
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose! 💀 ${compChoice} beats ${userChoice}`;
    updateMsgStyle("loss");
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
  msg.innerText = "Play your move";
  msg.classList.remove("winning-msg", "losing-msg", "draw-msg");
});

