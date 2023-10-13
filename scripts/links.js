const baseURL = "https://alwaid42.github.io/wdd230/";
const linksURL = "https://alwaid42.github.io/wdd230/data/links.json";

const linkList = document.querySelector('#linksList');

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data.weeks);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let item = document.createElement('li');
        item.textContent = `${week.week} : `;
        week.links.forEach((link) => {
            let anchor = document.createElement('a');

            anchor.setAttribute('href', link.url);
            anchor.setAttribute('target', '_blank');
            anchor.textContent = `${link.title}`;

            item.appendChild(anchor);
            item.append(' | ');
        });
        linkList.appendChild(item);
    });
}

getLinks();