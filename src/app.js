import { obtainWeather } from "./obtainWeather"

//const getsWeather = getWeather;

//const test = (() => { console.log(getWeather('London')); })();

const processWeather = (weather) => {
  const placeName = weather.name;
  const { country, sunrise, sunset } = weather.sys;
  const clouds = weather.clouds.all;
  const { humidity, pressure, temp }= weather.main
  const feelsLike = weather['main']['feels_like'];
  const tempMin = weather['main']['temp_min'];
  const tempMax = weather['main']['temp_max'];
  const { visibility } = weather;
  const skies = weather.weather[0].main;
  const wind = [weather.wind.speed, weather.wind.deg];

  return {
    placeName, country, clouds, humidity, pressure, temp, feelsLike, tempMax, tempMin, sunrise, sunset, visibility, skies, wind,
  }
}

const test = async () => {
  console.log('test triggered');
  const testResponse = await obtainWeather('London');
  const testProcessed = processWeather(testResponse);
  return (testProcessed);
}



/*const test = () => {
  obtainWeather();
};*/

export { test }