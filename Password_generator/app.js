const lowercaseLetter = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbol = "!@#$%^&*()-_+={}[]|\:;':\",./<>~`?";

const lengthEl = document.getElementById("length");

const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");

generateBtn.addEventListener('click', function () {
    const length = lengthEl.value;
    let character = "";
    let password = "";

    if (lowercaseEl.checked) {
        character += lowercaseLetter;
    }

    if (uppercaseEl.checked) {
        character += uppercaseLetter;
    }

    if (numbersEl.checked) {
        character += number;
    }

    if (symbolsEl.checked) {
        character += symbol;
    }

    for (let i = 0; i < length; i++) {
        password += character.charAt(Math.floor(Math.random() * character.length));
    }

    passwordEl.value = password;

});