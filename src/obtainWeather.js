import { apiKey } from "./apikey";

/*const getObject = (location) => {
  return(fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`));
};*/

const obtainWeather = async (location) => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`);
  const weather = await response.json();
  console.log('obtained weather. weather is', weather);
  return (weather);
};

/*const obtainWeather = () => {
  console.log('function works')
};*/

export { obtainWeather };