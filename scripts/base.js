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

//Weather api
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#current-condition');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-18.91&lon=-48.27&appid=9af1b89696326a7ab94400d81843b3d8&units=metric';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `Weather ${desc}`);
    captionDesc.textContent = `${desc}`;
}

apiFetch();

