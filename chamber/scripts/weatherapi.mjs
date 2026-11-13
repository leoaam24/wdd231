// FOR HOME PAGE
const weatherInfo = document.querySelector('#weather-info');
if (weatherInfo) {
    const tempValue = document.querySelector('#temp-value');
    const weatherImg = document.querySelector('#weatherImg');
    const weatherCond = document.querySelector('#weather-condition');
    const advanceDays = document.querySelector('#advanceWeather');


    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Digos&appid=2a4b1a24eb793a6e0322abadb8e01f64&units=metric';
    const weatherdays = 'https://api.openweathermap.org/data/4.0/onecall/timeline/1day?lat=6.7575&lon=125.3524&appid=7e89d910723078244731426aa55e2067&units=metric'

    async function apiFetch() {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                // console.table(data.weather[0]); // this is for testing the call
                displayResults(data);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function apiFetchmanydays() {
        try {
            const response = await fetch(weatherdays);
            if (response.ok) {
                const data = await response.json();
                // console.table(data); // this is for testing the call
                displayAdvance(data.data)
            } else {
                throw Error(await response.text);
            }
        } catch (error) {
            console.log(error);
        }
    }

    apiFetch();

    apiFetchmanydays();


    function displayResults(weatherData) {
        tempValue.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

        const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
        const desc = weatherData.weather[0].description;
        // const windspeed = weatherData.wind.speed;

        weatherCond.innerHTML = `${desc}`;
        weatherCond.textContent = weatherCond.textContent.replace(/\b\w/g, c => c.toUpperCase());
        weatherImg.setAttribute('src', iconsrc);
        weatherImg.setAttribute('alt', 'weather-icon');
    }

    function displayAdvance(weatherData) {
        weatherData.forEach(function (chunk, i) {
            if (i <= 2) {
                const date = new Date(chunk.dt * 1000);
                const iconsrc = `https://openweathermap.org/img/w/${chunk.weather[0].icon}.png`;

                let day = document.createElement("p");
                let weather = document.createElement("p");
                let temp = document.createElement("p");
                let icon = document.createElement("img");
                let hr = document.createElement("hr");

                day.textContent = date.toString();
                weather.textContent = chunk.weather[0].description;
                temp.textContent = `${chunk.temp.min.toFixed(0)} ºC`;

                icon.setAttribute('src', iconsrc);
                icon.setAttribute('alt', `weather icon for ${date.toString()}`);
                weather.setAttribute('id', 'advanceWeatherDescription');

                advanceDays.appendChild(day);
                advanceDays.appendChild(weather);
                advanceDays.appendChild(icon);
                advanceDays.appendChild(temp);
                advanceDays.appendChild(hr);
            }
        })



    }

}


