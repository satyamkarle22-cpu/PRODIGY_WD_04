const apiKey = "5aae88977e49c211eb33cd258f0149f3";

// Weather Function
async function getWeather() {

    const city =
    document.getElementById("city").value;

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    document.getElementById("cityName").innerText =
    data.name;

    document.getElementById("temperature").innerText =
    `${data.main.temp}°C`;

    document.getElementById("description").innerText =
    data.weather[0].description;

    document.getElementById("humidity").innerText =
    `${data.main.humidity}%`;

    document.getElementById("wind").innerText =
    `${data.wind.speed} m/s`;

}


// ======================
// LIVE CLOCK
// ======================

function updateClock(){

    const now = new Date();

    document.getElementById("clock").innerText =
    now.toLocaleString();

}

updateClock(); // Show immediately

setInterval(updateClock,1000);
