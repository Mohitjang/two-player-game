// in this app.js file we will store all the variables of the elements we need from the websites:-
// and the needed execution code also we will write here only:-

// section 1 player configuration related code:-

// 2dimenstional array for stroing the game data:-
const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

// storing the needed elements inside the variables:-
let editedPlayer = 0;
let activePlayer = 0;
let gameOver = false;
// let winnerId = 0;
// let winnerName = "";
// for keeping track of rounds:-

let currentRound = 1;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const overlayElement = document.querySelector("aside.modal");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");
const winnerNameElement = document.getElementById("winner-name");
const gameDrawElement = document.querySelector("#game-over h2");

const editPlayer1ButtonElement = document.getElementById("edit-Player1-Button");
const editPlayer2ButtonElement = document.getElementById("edit-Player2-Button");
const cancelConfigButtonElement = document.getElementById("cancel-config-btn");
const confirmPlayerNameElement = document.getElementById("Confirm");
const startNewGameBtnElement = document.getElementById("start-game-btn");

// const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");
// adding the event listeners to the elements:-

editPlayer1ButtonElement.addEventListener("click", openPlayerConfig);
editPlayer2ButtonElement.addEventListener("click", openPlayerConfig);

cancelConfigButtonElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

// confirmPlayerNameElement.addEventListener("click", confirmPlayerName);

// game logic:-
startNewGameBtnElement.addEventListener("click", startNewGame);

// // method 1:-   using li as event lsiteners:-
// // adding clicklisterers to all the game field list items:

// for(const gameFieldElement of gameFieldElements){
//     gameFieldElement.addEventListener('click', selectGameField)
// }

// method 2:-   using ol as event lsiteners:-
// adding clicklisteners to ol which is parent of all the li
gameBoardElement.addEventListener("click", selectGameField);
