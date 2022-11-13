import { obtainWeather } from "./obtainWeather";
import { convertFromKelvin, convertTimesFromUnix } from "./conversions";




const convertWind = (deg) => {
  // Takes wind direction as degrees and returns a human-readable string
  let direction;
  let index;
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
    default:
      direction = "North-West";
  }
  return [direction, index];
};

const weatherFactory = (weather) => {
  // Takes the object received from Open Weather's API and returns a weather object containing
  // only the weather data we will use in this app
  console.log('weatherFactory! weather is', weather);
  const placeName = weather.name; 
  const { country, sunrise, sunset } = weather.sys;
  const clouds = weather.clouds.all;
  const { humidity, pressure, temp } = weather.main;
  const { id } = weather.weather[0];
  const { dt, forecast } = weather;
  const feelsLike = convertFromKelvin(weather["main"]["feels_like"]);
  const tempMin = convertFromKelvin(weather["main"]["temp_min"]);
  const tempMax = convertFromKelvin(weather["main"]["temp_max"]);
  const airTemp = convertFromKelvin(weather["main"]["temp"]);
  const sunriseTime = convertTimesFromUnix(sunrise, weather.timezone);
  const sunsetTime = convertTimesFromUnix(sunset, weather.timezone);
  const readingTime = convertTimesFromUnix(dt, weather.timezone);
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
    forecast
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