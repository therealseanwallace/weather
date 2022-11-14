const convertTemp = (temp, unit) => {
  let newTemp;
  if (unit === 0) {
    newTemp = temp * 1.8 + 32;
  } else {
    newTemp = (temp - 32) * 0.5556;
  }
  return newTemp;
};

const roundTemp = (temp) => {
  let newTemp = temp;
  newTemp = Math.round(temp * 10) / 10;
  return newTemp;
};

const convertTime = (oldTime, unit) => {
  if (unit === 0) {
    // i.e. if time is currently in AM/PM notation
    const oldTimeSplit = oldTime.split(" ");
    const timeSplit = oldTimeSplit[0].split(":");
    let newTime;
    if (timeSplit[0] < 10 && oldTimeSplit[1] === "AM") {
      newTime = `0${timeSplit[0]}:${timeSplit[1]}`;
    }
    if (timeSplit[0] >= 10 && oldTimeSplit[1] === "AM") {
      newTime = `${timeSplit[0]}:${timeSplit[1]}`;
    }
    if (timeSplit[0] === 12 && oldTimeSplit[1] === "PM") {
      newTime = `0${timeSplit[0]}:${timeSplit[1]}`;
    }
    if (timeSplit[0] <= 11 && oldTimeSplit[1] === "PM") {
      newTime = `${Number(timeSplit[0]) + 12}:${timeSplit[1]}`;
    }
    return newTime;
  }
  // time is in 24h notation
  const oldTimeSplit = oldTime.split(":");
  const char1 = oldTimeSplit[0].charAt(0);
  if (Number(char1) === 0) {
    oldTimeSplit[0] = oldTimeSplit[0].charAt(1);
  }
  let newTime;
  if (oldTimeSplit[0] <= 11) {
    newTime = `${oldTimeSplit[0]}:${oldTimeSplit[1]} AM`;
  }
  if (oldTimeSplit[0] === 12) {
    newTime = `${oldTimeSplit[0]}:${oldTimeSplit[1]} PM`;
  }
  if (oldTimeSplit[0] > 12) {
    newTime = `${oldTimeSplit[0] - 12}:${oldTimeSplit[1]} PM`;
  }
  return newTime;
};

const convertTimesFromUnix = (time, offset) => {
  // Takes unix time from Open Weather and returns a string with the remote
  // time (i.e. the place we're getting weather for) in human-readable format
  const timeOffset = time + offset;
  const timeConverted = timeOffset * 1000;
  const d = new Date(timeConverted);
  const dString = JSON.stringify(d);
  const regex = /([01]\d|2[0-3]):[0-5]\d/;
  const time24h = dString.match(regex)[0];
  return time24h;
};

const convertTimes = (unit) => {
  const times = document.querySelectorAll(".time");
  if (unit === 0) {
    // i.e. if time is currently in AM/PM notation
    for (let i = 0; i < times.length; i += 1) {
      const element = times[i].textContent;
      const newTime = convertTime(element, 0);
      times[i].textContent = newTime;
    }
  } else {
    // i.e. if time is currently in 24h notation
    for (let i = 0; i < times.length; i += 1) {
      const element = times[i].textContent;
      const newTime = convertTime(element, 1);
      times[i].textContent = newTime;
    }
  }
};

const convertTemps = (unit) => {
  const temperatures = document.querySelectorAll(".temperature");
  if (unit === 0) {
    for (let i = 0; i < temperatures.length; i += 1) {
      const el = temperatures[i].textContent;
      const newTemp = convertTemp(el, 0);
      const newTempRounded = roundTemp(newTemp);
      temperatures[i].textContent = newTempRounded;
    }
  } else {
    for (let i = 0; i < temperatures.length; i += 1) {
      const el = temperatures[i].textContent;
      const newTemp = convertTemp(el, 1);
      const newTempRounded = roundTemp(newTemp);
      temperatures[i].textContent = newTempRounded;
    }
  }
};

const convertWind = (unit) => {
  const wind = document.querySelector(".wind-speed");
  const windUnits = document.querySelector(".wind-units");
  if (unit === 0) {
    wind.dataset.kmh = wind.textContent;
    const kmToM = wind.textContent * 0.621371;
    wind.textContent = Math.round(kmToM);
    windUnits.textContent = "mph";
  } else {
    wind.textContent = wind.dataset.kmh;
    windUnits.textContent = "km/h";
  }
};

const convertVis = (value, unit) => {
  const vis = document.querySelector(".vis");
  if (unit === 0) {
    vis.textContent = Math.round(vis.textContent * 1.09361);
  } else {
    vis.textContent = Math.round(vis.textContent * 0.9144);
  }
};

const convertFromKelvin = (temp) => {
  const newTemp = temp - 273.15;
  const tempRounded = Math.round(newTemp * 100) / 100;
  return tempRounded;
};

export {
  roundTemp,
  convertTimes,
  convertTime,
  convertTemps,
  convertVis,
  convertWind,
  convertFromKelvin,
  convertTimesFromUnix,
};
