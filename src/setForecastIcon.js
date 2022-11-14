import CloudAlert from "./images/cloud-alert.svg";
import Cloud from "./images/cloud.svg";
import Fog from "./images/fog.svg";
import Rain from "./images/rain.svg";
import Sleet from "./images/sleet.svg";
import Snow from "./images/snow.svg";
import Storm from "./images/storm.svg";
import Sun from "./images/sun.svg";
import Dust from "./images/weather-dust.svg";
import Wind from "./images/weather-windy.svg";

const setForecastIcon = (forecast, i) => {
  const icon = document.querySelector(`.forecast-icon${i}`);
  let weather;
  switch (forecast) {
    case 200:
      icon.style.backgroundImage = `url('${Storm}')`;
      break;
    case 201:
      icon.style.backgroundImage = `url('${Storm}')`;
      break;
    case 202:
      icon.style.backgroundImage = `url('${Storm}')`;
      break;
    case 210:
      icon.style.backgroundImage = `url('${Storm}')`;
      break;
    case 211:
      icon.style.backgroundImage = `url('${Storm}')`;
      break;
    case 212:
      icon.style.backgroundImage = `url('${Storm}')`;
      break;
    case 221:
      icon.style.backgroundImage = `url('${Storm}')`;
      break;
    case 230:
      icon.style.backgroundImage = `url('${Storm}')`;
      break;
    case 231:
      icon.style.backgroundImage = `url('${Storm}')`;
      break;
    case 232:
      icon.style.backgroundImage = `url('${Storm}')`;
      break;
    case 300:
      icon.style.backgroundImage = `url('${Rain}')`;
      break;
    case 301:
      icon.style.backgroundImage = `url('${Rain}')`;
      break;
    case 302:
      icon.style.backgroundImage = `url('${Rain}')`;
      break;
    case 310:
      icon.style.backgroundImage = `url('${Rain}')`;
      break;
    case 311:
      icon.style.backgroundImage = `url('${Rain}')`;
      break;
    case 312:
      icon.style.backgroundImage = `url('${Rain}')`;
      break;
    case 313:
      icon.style.backgroundImage = `url('${Rain}')`;
      break;
    case 314:
      icon.style.backgroundImage = `url('${Rain}')`;
      break;
    case 321:
      icon.style.backgroundImage = `url('${Rain}')`;
      break;
    case 500:
      icon.style.backgroundImage = `url('${Rain}')`;
      break;
    case 501:
      icon.style.backgroundImage = `url('${Rain}')`;
      break;
    case 502:
      icon.style.backgroundImage = `url('${Rain}')`;
      break;
    case 503:
      icon.style.backgroundImage = `url('${Rain}')`;
      break;
    case 504:
      icon.style.backgroundImage = `url('${Rain}')`;
      break;
    case 520:
      icon.style.backgroundImage = `url('${Rain}')`;
      break;
    case 521:
      icon.style.backgroundImage = `url('${Rain}')`;
      break;
    case 522:
      icon.style.backgroundImage = `url('${Rain}')`;
      break;
    case 531:
      icon.style.backgroundImage = `url('${Rain}')`;
      break;
    case 600:
      icon.style.backgroundImage = `url('${Snow}')`;
      break;
    case 601:
      icon.style.backgroundImage = `url('${Snow}')`;
      break;
    case 602:
      icon.style.backgroundImage = `url('${Snow}')`;
      break;
    case 611:
      icon.style.backgroundImage = `url('${Sleet}')`;
      break;
    case 612:
      icon.style.backgroundImage = `url('${Sleet}')`;
      break;
    case 613:
      icon.style.backgroundImage = `url('${Sleet}')`;
      break;
    case 615:
      icon.style.backgroundImage = `url('${Sleet}')`;
      break;
    case 616:
      icon.style.backgroundImage = `url('${Sleet}')`;
      break;
    case 620:
      icon.style.backgroundImage = `url('${Snow}')`;
      break;
    case 621:
      icon.style.backgroundImage = `url('${Snow}')`;
      break;
    case 622:
      icon.style.backgroundImage = `url('${Snow}')`;
      break;
    case 701:
      icon.style.backgroundImage = `url('${Fog}')`;
      break;
    case 711:
      icon.style.backgroundImage = `url('${Fog}')`;
      break;
    case 721:
      icon.style.backgroundImage = `url('${Fog}')`;
      break;
    case 731:
      icon.style.backgroundImage = `url('${Fog}')`;
      break;
    case 741:
      icon.style.backgroundImage = `url('${Fog}')`;
      break;
    case 751:
      icon.style.backgroundImage = `url('${Dust}')`;
      break;
    case 761:
      icon.style.backgroundImage = `url('${Dust}')`;
      break;
    case 762:
      icon.style.backgroundImage = `url('${CloudAlert}')`;
      break;
    case 771:
      icon.style.backgroundImage = `url('${Wind}')`;
      break;
    case 781:
      icon.style.backgroundImage = `url('${Storm}')`;
      break;
    case 800:
      icon.style.backgroundImage = `url('${Sun}')`;
      break;
    case 801:
      icon.style.backgroundImage = `url('${Sun}')`;
      break;
    case 802:
      icon.style.backgroundImage = `url('${Cloud}')`;
      break;
    case 803:
      icon.style.backgroundImage = `url('${Cloud}')`;
      break;
    default:
      icon.style.backgroundImage = `url('${Cloud}')`;
      break;
  }
};

export { setForecastIcon };
