let date = new Date();
let currentYear = date.getFullYear();
document.querySelector('.current-year').textContent = currentYear;

let lastModified = document.lastModified;
document.querySelector('.lastModified').innerHTML = `Last modification: ${lastModified}`;

//Hamburguer button
const hamButton = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//calculating time between visits
const today = Date.now()
const lastVisitDate = getLastVisit();

checkLastVisit();
setLastVisit();

function checkLastVisit() {
    const msToDays = 84600000;
    const visitDisplay = document.querySelector(".page-visits");
    let timeBetweenVisits = (today - lastVisitDate) / msToDays;
    if (timeBetweenVisits == 0) {
        visitDisplay.textContent = `Welcome! Let us know if you have any questions.`;
    }
    else if (timeBetweenVisits < 1) {
        visitDisplay.textContent = `Back so soon! Awesome!`
    }
    else if (timeBetweenVisits < 2) {
        visitDisplay.textContent = `You last visited ${timeBetweenVisits.toFixed(0)} day ago.`
    }
    else {
        visitDisplay.textContent = `You last visited ${timeBetweenVisits.toFixed(0)} days ago.`
    }
}

function setLastVisit() {
    localStorage.setItem('lastVisit', JSON.stringify(today));
}

function getLastVisit() {
    return JSON.parse(localStorage.getItem('lastVisit') || today);
}

