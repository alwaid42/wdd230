const membersURL = "https://alwaid42.github.io/wdd230/chamber/data/members.json";
const displayarea = document.querySelector('.spot-flex');

getSelectedMembers();

async function getSelectedMembers() {
    try {
        const response = await fetch(membersURL);
        if (response.ok) {
            const data = await response.json();
            displaySelectedMembers(data.companies);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function selectMembers(companies) {
    const highLevelMembers = [];
    companies.forEach((company, index) => {
        if (company.membershiplevel == 'Silver' || company.membershiplevel == 'Gold') {
            highLevelMembers.push(index);
        }
    });
    const rndNumbers = [];
    while (rndNumbers.length < 3) {
        rnd = Math.floor(Math.random() * (highLevelMembers.length));
        if (rndNumbers.indexOf(rnd) === -1) {
            rndNumbers.push(rnd);
        }
    }
    const chosenMembers = [];
    rndNumbers.forEach((number) => {
        chosenMembers.push(highLevelMembers[number]);
    });

    return chosenMembers;
}

const displaySelectedMembers = (companies) => {
    const spotlightMembers = selectMembers(companies);
    companies.forEach((company, index) => {
        if (spotlightMembers.includes(index)) {
            let card = document.createElement('div');
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

            anchor.setAttribute('href', '#');  //used # so the link is not broken to the fake website
            //anchor.setAttribute('href', `$https://{company.website}`); //To transfer to a external website
            anchor.setAttribute('target', '_blank');
            anchor.textContent = `${company.website}`;


            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(anchor);

            displayarea.appendChild(card);
        }
    });
}