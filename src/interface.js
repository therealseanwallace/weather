import { displayObjects, errors } from "./displayObjects";
import { processInput } from "./app";
import { getDescription } from "./getDescription";
import { drawCard } from "./drawCard";
import { componentFactory } from "./componentFactory";
import { setBackground } from "./setBackground";
import { populateForecasts } from "./forecastCards";
import {
  roundTemp,
  convertTimes,
  convertTemps,
  convertVis,
  convertWind,
} from "./conversions";

const getInput = async () => {
  const townCityInput = document.querySelector(".location-input");
  const townCityValue = townCityInput.value;
  const countrySelect = document.querySelector(".crs-country");
  const countrySelectValue = countrySelect.value;
  let stateSelectValue;
  let weatherObject;
  if (countrySelectValue === "US") {
    stateSelectValue = document.querySelector(".state-input").value;
    weatherObject = await processInput([
      townCityValue,
      countrySelectValue,
      stateSelectValue,
    ]);
    return weatherObject;
  }
  weatherObject = await processInput([townCityValue, countrySelectValue]);
  return weatherObject;
};

const toggleUnits = () => {
  const units = document.querySelectorAll(".temp-unit");
  if (units[0].textContent === "°C") {
    for (let i = 0; i < units.length; i += 1) {
      units[i].textContent = "°F";
    }
    convertTemps(0);
    convertTimes(1);
    convertWind(0);
    const visTitle = document.querySelector(".vis-title");
    visTitle.textContent = "Visibility (yards)";
    const visibility = document.querySelector(".vis").textContent;
    convertVis(visibility, 0);
  } else {
    for (let i = 0; i < units.length; i += 1) {
      units[i].textContent = "°C";
    }
    convertTemps(1);
    convertTimes(0);
    convertWind(1);
    const visTitle = document.querySelector(".vis-title");
    visTitle.textContent = "Visibility (meters)";
    const visibility = document.querySelector(".vis").textContent;
    convertVis(visibility, 1);
  }
};

const populateCard = async () => {
  const weather = await getInput();
  if (typeof weather === "number") {
    if (document.querySelector(".weather-card")) {
      document.querySelector(".weather-card").remove();
    }
    if (document.querySelector(".error")) {
      document.querySelector(".error").remove();
    }
    if (weather === 404) {
      componentFactory(errors[404]);
    } else {
      componentFactory(errors[520]);
    }
  } else {
    drawCard();
    document
      .querySelector(".toggle-units")
      .addEventListener("click", toggleUnits);
    weather.units = 0;
    document.querySelector(
      ".location"
    ).textContent = `${weather.placeName}, ${weather.country}`;
    const airTempRounded = roundTemp(weather.airTemp);
    document.querySelector(".temp").textContent = airTempRounded;
    const sunrise = weather.sunriseTime;
    const sunset = weather.sunsetTime;
    const description = getDescription(weather.id);
    setBackground(description[1]);
    document.querySelector(".sunrise").textContent = sunrise;
    document.querySelector(".sunset").textContent = sunset;
    document.querySelector(".description").textContent = description[0];
    document.querySelector(".humidity").textContent = weather.humidity;
    const maxRounded = roundTemp(weather.tempMax);
    document.querySelector(".high").textContent = maxRounded;
    const minRounded = roundTemp(weather.tempMin);
    document.querySelector(".low").textContent = minRounded;
    const feelsRounded = roundTemp(weather.feelsLike);
    document.querySelector(".feelsLike").textContent = feelsRounded;
    document.querySelector(".clouds").textContent = weather.clouds;
    document.querySelector(".pressure").textContent = weather.pressure;
    document.querySelector(".vis").textContent = weather.visibility;
    document.querySelector(".wind-dir").textContent = weather.wind[1][0];
    document.querySelector(".wind-speed").textContent = weather.wind[0];
    populateForecasts(weather.forecast, weather.offset);
    const tempUnits = document.querySelectorAll(".temp-unit");
    if (weather.units === 0) {
      for (let i = 0; i < tempUnits.length; i += 1) {
        tempUnits[i].textContent = "°C";
      }
    }
  }
};

const showStateifUS = () => {
  const country = document.querySelector(".crs-country");
  if (country.value === "US") {
    const stateInput = document.querySelector(".state-input");
    stateInput.classList.remove("hidden");
  }
  if (country.value !== "US") {
    const stateInput = document.querySelector(".state-input");
    stateInput.classList.add("hidden");
  }
};

const addListeners = () => {
  document
    .querySelector(".location-submit")
    .addEventListener("click", populateCard);
  document
    .querySelector(".crs-country")
    .addEventListener("click", showStateifUS);
};

const buildInterface = () => {
  for (let i = 0; i < displayObjects.length; i += 1) {
    const element = displayObjects[i];
    componentFactory(element);
  }
  addListeners();
};





export { buildInterface };
