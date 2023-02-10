let character = "x";
let player = document.querySelector("p");
let boxes = document.querySelectorAll(".box div");
let conditions = [
  [0, 4, 8],
  [2, 4, 6],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
let gameOver = false;

function triqui() {
  for (let [a, b, c] of conditions) {
    if (
      boxes[a].innerHTML === character &&
      boxes[b].innerHTML === character &&
      boxes[c].innerHTML === character
    ) {
      player.innerHTML = `player ${character} has won!`;
      gameOver = true;
      return true;
    }
  }
  return false;
}

document.querySelectorAll(".box div").forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerHTML === "" && !gameOver) {
      element.innerHTML = character;
      if (!triqui()) {
        character = character === "x" ? "o" : "x";
        player.innerHTML = `player ${character} turn`;
      }
    }
  });
});

function reset() {
  document
    .querySelectorAll(".box div")
    .forEach((element) => (element.innerHTML = ""));
  gameOver = false;
  player.innerHTML = `player ${character} turn`;
}