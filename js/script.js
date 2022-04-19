const form = document.querySelector(".email-form");
const emailInput = document.querySelector(".email-input");
const errorMsgBox = document.querySelector(".error-msg-container");

const errorMsg = document.createElement("p");
errorMsg.innerText = "Please provide a valid email address";
errorMsg.className = "error-msg red-text regular-text";

function displayErrorMsg() {
  errorMsgBox.append(errorMsg);
}

form.addEventListener("submit", (e) => {
  if (!emailInput.validity.valid) {
    e.preventDefault();
    displayErrorMsg();
  }
});
