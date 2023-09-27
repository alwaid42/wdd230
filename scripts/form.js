//Date and last modification
let date = new Date();
let currentYear = date.getFullYear();
document.querySelector('#current-year').textContent = currentYear;

let lastModified = document.lastModified;
document.querySelector('#lastModified').innerHTML = `Last modification: ${lastModified}`;

//Hamburguer button
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//Dark mode button
/*
    const modeButton = document.querySelector("#mode");
    const main = document.querySelector("main");
    const link = document.querySelectorAll("section a");
    const herolabel = document.querySelector(".herolabel")

    modeButton.addEventListener("click", () => {
        if (modeButton.textContent.includes("☑️")) {
            main.style.background = "#323232";
            main.style.color = "#fff";
            herolabel.style.background = "radial-gradient(#000, #4D5B97)";
            link.forEach((linkN) => {
                linkN.style.color = "#FFEA00";
            });
            modeButton.textContent = "Dark Mode: ❎";
        } else {
            main.style.background = "#fff";
            main.style.color = "#000";
            herolabel.style.background = "radial-gradient(#fff, #4D5B97)";
            link.forEach((linkN) => {
                linkN.style.color = "#00e";
            });
            modeButton.textContent = "Dark Mode: ☑️";
        }
    });
*/

//FORMS
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

//Confirm password
const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#password_repeat");
const msg = document.querySelector("#pwmsg");

kp2.addEventListener("focusout", checkSame);

function checkSame() {
    if (kp1.value !== kp2.value) {
        msg.textContent = "❌ Passwords do not match!"
        msg.style.display = "block";
        kp1.style.background = "#fff0f3";
        kp1.value = "";
        kp2.style.background = "#fff0f3";
        kp2.value = "";
        kp1.focus();
    }
    else {
        msg.style.display = "none";
        kp1.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        kp2.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
}

