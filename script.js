const password = document.querySelector("#pass");
const confirmPassword = document.querySelector("#confirmPass");
const passHelp = document.querySelector("#passHelp");


function passValidation() {
    if (password.value != confirmPassword.value) {
        passHelp.innerHTML = "Please make sure your passwords match!";
    }
    else {
        passHelp.innerHTML = "Passwords Match!";
}
}
confirmPassword.oninput = () => { passValidation() };
password.oninput = () => { passValidation() };

