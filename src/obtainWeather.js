import { apiKey } from "./apikey";

const obtainWeather = async (location) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`
    );
    const weather = await response.json();
    if (weather.cod === "404") {
      return 404;
    }
    return weather;
  } catch (error) {
    return 520;
  }
};

export { obtainWeather };
