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
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const link = document.querySelectorAll("section a");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("☑️")) {
        main.style.background = "#323232";
        main.style.color = "#fff";
        link.forEach((linkN) => {
            linkN.style.color = "#FFEA00";
        });
        modeButton.textContent = "❎";
    } else {
        main.style.background = "#fff";
        main.style.color = "#000";
        link.forEach((linkN) => {
            linkN.style.color = "#00e";
        });
        modeButton.textContent = "☑️";
    }
});
