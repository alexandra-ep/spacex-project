const form = document.querySelector("#contactForm");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
let firstNameHasError = false;

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
let lastNameHasError = false;

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
let emailHasError = false;

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
let messageHasError = false;

const submitMessage = document.querySelector("#submitMessage");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    const firstNameValue = firstName.value;

    if (validateLength(firstNameValue, 1) === true) {
        firstNameError.style.display = "none";
        firstNameHasError = false;
    } else {
        firstNameError.style.display = "block";
        firstNameHasError = true;
    }

    const lastNameValue = lastName.value;

    if (validateLength(lastNameValue, 1) === true) {
        lastNameError.style.display = "none";
        lastNameHasError = false;
    } else {
        lastNameError.style.display = "block";
        lastNameHasError = true;
    }

    const emailValue = email.value;

    if (validateEmail(emailValue)) {
        emailError.style.display = "none";
        emailHasError = false;
    } else {
        emailError.style.display = "block";
        emailHasError = true;
    }

    const messageValue = message.value;

    if (validateLength(messageValue, 10) === true) {
        messageError.style.display = "none";
        messageHasError = false;
    } else {
        messageError.style.display = "block";
        messageHasError = true;
    }

    if (firstNameHasError === true || lastNameHasError === true || emailHasError === true || messageHasError === true) {
        submitMessage.style.display = "none";
    } else {
        submitMessage.style.display = "block";
    }
}

function validateLength(value, lengthCheck) {
    const trimValue = value.trim();

    if (trimValue.length >= lengthCheck) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(emailValue) {
    const regEx = /\S+@\S+\.\S+/;

    if (regEx.test(emailValue)) {
        return true;
    } else {
        return false;
    }
}