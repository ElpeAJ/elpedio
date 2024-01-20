function handleSearch(event) {
  event.preventDefault();

  let searchInputElement = document.querySelector("#search-form-input");

  let cityElement = document.querySelector("#weatherAppCity");
  cityElement.innerHTML = searchInputElement.value;
  // Call the API
  // Look for the weather of the city that you are searching for
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
