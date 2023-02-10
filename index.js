let character = "x";
let player = document.querySelector("p");

document.querySelectorAll(".box div").forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerHTML === "") {
      element.innerHTML = character;
      character = character === "x" ? "o" : "x";
      player.innerHTML = `player ${character} turn`;
    }
  });
});



function reset() {
  document
    .querySelectorAll(".box div")
    .forEach((element) => (element.innerHTML = ""));
}
