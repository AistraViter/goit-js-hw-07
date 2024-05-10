const inputField = document.querySelector("input#name-input");
const helloName = document.querySelector("span#name-output");

const inputName = () => {
  const inputValue = inputField.value.trim();
  if (inputValue === "") {
    helloName.textContent = "Anonymous";
  } else {
    helloName.textContent = inputValue;
  }
};

inputField.addEventListener("input", inputName);
