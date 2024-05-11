function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputField = document.querySelector("div#controls > input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("div#boxes");

function destroyBoxes () {
  const previousBoxes = document.querySelectorAll(".superBox");
  previousBoxes.forEach((previousBox) => {
    previousBox.remove();
  });


}

function createBoxes(amount) {
  destroyBoxes ();
  let boxSize = 20;
  for (let i = 1; i <= amount; i++) {
    let newBox = document.createElement("div");
    newBox.classList.add("superBox");
    boxSize += 10;
    newBox.style.width = boxSize + "px";
    newBox.style.height = boxSize + "px";
    newBox.style.backgroundColor = getRandomHexColor();
    boxesDiv.append(newBox);
  }
}

createButton.addEventListener("click", () => {
  const value = parseInt(inputField.value);
  if (value >= 1 && value <= 100) {
    const amount = value;
    createBoxes(amount);
  }

  inputField.value = "";
});

destroyButton.addEventListener("click", () => {
  destroyBoxes ();
});
