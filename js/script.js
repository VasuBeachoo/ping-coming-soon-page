const form = document.querySelector(".email-form");
const emailInput = document.querySelector(".email-input");
const errorMsgBox = document.querySelector(".error-msg-container");

const errorMsg = document.createElement("p");
errorMsg.className = "error-msg red-text regular-text";

function displayErrorMsg() {
  errorMsgBox.append(errorMsg);
}

form.addEventListener("submit", (e) => {
  if (emailInput.value == "") {
    errorMsg.innerText = "Whoops! It looks like you forgot to add your email";
    e.preventDefault();
    displayErrorMsg();
  } else {
    errorMsg.innerText = "Please provide a valid email address";
    if (!emailInput.validity.valid) {
      e.preventDefault();
      displayErrorMsg();
    }
  }
});
