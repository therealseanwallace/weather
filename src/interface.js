/* eslint-disable prefer-destructuring */
/* eslint-disable default-case */
import { displayObjects, cardObjects, errors } from "./displayObjects";
import { processInput } from "./app";
import { getDescription } from "./getDescription";
import { drawCard } from "./drawCard";
import { componentFactory } from "./componentFactory";
import { setBackground } from "./setBackground";


const buildInterface = () => {
  for (let i = 0; i < displayObjects.length; i++) {
    const element = displayObjects[i];
    componentFactory(element);
  }
  //console.log('displayObjects is', displayObjects);
  //console.log(Object.keys(displayObjects));
  addListeners();
}


const populateCard = async () => {
  console.log('populateCard - about to get weather');
  const weather = await getInput();
  console.log('populateCard - weather is', weather);
  

  if (weather === 404) {
    componentFactory(errors[404]);
  } else {
    drawCard();
    weather.units = 0;
    console.log('weather is', weather);
    console.log('weather.dt is', weather.readingTime);
    console.log('weather.clouds is', weather.clouds);
    document.querySelector('.location').textContent = weather.placeName;
    document.querySelector('.temp').textContent = `${weather.airTemp}`;
    const sunrise = weather.sunriseTime;
    const sunset = weather.sunsetTime;
    const description = getDescription(weather.id);
    setBackground(description[1]);
    document.querySelector('.sunrise').textContent = sunrise;
    document.querySelector('.sunset').textContent = sunset;
    document.querySelector('.description').textContent = description[0];
    document.querySelector('.humidity').textContent = weather.humidity;
    document.querySelector('.high').textContent = weather.tempMax;
    document.querySelector('.low').textContent = weather.tempMin;
    document.querySelector('.feelsLike').textContent = weather.feelsLike;
    document.querySelector('.clouds').textContent = weather.clouds;
    document.querySelector('.pressure').textContent = weather.pressure;
    document.querySelector('.vis').textContent = weather.visibility;
    const tempUnits = document.querySelectorAll('.temp-unit');
    if (weather.units === 0) {
      for (let i = 0; i < tempUnits.length; i += 1) {
        tempUnits[i].textContent = '°C';
      }    
  }
  }
}

const getInput = async () => {
  const { value } = document.querySelector('.location-input');
  console.log('value is', value);
  const weatherObject = await processInput(value);
  console.log('got input. weatherObject is', weatherObject);
  if (weatherObject === 404) {
    return (404);
  }
  console.log('got input, weatherObject is', weatherObject);
  return (weatherObject);
}

const addListeners = () => {
  document.querySelector('.location-submit').addEventListener('click', populateCard);
}

export { buildInterface }