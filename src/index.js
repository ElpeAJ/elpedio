function changeWeather(response){
  let cityElement = document.querySelector("#weatherAppCity");
  cityElement.innerHTML = response.data.city;

  let actualTemp = response.data.temperature.current;
  let temperatureValueElement = document.querySelector("#weatherAppTemperatureValue");
  temperatureValueElement.innerHTML = Math.round(actualTemp);
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
