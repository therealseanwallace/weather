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
  console.log("newTemp is", newTemp);
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
    console.log("newTime is", newTime);
    return newTime;
  }
  const oldTimeSplit = oldTime.split(":");
  console.log("oldTimeSplit[0] is", oldTimeSplit[0]);
  const char1 = oldTimeSplit[0].charAt(0);
  console.log("char1 is", char1);
  console.log(typeof char1);
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
  console.log("newTime is", newTime);
  return newTime;
};

const convertTimes = (unit) => {
  console.log("convertTimes! unit is", unit);
  const times = document.querySelectorAll(".time");
  console.log("times is", times);
  if (unit === 0) {
    // i.e. if time is currently in AM/PM notation
    for (let i = 0; i < times.length; i++) {
      const element = times[i].textContent;
      console.log("element is", element);
      console.log("converting times in for loop.");
      console.log(convertTime(element, 0));
      const newTime = convertTime(element, 0);
      times[i].textContent = newTime;
    }
  } else {
    // i.e. if time is currently in 24h notation
    for (let i = 0; i < times.length; i++) {
      const element = times[i].textContent;
      const newTime = convertTime(element, 1);
      times[i].textContent = newTime;
    }
  }
};

const convertTemps = (unit) => {
  const temperatures = document.querySelectorAll(".temperature");
  if (unit === 0) {
    for (let i = 0; i < temperatures.length; i++) {
      const el = temperatures[i].textContent;
      const newTemp = convertTemp(el, 0);
      const newTempRounded = roundTemp(newTemp);
      temperatures[i].textContent = newTempRounded;
      console.log("newTemp is", newTemp);
    }
  } else {
    for (let i = 0; i < temperatures.length; i++) {
      const el = temperatures[i].textContent;
      const newTemp = convertTemp(el, 1);
      const newTempRounded = roundTemp(newTemp);
      temperatures[i].textContent = newTempRounded;
      console.log("newTemp is", newTemp);
    }
  }
};

const convertVis = (value, unit) => {
  console.log("convertVis!");
  const vis = document.querySelector(".vis");
  console.log("vis is", vis);
  if (unit === 0) {
    vis.textContent = Math.round(vis.textContent * 1.09361);
  } else {
    vis.textContent = Math.round(vis.textContent * 0.9144);
  }
};

export { roundTemp, convertTimes, convertTime, convertTemps, convertVis };
