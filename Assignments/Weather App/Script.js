const btn = document.getElementById('getInfo');
btn.addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'dfc18fb5842c67a5eb4a3a55558408aa';
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(endpoint);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const weatherData = await response.json();
        
        console.log(weatherData);
        
        const showy = document.getElementById('showy');
        showy.innerHTML = `
            <p>City: ${weatherData.name}</p>
            <p>Temperature: ${weatherData.main.temp} °C</p>
            <p>Weather: ${weatherData.weather[0].description}</p>
            <p>Humidity: ${weatherData.main.humidity} %</p>
            <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        const showy = document.getElementById('showy');
        showy.innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
    }
});
