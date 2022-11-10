import { apiKey } from "./apikey";

/*const getObject = (location) => {
  return(fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`));
};*/

const obtainWeather = async (location) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`
    );
    const weather = await response.json();
    console.log("obtained weather. weather is", weather);
    if (weather.cod === "404") {
      console.log("uh oh! 404");
      return 404;
    }
    return weather;
  } catch (error) {
    return 520;
  }
};

/*const obtainWeather = () => {
  console.log('function works')
};*/

export { obtainWeather };
