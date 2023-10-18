const weatherArea = document.querySelector('.weather');
const weatherDay = new Date();
let weekdayWeather = weatherDay.getDay();

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
    let d2 = '';
    let d3 = '';
    if (weekdayWeather == 0) {
        d2 = 'Tuesday';
        d3 = 'Wednesday';
    }
    else if (weekdayWeather == 1) {
        d2 = 'Wednesday';
        d3 = 'Thursday';
    }
    else if (weekdayWeather == 2) {
        d2 = 'Thursday';
        d3 = 'Friday';
    }
    else if (weekdayWeather == 3) {
        d2 = 'Friday';
        d3 = 'Saturday';
    }
    else if (weekdayWeather == 4) {
        d2 = 'Saturday';
        d3 = 'Sunday';
    }
    else if (weekdayWeather == 5) {
        d2 = 'Sunday';
        d3 = 'Monday';
    }
    else if (weekdayWeather == 6) {
        d2 = 'Monday';
        d3 = 'Tuesday';
    }
    else if (weekdayWeather == 7) {
        d2 = 'Tuesday';
        d3 = 'Wednesday';
    }

    const cnt = [0, 8, 16, 24];

    cnt.forEach((index) => {
        let card = document.createElement('div');
        let day = document.createElement('h3');
        let temp = document.createElement('p');

        if (index == 0) {
            day.innerHTML = 'Today';
        }
        else if (index == 8) {
            day.innerHTML = 'Tomorrow';
        }
        else if (index == 16) {
            day.innerHTML = d2;
        }
        else if (index == 24) {
            day.innerHTML = d3;
        }

        temp.innerHTML = `${data.list[index].main.temp}&deg;C`;

        card.appendChild(day);
        card.appendChild(temp);
        if (index == 0) {
            let figure = document.createElement('figure');
            let image = document.createElement('img');
            let desc = document.createElement('figcaption');

            desc.innerHTML = `${data.list[index].weather[0].description}`;

            image.setAttribute('src', `https://openweathermap.org/img/w/${data.list[index].weather[0].icon}.png`);
            image.setAttribute('alt', data.list[index].weather[0].description);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('width', '100');
            image.setAttribute('height', '100');

            figure.appendChild(image);
            figure.appendChild(desc);

            card.appendChild(figure)
        }

        weatherArea.appendChild(card);
    });
}

apiFetch();