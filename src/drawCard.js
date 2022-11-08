import { componentFactory } from "./componentFactory";
import { cardObjects } from "./displayObjects";

const drawCard = () => {
  if (document.querySelector('.weather-card')) {
    document.querySelector('.weather-card').remove();
  }
  componentFactory(cardObjects.card);
  componentFactory(cardObjects.summary);
  componentFactory(cardObjects.details);
  componentFactory(cardObjects.location);
  //
  const tempContainer1 = cardObjects.tempContainer;
  tempContainer1.parent = '.summary';
  tempContainer1.class1 = 'temp-container';
  componentFactory(tempContainer1);
  componentFactory(cardObjects.temp);
  const tempUnit0 = cardObjects.tempUnits;
  tempUnit0.parent = '.temp-container';
  componentFactory(tempUnit0);
  //
  componentFactory(cardObjects.description);
  //
  const humidityContainer = cardObjects.detailContainer;
  humidityContainer.class2 = 'humidity-container';
  componentFactory(humidityContainer);
  componentFactory(cardObjects.humidityTitle);
  componentFactory(cardObjects.humidity);
  // 
  const feelsContainer = cardObjects.tempContainer;
  feelsContainer.parent = '.details';
  feelsContainer.class1 = 'feels-container';
  feelsContainer.class2 = 'detail-container'
  componentFactory(feelsContainer);
  const feelsTempContainer = cardObjects.tempUnitContainer;
  feelsTempContainer.class1 = 'feels-temp-container';
  feelsTempContainer.parent = '.feels-container';
  console.log('feelsTempContainer is', feelsTempContainer);
  componentFactory(feelsTempContainer);
  componentFactory(cardObjects.feelsLikeTitle);
  componentFactory(cardObjects.feelsLike);
  const feelsUnits = cardObjects.tempUnits;
  feelsUnits.parent = '.feels-container';
  componentFactory(feelsUnits);
  //
  const highContainer = cardObjects.tempContainer;
  highContainer.parent = '.details';
  highContainer.class1 = 'high-container';
  highContainer.class2 = 'detail-container';
  componentFactory(highContainer);
  const highTempContainer = cardObjects.tempUnitContainer;
  highTempContainer.class1 = 'high-temp-container';
  highTempContainer.parent = '.high-container';
  componentFactory(highTempContainer);
  componentFactory(cardObjects.highTitle);
  componentFactory(cardObjects.high);
  const highUnits = cardObjects.tempUnits;
  highUnits.parent = '.high-container'
  componentFactory(highUnits);

  const lowContainer = cardObjects.tempContainer;
  lowContainer.parent = '.details';
  lowContainer.class1 = 'low-container';
  highContainer.class2 = 'detail-container';
  componentFactory(lowContainer);
  const lowTempContainer = cardObjects.tempUnitContainer;
  lowTempContainer.class1 = 'low-temp-container';
  lowTempContainer.parent = '.low-container';
  componentFactory(lowTempContainer);
  componentFactory(cardObjects.lowTitle);
  componentFactory(cardObjects.low);
  const lowUnits = cardObjects.tempUnits;
  lowUnits.parent = '.low-container'
  componentFactory(lowUnits);
  
  const cloudsContainer = cardObjects.detailContainer;
  cloudsContainer.class2 = 'clouds-container';
  componentFactory(cloudsContainer);
  componentFactory(cardObjects.cloudsTitle);
  componentFactory(cardObjects.clouds);
  
  const pressureContainer = cardObjects.detailContainer;
  pressureContainer.class2 = 'pressure-container';
  componentFactory(pressureContainer);
  componentFactory(cardObjects.pressureTitle);
  componentFactory(cardObjects.pressure);

  const sunriseContainer = cardObjects.detailContainer;
  sunriseContainer.class2 = 'sunrise-container';
  componentFactory(sunriseContainer);
  componentFactory(cardObjects.sunriseTitle);
  componentFactory(cardObjects.sunrise);

  const sunsetContainer = cardObjects.detailContainer;
  sunsetContainer.class2 = 'sunset-container';
  componentFactory(sunsetContainer);
  componentFactory(cardObjects.sunsetTitle);
  componentFactory(cardObjects.sunset);

  const visContainer = cardObjects.detailContainer;
  visContainer.class2 = 'vis-container';
  componentFactory(visContainer);
  componentFactory(cardObjects.visTitle);
  componentFactory(cardObjects.vis);

}

export { drawCard }