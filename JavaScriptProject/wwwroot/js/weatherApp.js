const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
    `https://goweather.herokuapp.com/weather/${city}`;

async function getWeatherByLocation(city) {
    try {
        const resp = await fetch(url(city), { origin: "cors" });
        if (!resp.ok) {
            throw new Error("Weather data not available for this location.");
        }
        const respData = await resp.json();

        console.log(respData);

        addWeatherToPage(respData);
    } catch (error) {
        console.error(error.message);
        alert("Hava durumu bilgileri alınamadı.");
    }
}

function addWeatherToPage(data) {
    const temperature = data.temperature.replace("°C", ""); 

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `
        <h2>${temperature}°C</h2>
        <small>${data.description}</small>
    `;

    main.innerHTML = "";

    main.appendChild(weather);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;

    if (city) {
        getWeatherByLocation(city);
    }
});
