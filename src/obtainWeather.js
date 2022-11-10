import { apiKey } from "./apikey";

const obtainWeather = async (location) => {
  try {
    
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`,
      {
        mode: "cors",
      }
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
