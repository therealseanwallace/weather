/* eslint-disable no-unused-vars */
import { obtainWeather } from "./obtainWeather";

const convertTemp = (temp) => {
  const newTemp = temp - 273.15;
  const tempRounded = Math.round(newTemp * 100) / 100;
  return tempRounded;
};

const convertTimes = (time, offset) => {
  // Takes unix time from Open Weather and returns a string with the remote
  const timeOffset = time + offset; // time (i.e. the place we're getting weather for) in human-readable format
  const timeConverted = timeOffset * 1000;
  const d = new Date(timeConverted);
  const dString = JSON.stringify(d);
  const regex = /([01]\d|2[0-3]):[0-5]\d/;
  const time24h = dString.match(regex)[0];
  return time24h;
};

const convertWind = (deg) => {
  // Takes wind direction as degrees and returns
  let direction; // an index for computer use
  let index;
  const testValue = 1;
  switch (true) {
    case deg >= 337.5 || deg < 22.5:
      direction = "North";
      index = 0;
      break;
    case deg < 67.5:
      direction = "North-East";
      index = 1;
      break;
    case deg < 112.5:
      direction = "East";
      index = 2;
      break;
    case deg < 157.5:
      direction = "South-East";
      index = 3;
      break;
    case deg < 202.5:
      direction = "South";
      index = 4;
      break;
    case deg < 247.5:
      direction = "South-West";
      index = 5;
      break;
    case deg < 292.5:
      direction = "West";
      index = 6;
      break;
    case deg < 337.5:
      direction = "North-West";
      index = 7;
      break;
    case deg < 191.25:
      direction = "South";
      index = 8;
      break;
    case deg < 213.75:
      direction = "South-South-West";
      index = 9;
      break;
    case deg < 236.25:
      direction = "South-West";
      index = 10;
      break;
    case deg < 258.75:
      direction = "West-South-West";
      index = 11;
      break;
    default:
      direction = "West";
  }
  return [direction, index];
};

const weatherFactory = (weather) => {
  // Takes the object received from Open Weather's API and returns a weather object containing
  const placeName = weather.name; // only the weather data we will use in this app
  const { country, sunrise, sunset } = weather.sys;
  const clouds = weather.clouds.all;
  const { humidity, pressure, temp } = weather.main;
  const { id } = weather.weather[0];
  const { dt } = weather;
  const feelsLike = convertTemp(weather.main["main"]["feels_like"]);
  const tempMin = convertTemp(weather["main"]["temp_min"]);
  const tempMax = convertTemp(weather["main"]["temp_max"]);
  const airTemp = convertTemp(weather["main"]["temp"]);
  const sunriseTime = convertTimes(sunrise, weather.timezone);
  const sunsetTime = convertTimes(sunset, weather.timezone);
  const readingTime = convertTimes(dt, weather.timezone);
  const { visibility } = weather;
  const windConverted = convertWind(weather.wind.deg);
  const windSpeedkmh = Math.round(weather.wind.speed * 3.6);
  const wind = [windSpeedkmh, windConverted];
  return {
    placeName,
    country,
    clouds,
    humidity,
    pressure,
    airTemp,
    feelsLike,
    tempMax,
    tempMin,
    sunriseTime,
    sunsetTime,
    visibility,
    wind,
    id,
    readingTime,
  };
};

const test = async () => {
  const testResponse = await obtainWeather("Atlanta");
  const testProcessed = weatherFactory(testResponse);
  return testProcessed;
};

const processInput = async (input) => {
  const weather = await obtainWeather(input);
  if (typeof weather === "number") {
    return weather;
  }
  const weatherProcessed = weatherFactory(weather);
  return weatherProcessed;
};

export { test, processInput };
