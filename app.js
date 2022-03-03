const apiKey = `4fd48ef090c911fe279a74cbaca98c56`;
const searchTemp = () => {
    const cityField = document.getElementById('city-name');
    const city = cityField.value;
    cityField.value= '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // console.log(url);
    
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}


const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    // console.log(temperature);

    //set weather icon
    const iconUrl = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', iconUrl);
}