// init storage
const storage = new Storage();
const weatherLocation = storage.getLocationData();
// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// init UI
const ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weather.changeLocation(city, country);

    //set location in LS
    storage.setLocationData(city, country);

    getWeather();

    //close modal
    $('#locModal').modal('hide');
})

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}