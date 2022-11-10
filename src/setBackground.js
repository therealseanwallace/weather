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
  console.log("card is", card);
  console.log("img is", img);
  let imgStr;
  switch (img) {
    case "Ash":
      imgStr = `url('${Ash}')`;
      console.log("imgStr is", imgStr);
      card.style.backgroundImage = imgStr;
      break;
    case "Clear":
      imgStr = `url('${Clear}')`;
      console.log("imgStr is", imgStr);
      card.style.backgroundImage = imgStr;
      break;
    case "Clouds":
      imgStr = `url('${Clouds}')`;
      console.log("imgStr is", imgStr);
      card.style.backgroundImage = imgStr;
      break;
    case "Dust":
      imgStr = `url('${Dust}')`;
      console.log("imgStr is", imgStr);
      card.style.backgroundImage = imgStr;
      break;
    case "Fog":
      imgStr = `url('${Fog}')`;
      console.log("imgStr is", imgStr);
      card.style.backgroundImage = imgStr;
      break;
    case "Haze":
      imgStr = `url('${Haze}')`;
      console.log("imgStr is", imgStr);
      card.style.backgroundImage = imgStr;
      break;
    case "LClouds":
      imgStr = `url('${LClouds}')`;
      console.log("imgStr is", imgStr);
      card.style.backgroundImage = imgStr;
      break;
    case "Rain":
      imgStr = `url('${Rain}')`;
      console.log("imgStr is", imgStr);
      card.style.backgroundImage = imgStr;
      break;
    case "Smoke":
      imgStr = `url('${Smoke}')`;
      console.log("imgStr is", imgStr);
      card.style.backgroundImage = imgStr;
      break;
    case "Storm":
      imgStr = `url('${Storm}')`;
      console.log("imgStr is", imgStr);
      card.style.backgroundImage = imgStr;
      break;
    case "Snow":
      imgStr = `url('${Snow}')`;
      console.log("imgStr is", imgStr);
      card.style.backgroundImage = imgStr;
      break;
    case "Wind":
      imgStr = `url('${Wind}')`;
      console.log("imgStr is", imgStr);
      card.style.backgroundImage = imgStr;
      break;
    default:
      imgStr = `url('${Clear}')`;
      console.log("imgStr is", imgStr);
      card.style.backgroundImage = imgStr;
  }
};

export { setBackground };
