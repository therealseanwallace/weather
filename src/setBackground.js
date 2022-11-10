import Ash from "./images/ash.jpg";
import Clear from "./images/clear.jpg";
import Clouds from "./images/clouds.jpg";
import Dust from "./images/dust.jpg";
import Fog from "./images/fog.jpg";
import Haze from "./images/haze.jpg";
import LClouds from "./images/lclouds.jpg";
import Rain from "./images/rain.jpg";
import Smoke from "./images/smoke.jpg";
import Snow from "./images/snow.jpg";
import Storm from "./images/storm.jpg";
import Wind from "./images/wind.jpg";

const setBackground = (img) => {
  const card = document.querySelector(".weather-card");
  let imgStr;
  switch (img) {
    case "Ash":
      imgStr = `url('${Ash}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Clear":
      imgStr = `url('${Clear}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Clouds":
      imgStr = `url('${Clouds}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Dust":
      imgStr = `url('${Dust}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Fog":
      imgStr = `url('${Fog}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Haze":
      imgStr = `url('${Haze}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "LClouds":
      imgStr = `url('${LClouds}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Rain":
      imgStr = `url('${Rain}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Smoke":
      imgStr = `url('${Smoke}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Storm":
      imgStr = `url('${Storm}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Snow":
      imgStr = `url('${Snow}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Wind":
      imgStr = `url('${Wind}')`;
      card.style.backgroundImage = imgStr;
      break;
    default:
      imgStr = `url('${Clear}')`;
      card.style.backgroundImage = imgStr;
  }
};

export { setBackground };
