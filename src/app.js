/* eslint-disable no-unused-vars */
import { fromUnixTime } from 'date-fns'
import { obtainWeather } from "./obtainWeather"
import { millisecondsToHours } from 'date-fns'
import { formatInTimeZone, zonedTimeToUtc } from 'date-fns-tz'


//const getsWeather = getWeather;

//const test = (() => { console.log(getWeather('London')); })();

const convertTemp = (temp) => {
  const newTemp = temp - 273.15;
  const tempRounded = Math.round(newTemp * 100) / 100;
  return (tempRounded);
};

const convertTimes = (time, offset) => { // Takes unix time from Open Weather and returns a string with the remote
  const timeOffset = time + offset;      // time (i.e. the place we're getting weather for) in human-readable format
  const localOffset = ((new Date().getTimezoneOffset()) * 60) * 1000;
  const timeConverted = (timeOffset * 1000) + localOffset;
  const d = new Date(timeConverted);
  const humanDate = d.toLocaleString();
  const humanTime = humanDate.split(', ')[1];
  console.log('humanTime is', humanTime);
  return (humanTime);
}

const convertWind = (deg) => {                 // Takes wind direction as degrees and returns
  console.log('converting wind. deg is', deg); // an array with direction in plain English and
  let direction;                               // an index for computer use
  let index;
  const testValue = 1;
  switch (true) {
    case (deg >= 348.75 || deg < 11.25 ):
      direction = 'North';
      index = 0;
      break;
    case (deg < 33.75):
      direction = 'North-North-East';
      index = 1;
      break;
    case (deg < 56.25):
      direction = 'North-East';
      index = 2;
      break;
    case (deg < 78.75):
      direction = 'East-North-EasT';
      index = 3;
      break;
    case (deg < 101.25):
      direction = 'East';
      index = 4;
      break;
    case (deg < 123.75):
      direction = 'East-South-East';
      index = 5;
      break;
    case (deg < 146.25):
      direction = 'South-East';
      index = 6;
      break;
    case (deg < 168.75):
      direction = 'South-South-East';
      index = 7;
      break;
    case (deg < 191.25):
      direction = 'South';
      index = 8;
      break;
    case (deg < 213.75):
      direction = 'South-South-West';
      index = 9;
      break;
    case (deg < 236.25):
      direction = 'South-West';
      index = 10;
      break;
    case (deg < 258.75):
      direction = 'West-South-West';
      index = 11;
      break;
    case (deg < 281.25):
      direction = 'West';
      index = 12;
      break;
    case (deg < 303.75):
      direction = 'West-North-West';
      index = 13;
      break;
    case (deg < 326.25):
      direction = 'North-West';
      index = 14;
      break;
    default:
      direction = 'North-North-West';
      index = 15;
      break;
  }
  return ([direction, index]);
};

const weatherFactory = (weather) => { // Takes the object received from Open Weather's API and returns a weather object containing
  const placeName = weather.name;     // only the weather data we will use in this app
  const { country, sunrise, sunset } = weather.sys;
  const clouds = weather.clouds.all;
  const { humidity, pressure, temp }= weather.main;
  const feelsLike = convertTemp(weather['main']['feels_like']);
  const tempMin = convertTemp(weather['main']['temp_min']);
  const tempMax = convertTemp(weather['main']['temp_max']);
  const airTemp = convertTemp(weather['main']['temp']);
  //console.log('sunrise, sunset are', sunrise, sunset);
  const sunRiseTime = convertTimes(sunrise, weather.timezone, 'sunrise');
  const sunsetTime = convertTimes(sunset, weather.timezone, 'sunset');
  const { visibility } = weather;
  const skies = weather.weather[0].main;
  const windDeg = weather.wind.deg;
  const windConverted = convertWind(weather.wind.deg);
  const wind = [weather.wind.speed, windConverted];
  return {
    placeName, country, clouds, humidity, pressure, airTemp, feelsLike, tempMax, tempMin, sunRiseTime, sunsetTime, visibility, skies, wind,
  }
};

const test = async () => {
  console.log('test triggered');
  const testResponse = await obtainWeather('Atlanta');
  const testProcessed = weatherFactory(testResponse);
  return (testProcessed);
}

const processInput = async (input) => {
  console.log('processing input. input is', input);
  const weather = await obtainWeather(input);
  const weatherProcessed = await weatherFactory(weather);
  console.log('weatherProcessed is', weatherProcessed);
}

/*const test = () => {
  obtainWeather();
};*/

export { test, processInput }