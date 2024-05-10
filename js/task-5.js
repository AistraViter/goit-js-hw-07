function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChangeColor = document.querySelector("button.change-color");
btnChangeColor.addEventListener("click", () => {
  const body = document.querySelector("body");
  const spanColor = document.querySelector("span.color");
  let newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanColor.style.color = newColor;
});
