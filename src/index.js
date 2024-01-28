function changeWeather(response) {
  let cityElement = document.querySelector("#weatherAppCity");
  let actualTemp = response.data.temperature.current;
  let temperatureValueElement = document.querySelector(
    "#weatherAppTemperatureValue"
  );
  let descriptionElement = document.querySelector("#description");
  let descriptionResponse = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  let actualHumidity = response.data.temperature.humidity;
  let windinessElement = document.querySelector("#windiness");
  let actualWindiness = response.data.wind.speed;
  let timeElement = document.querySelector("#time");
  let actualTime = response.data.time; // The value given is a time stamp (milliseconds since 1970)
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  temperatureValueElement.innerHTML = Math.round(actualTemp);
  descriptionElement.innerHTML = descriptionResponse;
  humidityElement.innerHTML = `${actualHumidity}%`;
  windinessElement.innerHTML = `${actualWindiness}km/h`;
  actualTime = new Date(actualTime * 1000);
  // timeElement.innerHTML = `${actualTime.getDay()} ${actualTime.getHours()}:${actualTime.getMinutes()},`;
  timeElement.innerHTML = formateDate(actualTime);
  iconElement.innerHTML = `<img class="weatherAppIcon" src="${response.data.condition.icon_url}">`;
  console.log(response);
}

function formateDate(time) {
  let hour = time.getHours();
  let mins = time.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[time.getDay()];

  if (mins < 10) {
    mins = `0${mins}`;
  }
  return `${day} ${hour}:${mins}, `;
  // console.log(day);
}

function searchCity(city) {
  // make API call and update the UI
  let apiKey = "797fbe35412tode87c30b05aa524b37f";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiURL).then(changeWeather);
}

function handleSearch(event) {
  event.preventDefault();

  let searchInputElement = document.querySelector("#search-form-input");
  let userSearch = searchInputElement.value;
  // let cityElement = document.querySelector("#weatherAppCity");
  // cityElement.innerHTML = userSearch;
  searchCity(userSearch);
  // Call the API
  // Look for the weather of the city that you are searching for
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);

searchCity("Accra");
