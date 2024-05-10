const loginForm = document.querySelector("form.login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  if (email === "" || password === "") {
    return console.log("All form fields must be filled in");
  }

  console.log(`Email: ${email}, Password: ${password}`);
  loginForm.reset();
});
