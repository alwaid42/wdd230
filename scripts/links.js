const baseURL = "https://alwaid42.github.io/wdd230/";
const linksURL = "https://alwaid42.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.table(data.weeks)
    displayLinks(data);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {

    });
}

getLinks();