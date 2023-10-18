const weatherArea = document.querySelector('.weather');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=-18.91&lon=-48.27&appid=9af1b89696326a7ab94400d81843b3d8&units=metric';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    const cnt = [0, 8, 16, 24];
    cnt.forEach((index) => {
        let card = document.createElement('div');
        let day = document.createElement('h3');
        //let image = document.createElement('img');
        let temp = document.createElement('p');
        let desc = document.createElement('p');

        const date = data.list[index].dt_txt;

        /*
        image.setAttribute('src', `https://openweathermap.org/img/w/${data.list[index].weather[0].icon}.png`);
        image.setAttribute('alt', data.list[index].weather[0].description);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '100');
        image.setAttribute('height', '100');
        */

        if (index == 0) {
            day.innerHTML = 'Today';
        }
        else if (index == 8) {
            day.innerHTML = 'Tomorrow';
        }
        else if (index == 16) {
            day.innerHTML = 'Day After';
        }
        else if (index == 24) {
            day.innerHTML = 'Day After that';
        }

        temp.innerHTML = `${data.list[index].main.temp}&deg;C`;
        desc.innerHTML = `${data.list[index].weather[0].description}`;

        card.appendChild(day);
        //card.appendChild(image);
        card.appendChild(temp);
        card.appendChild(desc);
        //card.appendChild(date);

        weatherArea.appendChild(card);
    });
}

apiFetch();