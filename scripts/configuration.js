// all the configuration related code like functions we will write here:-

// defining the function to open the player config page

function openPlayerConfig(event) {
  // for this we need to change the css properties of the needed elements:-
  // const overlayElement = document.getElementById("config-overlay");

  editedPlayer = +event.target.dataset.playerid;
  overlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  overlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  // console.log(event);
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playerName").trim();
  //   console.log(enteredPlayerName);

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorOutputElement.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  //   setting player name
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  // updating the player details:-
  players[editedPlayer - 1].name = enteredPlayerName;

  //   console.log(playerData);

  closePlayerConfig();
}
