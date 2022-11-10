/* eslint-disable prefer-destructuring */
/* eslint-disable default-case */
import { displayObjects, cardObjects, errors } from "./displayObjects";
import { processInput } from "./app";
import { getDescription } from "./getDescription";
import { drawCard } from "./drawCard";
import { componentFactory } from "./componentFactory";
import { setBackground } from "./setBackground";
import {
  convertTemp,
  roundTemp,
  convertTimes,
  convertTemps,
  convertVis,
} from "./conversions";

const buildInterface = () => {
  for (let i = 0; i < displayObjects.length; i++) {
    const element = displayObjects[i];
    componentFactory(element);
  }
  //console.log('displayObjects is', displayObjects);
  //console.log(Object.keys(displayObjects));
  addListeners();
};

const toggleUnits = () => {
  console.log("toggleUnits clicked!");
  const units = document.querySelectorAll(".temp-unit");
  console.log("units is", units);
  if (units[0].textContent === "°C") {
    for (let i = 0; i < units.length; i++) {
      units[i].textContent = "°F";
    }
    convertTemps(0);
    convertTimes(1);
    const visTitle = document.querySelector(".vis-title");
    visTitle.textContent = "Visibility (yards)";
    const visibility = document.querySelector(".vis").textContent;
    console.log("visibility is", visibility);
    convertVis(visibility, 0);
    const sunset = document.querySelector(".sunset");

    /*const newVis = Math.round(convertVis(visibility, 0));
    console.log('newVis is', newVis);
    document.querySelector('.vis').textContent = newVis;*/
  } else {
    for (let i = 0; i < units.length; i++) {
      units[i].textContent = "°C";
    }
    convertTemps(1);
    convertTimes(0);
    const visTitle = document.querySelector(".vis-title");
    visTitle.textContent = "Visibility (meters)";
    const visibility = document.querySelector(".vis").textContent;
    console.log("visibility is", visibility);
    convertVis(visibility, 1);
    /*const newVis = Math.round(convertVis(visibility, 1));
    console.log('newVis is', newVis);
    visibility.textContent = newVis;*/
  }
};

const populateCard = async () => {
  console.log("populateCard - about to get weather");
  const weather = await getInput();
  console.log("populateCard - weather is", weather);

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
    console.log("weather is", weather);
    console.log("weather.dt is", weather.readingTime);
    console.log("weather.clouds is", weather.clouds);
    document.querySelector(".location").textContent = weather.placeName;
    const airTempRounded = roundTemp(weather.airTemp);
    console.log("airTempRounded is", airTempRounded);
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
    const tempUnits = document.querySelectorAll(".temp-unit");
    if (weather.units === 0) {
      for (let i = 0; i < tempUnits.length; i += 1) {
        tempUnits[i].textContent = "°C";
      }
    }
  }
};

const getInput = async () => {
  const { value } = document.querySelector(".location-input");
  console.log("value is", value);
  const weatherObject = await processInput(value);
  console.log("got input. weatherObject is", weatherObject);
  if (typeof weatherObject === "number") {
    return weatherObject;
  }

  console.log("got input, weatherObject is", weatherObject);
  return weatherObject;
};

const addListeners = () => {
  document
    .querySelector(".location-submit")
    .addEventListener("click", populateCard);
};

export { buildInterface };
