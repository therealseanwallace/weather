import { obtainWeather } from "./obtainWeather"

//const getsWeather = getWeather;

//const test = (() => { console.log(getWeather('London')); })();

const test = async () => {
  console.log('test triggered');
  const testResponse = await obtainWeather('London');
  console.log(testResponse);
  return (testResponse);
}

/*const test = () => {
  obtainWeather();
};*/

export { test }