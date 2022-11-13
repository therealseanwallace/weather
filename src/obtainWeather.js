import { apiKey } from "./apikey";

const obtainWeather = async (location) => {
  console.log('obtainWeather! location is', location);
  try {
    let fetchCoords;
    if (location[2]) {
      fetchCoords = await fetch (
        `https://api.openweathermap.org/geo/1.0/direct?q=${location[0]},${location[2]},${location[1]}&limit=5&appid=${apiKey}`,
        {
          mode: "cors",
        }
      );
    } else {
      fetchCoords = await fetch (
        `https://api.openweathermap.org/geo/1.0/direct?q=${location[0]},${location[1]}&limit=5&appid=${apiKey}`,
        {
          mode: "cors",
        }
      );
    }
    
    const remoteCoords = await fetchCoords.json();
    console.log('remoteCoords is', remoteCoords);
    // this is what we are working on. we want to make sure we are getting the user's proper location. having done that,
    // we'll move on to drawing the forecast for the location.
    
    const fetchForecast = await fetch (
      `https://api.openweathermap.org/data/2.5/forecast?lat=${remoteCoords[0].lat}&lon=${remoteCoords[0].lon}&APPID=${apiKey}`,
      {
        mode: "cors",
      }
    );

    
    const currentWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${remoteCoords[0].lat}&lon=${remoteCoords[0].lon}&APPID=${apiKey}`,
      {
        mode: "cors",
      }
    );

    
    
    const weather = await currentWeather.json();
    // console.log('weather is', weather);
    const forecast = await fetchForecast.json();
    // console.log('forecast is', forecast);
    weather.forecast = forecast.list;
    
    
    if (weather.cod === "404") {
      return 404;
    }
    console.log('weather is', weather);
    return weather;
  } catch (error) {
    return 520;
  }
};

export { obtainWeather };
