const baseURL = "https://alwaid42.github.io/wdd230/";
const linksURL = "https://alwaid42.github.io/wdd230/data/links.json";

const linkList = document.querySelector('#linksList');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let item = document.createElement('li');
        item.innerHTML = `${week.week} :`;
        /*week.links.forEach((lnk) => {
            item.appendChild(lnk);
        });
        */
        linkList.appendChild(item);
    });
}

getLinks();