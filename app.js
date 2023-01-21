const inputEl = document.getElementById("password-input");
inputEl.value = "Hello World !";

const copyBtn = document.getElementById("password-copy");
copyBtn.addEventListener("click", function () {
  console.log("Copied!");
});
