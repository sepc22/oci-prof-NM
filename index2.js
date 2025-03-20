const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

document.getElementById('searchBtn').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('cityInput').value;

    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`);
    
    if (!response.ok) {
        alert('City not found!');
        return;
    }

    const data = await response.json();
    displayWeather(data);
}

function displayWeather(data) {
    const location = `${data.name}, ${data.sys.country}`;
    const temperature = `${Math.round(data.main.temp)}°F`;
    const description = data.weather[0].description;
    const humidity = `Humidity: ${data.main.humidity}%`;
    const wind = `Wind: ${Math.round(data.wind.speed)} mph`;

    document.getElementById('location').innerText = location;
    document.getElementById('temperature').innerText = temperature;
    document.getElementById('description').innerText = description.charAt(0).toUpperCase() + description.slice(1);
    document.getElementById('humidity').innerText = humidity;
    document.getElementById('wind').innerText = wind;
}
