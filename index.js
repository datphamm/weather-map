const apiKey = "4e6ca10926dc27f81d55a8f06aed76f0";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const input = document.getElementById("myInput");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    checkWeather(searchBox.value);
  }
});

const checkWeather = async (city) => {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await res.json();
  console.log(data);

  if(res.status === 404){
    alert("Please enter the city name correctly");
  }

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./assets/images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./assets/images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./assets/images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "./assets/images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "./assets/images/mist.png";
  }
  document.querySelector(".weather").style.display = "block";

  
};

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
