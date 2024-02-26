function characterCounter(userInputs) {
  var alertBox = document.getElementById("message");
  var alertMessage = document.getElementById("message");

  if (userInputs.length == 140) {
    alertMessage.textContent = "Maximum Number of character used";
    alertBox.classList.remove("alert-secondary");
    alertBox.classList.add("alert-danger");
  }
  if (userInputs.length < 140) {
    var remainingChracters = 140 - userInputs.length;
    alertMessage.textContent =
      "you have written " +
      userInputs.length +
      " characters, you have " +
      remainingChracters +
      " characters remaining";
    alertBox.classList.remove("alert-secondary");
    alertBox.classList.add("alert-warning");
  }
}
// Function will make the inputfield empty whenever the page reloads
function setInputEmpty() {
  document.getElementById("userInputs").innerHTML = "";
}
