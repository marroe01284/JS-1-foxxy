const firstNameInput = document.querySelector("#first-name");
const formSignupBTN = document.querySelector("#signup-BTN");
const firstNameErrorMessage = document.querySelector("#first-name-error-message");
const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#password-error-message");

// 1. I want to trigger an onkeyup event when I write something
// in the input of first name

firstNameInput.onkeyup = function (event) {
    let firstNameInputValue = event.target.value;

    // condition - if the totalNumberOfCharsFirstName > 5
    // formSignupBTN disabled will be false

    if (firstNameInputValue.length >= 5) {
        formSignupBTN.disabled = false;
        firstNameErrorMessage.innerHTML = "Great you have done it, you name is good";
        firstNameErrorMessage.classList = "success";
    } else {
        formSignupBTN.disabled = true;
        firstNameErrorMessage.innerHTML = "So sad you have a short name";
        firstNameErrorMessage.classList = "error";
    }
    //  true  //  false
    // formSignupBTN.disabled = firstNameInputValue.length >= 5

    // firstNameInputValue.length >= 5 ? formSignupBTN.disabled = false : formSignupBTN.disabled = true;
}
passwordInput.onkeyup = function (event) {
    let passwordValue = event.target.value;
    let totalNumberOfCharsInPassword = passwordValue.length;

    if ((passwordValue === "123456") || (passwordValue === "password")) {
        passwordErrorMessage.innerHTML = "💩 you need to think about all your password";
    } else if (totalNumberOfCharsInPassword <= 3) {
        passwordErrorMessage.innerHTML = "🙁 your password is weak";
    } else if (totalNumberOfCharsInPassword <= 5) {
        passwordErrorMessage.innerHTML = "😃 ah your password is average";
    } else if (totalNumberOfCharsInPassword <= 8) {
        passwordErrorMessage.innerHTML = "😍 your password is dam good";
    } else if (totalNumberOfCharsInPassword > 8) {
        passwordErrorMessage.innerHTML = "😍 your password is huge go away of me";
    } else {
        passwordErrorMessage.innerHTML = " 😿 please enter a proper password man !!!!";
    }
}
