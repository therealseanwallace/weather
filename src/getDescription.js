const getDescription = (id) => {
  let weather;
  let img;
  switch (id) {
    case 200:
      weather = 'Thunderstorm with light rain';
      img = 'Storm';
      break;
    case 201:
      weather = 'Thunderstorm with rain';
      img = 'Storm';
      break;
    case 202: 
      weather = 'Thunderstorm with heavy rain';
      img = 'Storm';
      break;
    case 210:
      weather = 'Light thunderstorm';
      img = 'Storm';
      break;
    case 211:
      weather = 'Thunderstorm';
      img = 'Storm';
      break;
    case 212:
      weather = 'Heavy thunderstorm';
      img = 'Storm';
      break;
    case 221:
      weather = 'Ragged thunderstorm';
      img = 'Storm';
      break;
    case 230:
      weather = 'Thunderstorm with light drizzle';
      img = 'Storm';
      break;
    case 231:
      weather = 'Thunderstorm with drizzle';
      img = 'Storm';
      break;
    case 232:
      weather = 'Thunderstorm with heavy drizzle';
      img = 'Storm';
      break;
    case 300:
      weather = 'Light intensity drizzle';
      img = 'Rain';
      break;
    case 301:
      weather = 'Drizzle';
      img = 'Rain';
      break;
    case 302: 
      weather = 'Heavy intensity drizzle';
      img = 'Rain';
      break;
    case 310:
      weather = 'Light intensity drizzle rain';
      img = 'Rain';
      break;
    case 311:
      weather = 'Drizzle rain';
      img = 'Rain';
      break;
    case 312:
      weather = 'Heavy intensity drizzle rain';
      img = 'Rain';
      break;
    case 313:
      weather = 'Shower rain and drizzle';
      img = 'Rain';
      break;
    case 314:
      weather = 'Heavy shower rain and drizzle';
      img = 'Rain';
      break;
    case 321:
      weather = 'Shower drizzle';
      img = 'Rain';
      break;
    case 500:
      weather = 'Light rain';
      img = 'Rain';
      break;
    case 501:
      weather = 'Moderate rain';
      img = 'Rain';
      break;
    case 502: 
      weather = 'Heavy intensity rain';
      img = 'Rain';
      break;
    case 503:
      weather = 'Very heavy rain';
      img = 'Rain';
      break;
    case 504:
      weather = 'Extreme rain';
      img = 'Rain';
      break;
    case 520:
      weather = 'Light intensity shower rain';
      img = 'Rain';
      break;
    case 521:
      weather = 'Shower rain ';
      img = 'Rain';
      break;
    case 522:
      weather = 'Heavy intensity shower rain ';
      img = 'Rain';
      break;
    case 531:
      weather = 'Ragged shower rain';
      img = 'Rain';
      break;
    case 600:
      weather = 'Light snow';
      img = 'Snow';
      break;
    case 601:
      weather = 'Snow';
      img = 'Snow';
      break;
    case 602:
      weather = 'Heavy snow';
      img = 'Snow';
      break;
    case 611: 
      weather = 'Sleet';
      img = 'Snow';
      break;
    case 612:
      weather = 'Light shower sleet';
      img = 'Snow';
      break;
    case 613:
      weather = 'Shower sleet';
      img = 'Snow';
      break;
    case 615:
      weather = 'Light rain and snow';
      img = 'Snow';
      break;
    case 616:
      weather = 'Rain and snow';
      img = 'Snow';
      break;
    case 620:
      weather = 'Light shower snow';
      img = 'Snow';
      break;
    case 621:
      weather = 'Shower snow';
      img = 'Snow';
      break;
    case 622:
      weather = 'Heavy shower snow';
      img = 'Snow';
      break;
    case 701:
      weather = 'Mist';
      img = 'Fog';
      break;
    case 711: 
      weather = 'Smoke';
      img = 'Smoke';
      break;
    case 721:
      weather = 'Haze';
      img = 'Haze';
      break;
    case 731:
      weather = 'Dust';
      img = 'Dust';
      break;
    case 741:
      weather = 'Fog';
      img = 'Fog';
      break;
    case 751:
      weather = 'Sand';
      img = 'Dust';
      break;
    case 761:
      weather = 'Dust';
      img = 'Dust';
      break;
    case 762:
      weather = 'Ash';
      img = 'Ash';
      break;
    case 771:
      weather = 'Squalls';
      img = 'Wind';
      break;
    case 781:
      weather = 'Tornado';
      img = 'Storm';
      break;
    case 800:
      weather = 'Clear';
      img = 'Clear';
      break;
    case 801: 
      weather = 'Few clouds: 11-25% ';
      img = 'LClouds';
      break;
    case 802:
      weather = 'Scattered clouds: 25-50%';
      img = 'LClouds';
      break;
    case 803:
      weather = 'Broken clouds: 51-84%';
      img = 'Clouds';
      break;
    case 804:
      weather = 'overcast clouds: 85-100%';
      img = 'Clouds';
      break;
    default:
      weather = "Error! Couldn't find weather code.";
      img = 'Clear';
  }
  return ([weather, img]);
};

export { getDescription }