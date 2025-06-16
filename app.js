const apiKey = '65d8e3386e46335b26faada96528f6b0';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const input = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');

const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const weatherInfo = document.getElementById('weather-info');

async function getWeather(city) {
  if (!city) return;

  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  if (data.cod === 200) {
    weatherInfo.style.display = 'block';
    cityName.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)} °C`;
    condition.textContent = data.weather[0].main.toUpperCase();
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} km/h`;
  } else {
    weatherInfo.style.display = 'none';
    alert("City not found.");
  }
}

searchBtn.addEventListener('click', () => {
  getWeather(input.value.trim());
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    getWeather(input.value.trim());
  }
});
