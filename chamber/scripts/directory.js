const membersURL = "https://alwaid42.github.io/wdd230/chamber/data/members.json";

const displayarea = document.querySelector('#members');

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        if (response.ok) {
            const data = await response.json();
            displayMembers(data.companies);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displayMembers = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let name = document.createElement('h3');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let anchor = document.createElement('a');

        image.setAttribute('src', `images/${company.icon}`);
        image.setAttribute('alt', `${company.name} Logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '150');

        name.innerHTML = company.name;
        phone.innerHTML = company.phonenumber;
        address.innerHTML = company.address;

        anchor.setAttribute('href', '#'); //used # so the link is not broken to the fake website
        //anchor.setAttribute('href', `$https://{company.website}`); //To transfer to a external website
        anchor.setAttribute('target', '_blank');
        anchor.textContent = `${company.website}`;


        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(anchor);

        displayarea.appendChild(card);
    });
}

getMembers();

//toggle view
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#members");

gridbutton.addEventListener("click", showGrid);
listbutton.addEventListener("click", showList);

function showGrid() {
    display.classList.add("grid");
    display.classList.remove("list");
}
function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
