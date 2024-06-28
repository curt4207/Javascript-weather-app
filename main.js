const apiKey = "31ad01c28878b9a77f4d9d0568dc0095"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q="
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json()

    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°f";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " mph";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "icons8-cloud-80.png"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src ="icons8-sun-50.png"
    }
     else if (data.weather[0].main == "Rain") {
        weatherIcon.src ="icons8-rain-80.png"
    }
     else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src ="icons8-drizzle-80.png"
    }
     else if (data.weather[0].main == "Mist") {
        weatherIcon.src ="icons8-mist-100.png"
    }
    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)

})