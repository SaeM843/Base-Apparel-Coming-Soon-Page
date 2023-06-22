const submit = document.querySelector(".submit-btn");
const errorText = document.querySelector(".error-msg");
const form = document.querySelector("form");
const input = document.querySelector("input");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();

    const inputValue = input.value.trim();
    console.log(inputValue);

    if(inputValue === "") {
        errorText.style.display = "block";
        errorIcon.style.display = "block"
    } else if (!isEmail(inputValue)) {
        errorText.style.display = "block";
        errorIcon.style.display = "block"
    } else {
        errorText.style.display = "none";
        errorIcon.style.display = "none"
    }
}

function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
  }