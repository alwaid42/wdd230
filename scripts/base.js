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

//page visits
const visitDisplay = document.querySelector(".page-visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitDisplay.textContent = numVisits;
}
else {
    visitDisplay.textContent = `1`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

//FORMS
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

//Range event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}