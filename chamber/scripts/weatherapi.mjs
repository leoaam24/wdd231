// FOR HOME PAGE
const weatherInfo = document.querySelector('#weather-info');
if (weatherInfo) {
    const tempValue = document.querySelector('#temp-value');
    const weatherImg = document.querySelector('#weatherImg');
    const weatherCond = document.querySelector('#weather-condition');
    // const windSpeed = document.querySelector('#wind-speed');


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
                console.table(data); // this is for testing the call
            } else {
                throw Error(await response.text);
            }
        } catch (error) {
            console.log(error);
        }
    }

    apiFetch();

    // apiFetchmanydays();


    function displayResults(weatherData) {
        tempValue.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

        const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
        const desc = weatherData.weather[0].description;
        // const windspeed = weatherData.wind.speed;

        weatherCond.innerHTML = `${desc}`;
        weatherCond.textContent = weatherCond.textContent.replace(/\b\w/g, c => c.toUpperCase());
        weatherImg.setAttribute('src', iconsrc);
        weatherImg.setAttribute('alt', 'weather-icon');
        // windSpeed.textContent = windspeed;



        // const tempValueNumber = document.querySelector("#temp-value").textContent;
        // const windSpeedNumber = document.querySelector("#wind-speed").textContent;
        // const windChill = document.querySelector("#wind-chill");
        // const tempCtoF = (tempValueNumber * 9 / 5) + 32;
        // const windSpeedMph = (windSpeedNumber * 2.23694);

        // if (tempCtoF <= 50 && windSpeedMph > 3) {
        //     const windChillFormula = (35.74 + (0.6215 * tempCtoF)) - (35.75 * (windSpeedMph ** 0.16)) + (0.4275 * tempCtoF * (windSpeedMph ** 0.16));
        //     const windChillWatt = (12.1452 + (11.6222 * (Math.sqrt(windSpeedMph))) - (1.16222 * windSpeedMph)) * (33 - tempCtoF);
        //     const windChilltoC = (windChillFormula - 32) * 5 / 9;
        //     console.log('true');
        //     windChill.textContent = `${windChilltoC.toFixed(2)} ºC`;
        // } else {
        //     windChill.textContent = "N/A";
        // }
    }

}


