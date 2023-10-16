const d = new Date();
const banner = document.getElementById("banner");

let weekday = d.getDay();
function checkBanner() {
    if (weekday > 0 && weekday < 4) {
        banner.style.display = "block";
        const deleteButton = document.getElementById("closeBanner");
        deleteButton.addEventListener('click', function () {
            banner.style.display = "none";
        });
    }
    else {
        banner.style.display = "none";
    }
}

checkBanner();