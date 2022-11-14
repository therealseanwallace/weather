import { cardObjects, displayObjects, errors } from "./displayObjects";
import { processInput } from "./app";
import { getDescription } from "./getDescription";
import { drawCard } from "./drawCard";
import { componentFactory } from "./componentFactory";
import { setBackground } from "./setBackground";
import {
  roundTemp,
  convertTimes,
  convertTemps,
  convertVis,
  convertWind,
  convertFromKelvin,
  convertTimesFromUnix,
} from "./conversions";

const buildInterface = () => {
  for (let i = 0; i < displayObjects.length; i += 1) {
    const element = displayObjects[i];
    componentFactory(element);
  }
  addListeners();
};

const toggleUnits = () => {
  const units = document.querySelectorAll(".temp-unit");
  if (units[0].textContent === "°C") {
    for (let i = 0; i < units.length; i++) {
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
    for (let i = 0; i < units.length; i++) {
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

const trimDateTime = (dateTime) => {
  
}
const populateForecastCard = (forecast, i, offset) => {
  console.log("populateForecastCard! forecast, i, offset is", forecast, i, offset);
  const forecastSummary = document.querySelector(`.forecast-summary${i}`);
  const forecastTemp = document.querySelector(`.forecast-temp${i}`);
  const forecastHumidity = document.querySelector(`.forecast-humidity${i}`);
  const forecastTime = document.querySelector(`.forecast-time${i}`);
  const forecastCount = document.querySelector(`.forecast-count${i}`);
  forecastSummary.textContent = forecast.weather[0].main;
  forecastTemp.textContent = convertFromKelvin(forecast.main.temp);
  forecastHumidity.textContent = forecast.main.humidity;
  const { dt } = forecast;
  const forecastTime24h = convertTimesFromUnix(dt, offset);
  forecastTime.textContent = forecastTime24h;
  if (i === 0) {
    console.log('forecastCount is', forecastCount);
    forecastCount.textContent = 'First forecast';
  } else {
    let hours = i * 3;
    if (hours < 24) {
      forecastCount.textContent = `+ ${hours} hours`;
    } else {
      let days = hours / 24;
      //const remainder = 24 % hours;
      console.log('days is', days);
      //console.log('remainder is', remainder);
      const daysRemainder = days % 1;
      const daysRounded = days - daysRemainder;
      console.log('daysRounded is', daysRounded);
      forecastCount.textContent = `+ ${daysRounded} days`;
    }
    
    console.log('hours is', hours);

  }
};

const drawForecastCard = (forecast, i, offset) => {
  const {
    forecastCard,
    forecastTime,
    forecastTemp,
    forecastDescription,
    forecastHumidity,
    tempContainer,
    tempUnits,
    forecastCount,
  } = cardObjects;
  console.log("drawForecastCard. forecast, i is", forecast, i);
  forecastCard.class2 = `forecast${i}`;
  componentFactory(forecastCard);
  forecastTime.class2 = `forecast-time${i}`;
  forecastTime.parent = `.forecast${i}`;
  forecastTemp.class2 = `forecast-temp${i}`;
  forecastTemp.parent = `.forecast-temp-container${i}`;
  forecastHumidity.class2 = `forecast-humidity${i}`;
  forecastHumidity.parent = `.forecast${i}`;
  forecastDescription.class2 = `forecast-summary${i}`;
  forecastDescription.parent = `.forecast${i}`;
  tempUnits.class2 = `forecast-temp-units${i}`;
  tempUnits.parent = `.forecast-temp-container${i}`;
  tempContainer.parent = `.forecast${i}`;
  tempContainer.class2  = `forecast-temp-container${i}`;
  forecastCount.parent = `.forecast${i}`;
  forecastCount.class2  = `forecast-count${i}`;
  componentFactory(forecastDescription);
  componentFactory(tempContainer);
  componentFactory(forecastTemp);
  componentFactory(tempUnits);
  componentFactory(forecastHumidity);
  componentFactory(forecastTime);
  componentFactory(forecastCount);
  populateForecastCard(forecast, i, offset);
};

const populateForecasts = (forecasts, offset) => {
  console.log("populateForecasts! forecasts is", forecasts);
  for (let i = 0; i < forecasts.length; i++) {
    const element = forecasts[i];
    drawForecastCard(element, i, offset);
  }
};

const populateCard = async () => {
  console.log("populateCard!");
  const weather = await getInput();
  console.log("populateCard! weather is", weather);
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
    console.log("weatherObject is", weatherObject);
    return weatherObject;
  }
  weatherObject = await processInput([townCityValue, countrySelectValue]);
  console.log("weatherObject is", weatherObject);
  return weatherObject;
};

const showStateifUS = () => {
  const country = document.querySelector(".crs-country");
  console.log("country is", country, "value is", country.value);
  if (country.value == "US") {
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

export { buildInterface };
