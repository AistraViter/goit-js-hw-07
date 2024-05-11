function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputField = document.querySelector("div#controls > input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("div#boxes");

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

function createBoxes(amount) {
  const newBoxes = [];

  let boxSize = 20;
  for (let i = 1; i <= amount; i++) {
    let newBox = document.createElement("div");
    newBox.classList.add("superBox");
    boxSize += 10;
    newBox.style.width = boxSize + "px";
    newBox.style.height = boxSize + "px";
    newBox.style.backgroundColor = getRandomHexColor();
    newBoxes.push(newBox);
  }
  return newBoxes;
}

createButton.addEventListener("click", () => {
  const value = parseInt(inputField.value);
  if (value >= 1 && value <= 100) {
    destroyBoxes();
    const amount = value;
    const newBoxes = createBoxes(amount);
    boxesDiv.append(...newBoxes);
  } else {
    console.log(
      "It is impossible to create this number of boxes. Please enter a number between 1 and 100."
    );
  }
  inputField.value = "";
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
