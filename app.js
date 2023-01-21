// Password Output Container
const inputEl = document.getElementById("password-input");

// Password Copy Element
const copyBtn = document.getElementById("password-copy");

// Range Input
const rangeInput = document.getElementById("character-length-range");

let rangeValue = 0;

rangeInput.addEventListener("input", function () {
  rangeValue = this.value;
  console.log(rangeValue);

  // Display the range
  const lengthValue = document.getElementById("character-length-value");
  lengthValue.innerText = rangeValue;

  // generate a password with the selected length
  let password = generatePassword(rangeValue);
  console.log(password);

  inputEl.value = password;
});

// generate a simple password
function generatePassword(length) {
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let password = "";

  for (let i = 0; i < length; i++) {
    password += upperCaseLetters.charAt(
      Math.floor(Math.random() * upperCaseLetters.length)
    );
  }

  return password;
}

// const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
// const numbers = "0123456789";
// const sysmbols = "!@#$%^&*()_+-=[]{}|;':,.<>/?`~";
