class Weather {
    constructor(city, country) {
        this.apiKey = '5848314721dfb963b3f9a063ec2ed927';
        this.city = city;
        this.country = country;
    }

    //fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    // change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}