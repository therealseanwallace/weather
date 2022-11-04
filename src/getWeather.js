import { apiKey } from "./apikey";

/*const getObject = (location) => {
  return(fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`));
};*/

const getWeather = async (location) => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`);
  const weather = await response.json();
  return (weather);
};

export default { getWeather };