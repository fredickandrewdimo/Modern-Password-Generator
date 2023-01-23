// Get reference to input password element
const inputEl = document.getElementById("password-input");

// Get the length through range input element //

// Get reference to range input element
const rangeInput = document.getElementById("character-length-range");

// rangeValue variable
let rangeValue = 0;

// Listen for input event on range input
rangeInput.addEventListener("input", function () {
  // Update rangeValue variable
  rangeValue = this.value;

  // Update inner text of another element with the current rangeValue
  const lengthValue = document.getElementById("character-length-value");
  lengthValue.innerText = rangeValue;
});

// Generates the Password when the button is clicked //

let chars = [];
let password;

// Get reference to generate button element
const generateBtn = document.getElementById("generate-btn");

// Define a string of lowercase letters
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
// Split the string of lowercase letters
const lowerCaseSplit = lowerCaseLetters.split("");

// Define a string of uppercase letters
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Split the string of uppercase letters
const upperCaseSplit = upperCaseLetters.split("");

// Define a string of numbers
const numbers = "0123456789";
// Split the string of numbers
const numbersSplit = numbers.split("");

// Define a string of special characters
const symbols = "!@#$%^&*()_+-=[]{}|;':,.<>/?`~";
// Split the string of special characters
const symbolsSplit = symbols.split("");

// Button listen to a click event
generateBtn.addEventListener("click", function () {
  // Get a reference to the "include-lowercase-checkbox" element
  const includeLowerCase = document.getElementById(
    "include-lowercase-checkbox"
  );

  // Get a reference to the "include-uppercase-checkbox" element
  const includeUpperCase = document.getElementById(
    "include-uppercase-checkbox"
  );

  // Get a reference to the "include-numbers-checkbox" element
  const includeNumbers = document.getElementById("include-numbers-checkbox");

  // Get a reference to the "include-symbols-checkbox" element
  const includeSymbols = document.getElementById("include-symbols-checkbox");

  // check if includeLowerCase checkbox is checked
  if (includeLowerCase.checked) {
    // If checked, add the lowerCaseSplit characters to the chars array
    chars = chars.concat(lowerCaseSplit);
  } else {
    // If not checked, remove the lowerCaseSplit characters from the chars array
    for (let i = 0; i < lowerCaseSplit.length; i++) {
      let index = chars.indexOf(lowerCaseSplit[i]);
      if (index !== -1) {
        chars.splice(index, 1);
      }
    }
  }

  // check if includeUpperCase checkbox is checked
  if (includeUpperCase.checked) {
    // If checked, add the upperCaseSplit characters to the chars array
    chars = chars.concat(upperCaseSplit);
  } else {
    // If not checked, remove the upperCaseSplit characters from the chars array
    for (let i = 0; i < upperCaseSplit.length; i++) {
      let index = chars.indexOf(upperCaseSplit[i]);
      if (index !== -1) {
        chars.splice(index, 1);
      }
    }
  }

  // check if includeNumbers checkbox is checked
  if (includeNumbers.checked) {
    // If checked, add the numbersSplit characters to the chars array
    chars = chars.concat(numbersSplit);
  } else {
    // If not checked, remove the numbersSplit characters from the chars array
    for (let i = 0; i < numbersSplit.length; i++) {
      let index = chars.indexOf(numbersSplit[i]);
      if (index !== -1) {
        chars.splice(index, 1);
      }
    }
  }

  // check if includeSymbols checkbox is checked
  if (includeSymbols.checked) {
    // If checked, add the symbolsSplit characters to the chars array
    chars = chars.concat(symbolsSplit);
  } else {
    // If not checked, remove the symbolsSplit characters from the chars array
    for (let i = 0; i < symbolsSplit.length; i++) {
      let index = chars.indexOf(symbolsSplit[i]);
      if (index !== -1) {
        chars.splice(index, 1);
      }
    }
  }

  // Call a generatePassword function and send a rangeValue
  password = generatePassword(rangeValue);

  // Declares the inputEl value is the password
  inputEl.value = password;

  // Array of container elements
  const containers = [
    verticalBarContainer1,
    verticalBarContainer2,
    verticalBarContainer3,
    verticalBarContainer4,
  ];

  // loop to iterate through each element in the containers array
  for (let i = 0; i < containers.length; i++) {
    // Remove the class "vertical-bar-yellow" from the current element
    containers[i].classList.remove("vertical-bar-yellow");
  }

  // Test the strength of the password a zxcvbn library
  let strength = zxcvbn(password);

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

// Generates a Random Password with specified length
function generatePassword(length) {
  // Initialize an empty string to store the password
  let password = "";

  //   Loop for the specified length
  for (let i = 0; i < length; i++) {
    // Add a randomly selected character from the chars array to the password string
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  // Return the generated password
  return password;
}

// Copy the password to the clipboard
const copyBtn = document.getElementById("password-copy");

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(inputEl.value);
});
