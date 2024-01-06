// all the game related code logic or functions we will write here:-
function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  gameOver = false;
  // gameOverElement.firstElementChild.innerHTML =
  //   '<h2>You Won, <span id="winner-name">PLAYER NAME</span></h2>';
  gameOverElement.style.display = "none";

  //   clearing gamme data:-
  let gameboardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItemElement = gameBoardElement.children[gameboardIndex];
      gameBoardItemElement.textContent = "";
      gameBoardItemElement.classList.remove("disabled");
      gameboardIndex++;
    }
  }
  //   gameBoardElement.style.display = "none";
}

function startNewGame() {
  // for (const player of players) {
  //   if (!player.name)
  //    alert("Please set custom players names for both players");
  //   return;
  // }
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom players names for both players");
    return;
  }

  resetGameStatus();

  activePlayerNameElement.textContent = players[activePlayer].name;
  // activePlayer++;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else if (activePlayer === 1) {
    activePlayer = 0;
  }
  //   currentRound++;
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function setGameData(row, col) {
  // if players 1 plays then enter 1, vice versa
  // put that data in game data using li rows and cols
  gameData[row][col] = activePlayer + 1;
  //   console.log(gameData);
}

function selectGameField(event) {
  // we are adding this condtion beacuse we are event listener on parent element, using method 2:-
  //   console.log(event.target.tagName);
  const selectedField = event.target;
  if (selectedField.tagName !== "LI" || gameOver) {
    return;
  }
  // inserting the gameData to evaluate the winner when the game will be finished.
  const selectedRow = selectedField.dataset.row - 1;
  const selectedColumn = selectedField.dataset.col - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("please! Select an empty field.");
    return;
  }
  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  setGameData(selectedRow, selectedColumn);

  let winnerId = checkForGameOver();
  if (winnerId !== 0) {
    showResult(winnerId);
    gameOver = true;
    console.log(winnerId);
  }
  currentRound++;

  switchPlayer();
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    // if all the rows are occupied by same player:-
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
    // if all the columns are occupied by same player:-
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] == gameData[1][i] &&
      gameData[1][i] == gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  // if top left to bottom right diagonal occupied by the same player:-
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] == gameData[1][1] &&
    gameData[1][1] == gameData[2][2]
  ) {
    return gameData[0][0];
  }
  // if bottom left to top right diagonal occupied by the same player:-
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] == gameData[1][1] &&
    gameData[1][1] == gameData[0][2]
  ) {
    return gameData[2][0];
  }
  //   if after all the round noboby wins, means it's a draw
  if (currentRound === 9) {
    return -1;
  }
  //   if nothing matches then return 0, it means game is going on
  return 0;
}

function showResult(winnerIdNum) {
  gameOverElement.style.display = "block";
  if (winnerIdNum > 0) {
    const winnerName = players[winnerIdNum - 1].name;
    console.log(winnerName);
    winnerNameElement.textContent = winnerName;
    // gameDrawElement.firstElementChild.textContent = winnerName;
  } else {
    gameDrawElement.textContent = "It's a Draw!";
  }
}
