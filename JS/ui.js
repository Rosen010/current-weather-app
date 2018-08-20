class UI {
    constructor() {
        this.location = document.getElementById('location');
        this.desc = document.getElementById('description');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('details');
        this.iconImg = document.getElementById('icon');
        this.humidity = document.getElementById('humidity');
        this.pressure = document.getElementById('pressure');
        this.maxTemp = document.getElementById('max-temp');
        this.wind = document.getElementById('wind');
    }

    paint(data) {
        this.location.textContent = data.name;
        this.desc.textContent = data.weather[0].description;
        this.string.textContent = `${data.main.temp}\xB0`;
        this.iconImg.setAttribute('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
        this.iconImg.style.width = '100px';
        this.humidity.textContent = `Relative Humidity: ${data.main.humidity}%`;
        this.pressure.textContent = `Pressure: ${data.main.pressure} hPa`;
        this.maxTemp.textContent = `Max Temperature: ${data.main.temp_max}\xB0`;
        this.wind.textContent = `Wind: ${data.wind.speed} m/s`;
    }
}