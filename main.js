const submit = document.querySelector(".submit-btn");
const errorText = document.querySelector(".error-msg");
const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();

    const inputValue = input.value.trim();
    console.log(inputValue);

    if(inputValue === "") {
        errorText.style.display = "block";
    }
}