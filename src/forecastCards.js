import { cardObjects } from "./displayObjects";
import { componentFactory } from "./componentFactory";
import { setForecastIcon } from "./setForecastIcon";
import { convertTimesFromUnix, convertFromKelvin } from "./conversions";

const populateForecastCard = (forecast, i, offset) => {
  const forecastSummary = document.querySelector(`.forecast-summary${i}`);
  const forecastTemp = document.querySelector(`.forecast-temp${i}`);
  const forecastHumidity = document.querySelector(`.forecast-humidity${i}`);
  const forecastTime = document.querySelector(`.forecast-time${i}`);
  const forecastCount = document.querySelector(`.forecast-count${i}`);
  setForecastIcon(forecast.weather[0].id, i);
  forecastSummary.textContent = forecast.weather[0].main;
  forecastTemp.textContent = convertFromKelvin(forecast.main.temp);
  forecastHumidity.textContent = `Humidity: ${forecast.main.humidity} %`;
  const { dt } = forecast;
  const forecastTime24h = convertTimesFromUnix(dt, offset);
  forecastTime.textContent = forecastTime24h;
  if (i === 0) {
    forecastCount.textContent = "";
  } else {
    const hours = i * 3;
    if (hours < 24) {
      forecastCount.textContent = `+ ${hours} hours`;
    } else {
      const days = hours / 24;
      const daysRemainder = days % 1;
      const daysRounded = days - daysRemainder;
      forecastCount.textContent = `+ ${daysRounded} days`;
    }
  }
};

const drawForecastCard = (forecast, i, offset) => {
  const {
    forecastCard,
    forecastTime,
    forecastTemp,
    forecastDescription,
    forecastHumidity,
    tempContainer,
    tempUnits,
    forecastCount,
    forecastIcon,
    tempLabel,
  } = cardObjects;
  forecastCard.class2 = `forecast${i}`;
  componentFactory(forecastCard);
  forecastTime.class2 = `forecast-time${i}`;
  forecastTime.parent = `.forecast${i}`;
  forecastTemp.class2 = `forecast-temp${i}`;
  forecastTemp.parent = `.forecast-temp-container${i}`;
  forecastHumidity.class2 = `forecast-humidity${i}`;
  forecastHumidity.parent = `.forecast${i}`;
  forecastDescription.class2 = `forecast-summary${i}`;
  forecastDescription.parent = `.forecast${i}`;
  tempUnits.class2 = `forecast-temp-units${i}`;
  tempUnits.parent = `.forecast-temp-container${i}`;
  tempContainer.parent = `.forecast${i}`;
  tempContainer.class2 = `forecast-temp-container${i}`;
  forecastCount.parent = `.forecast${i}`;
  forecastCount.class2 = `forecast-count${i}`;
  forecastIcon.parent = `.forecast${i}`;
  forecastIcon.class2 = `forecast-icon${i}`;
  tempLabel.parent = `.forecast-temp-container${i}`;
  componentFactory(forecastIcon);
  componentFactory(forecastDescription);
  componentFactory(forecastTime);
  componentFactory(forecastCount);
  componentFactory(tempContainer);
  componentFactory(tempLabel);
  componentFactory(forecastTemp);
  componentFactory(tempUnits);
  componentFactory(forecastHumidity);

  populateForecastCard(forecast, i, offset);
};

const populateForecasts = (forecasts, offset) => {
  for (let i = 0; i < forecasts.length; i += 1) {
    const element = forecasts[i];
    drawForecastCard(element, i, offset);
  }
};

export { populateForecastCard, populateForecasts, drawForecastCard };
