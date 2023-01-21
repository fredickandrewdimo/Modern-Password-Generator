// Password Output Container
const inputEl = document.getElementById("password-input");

// Range Input
const rangeInput = document.getElementById("character-length-range");

// Length of the Password
let rangeValue = 0;

rangeInput.addEventListener("input", function () {
  rangeValue = this.value;

  // Display the range
  const lengthValue = document.getElementById("character-length-value");
  lengthValue.innerText = rangeValue;
});

// Generates the Password when the button is clicked

let chars = [];

const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", function () {
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const lowerCaseSplit = lowerCaseLetters.split("");

  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const upperCaseSplit = upperCaseLetters.split("");

  const numbers = "0123456789";
  const numbersSplit = numbers.split("");

  const symbols = "!@#$%^&*()_+-=[]{}|;':,.<>/?`~";
  const symbolsSplit = symbols.split("");

  // Include LowerCase Letter
  const includeLowerCase = document.getElementById(
    "include-lowercase-checkbox"
  );

  // Include UpperCase Letters
  const includeUpperCase = document.getElementById(
    "include-uppercase-checkbox"
  );

  // Include Numbers
  const includeNumbers = document.getElementById("include-numbers-checkbox");

  // Include Symbols
  const includeSymbols = document.getElementById("include-symbols-checkbox");

  if (includeLowerCase.checked) {
    chars = chars.concat(lowerCaseSplit);
  } else {
    for (let i = 0; i < lowerCaseSplit.length; i++) {
      let index = chars.indexOf(lowerCaseSplit[i]);
      if (index !== -1) {
        chars.splice(index, 1);
      }
    }
  }

  if (includeUpperCase.checked) {
    chars = chars.concat(upperCaseSplit);
  } else {
    for (let i = 0; i < upperCaseSplit.length; i++) {
      let index = chars.indexOf(upperCaseSplit[i]);
      if (index !== -1) {
        chars.splice(index, 1);
      }
    }
  }

  if (includeNumbers.checked) {
    chars = chars.concat(numbersSplit);
  } else {
    for (let i = 0; i < numbersSplit.length; i++) {
      let index = chars.indexOf(numbersSplit[i]);
      if (index !== -1) {
        chars.splice(index, 1);
      }
    }
  }

  if (includeSymbols.checked) {
    chars = chars.concat(symbolsSplit);
  } else {
    for (let i = 0; i < symbolsSplit.length; i++) {
      let index = chars.indexOf(symbolsSplit[i]);
      if (index !== -1) {
        chars.splice(index, 1);
      }
    }
  }

  let password = generatePassword(rangeValue);
  inputEl.value = password;
});

// Random Characters

function generatePassword(length) {
  let password = "";

  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  return password;
}

// Copy the password to the clipboard
const copyBtn = document.getElementById("password-copy");

copyBtn.addEventListener("click", function () {
  let generatedPassword = inputEl.value;
  navigator.clipboard.writeText(generatedPassword);
});

/* Set the length of the password you want to generate, then i want that function will just execute at the last value that the range gave, before it generates a password they need to here a click event first.
 */
