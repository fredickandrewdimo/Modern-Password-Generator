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
  //   console.log(rangeValue);
});

// Generates the Password when the button is clicked
let chars = [];
let password;

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

  password = generatePassword(rangeValue);
  inputEl.value = password;
  //   console.log(password);

  const containers = [
    verticalBarContainer1,
    verticalBarContainer2,
    verticalBarContainer3,
    verticalBarContainer4,
  ];

  for (let i = 0; i < containers.length; i++) {
    containers[i].classList.remove("vertical-bar-yellow");
  }

  let strength = zxcvbn(password);
  console.log(strength.score);

  if (strength.score === 0) {
    strengthName.innerText = "Very Weak";

    console.log("Very Weak");
  } else if (strength.score === 1) {
    strengthName.innerText = "Weak";
    verticalBarContainer1.classList.add("vertical-bar-yellow");
    console.log("Weak");
  } else if (strength.score === 2) {
    strengthName.innerText = "Moderate";
    verticalBarContainer1.classList.add("vertical-bar-yellow");
    verticalBarContainer2.classList.add("vertical-bar-yellow");
    console.log("Moderate");
  } else if (strength.score === 3) {
    strengthName.innerText = "Strong";
    verticalBarContainer1.classList.add("vertical-bar-yellow");
    verticalBarContainer2.classList.add("vertical-bar-yellow");
    verticalBarContainer3.classList.add("vertical-bar-yellow");
    console.log("Strong");
  } else if (strength.score === 4) {
    strengthName.innerText = "Very Strong";
    verticalBarContainer1.classList.add("vertical-bar-yellow");
    verticalBarContainer2.classList.add("vertical-bar-yellow");
    verticalBarContainer3.classList.add("vertical-bar-yellow");
    verticalBarContainer4.classList.add("vertical-bar-yellow");
    console.log("Very Strong");
  }
});

const strengthName = document.getElementById("strength-value-name");

const verticalBarContainer1 = document.getElementById(
  "vertical-bar-container-1"
);

const verticalBarContainer2 = document.getElementById(
  "vertical-bar-container-2"
);

const verticalBarContainer3 = document.getElementById(
  "vertical-bar-container-3"
);

const verticalBarContainer4 = document.getElementById(
  "vertical-bar-container-4"
);

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

// strength-value-name

// console.log(password);

// const verticalBar1 = document.getElementById("vertical-bar-container-1");
// verticalBar1.classList.add("vertical-bar-yellow");

/* Set the length of the password you want to generate, then i want that function will just execute at the last value that the range gave, before it generates a password they need to here a click event first.
 */

/* 


    if the password length is greater than 10 and includes uppercase and     lowercase the result is medium
        Two bars of containers turned into yellow
        innerText MEDIUM

    else if password length is greater than 12 and includes uppercase and lowercase, numbers and symbols the result is strong
        Three bars of containers turned into yellow
        innerText STRONG

    else the result is weak
*/
