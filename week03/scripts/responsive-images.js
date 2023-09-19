let date = new Date();
let currentYear = date.getFullYear();
document.querySelector('#current-year').textContent = currentYear;

let lastModified = document.lastModified;
document.querySelector('#lastModified').innerHTML = `Last modification: ${lastModified}`;