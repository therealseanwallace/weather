import _ from "lodash";
import { test } from "./app";
import "./style.css";


const hellowWorld = (() => {
  console.log("hello world!");
})();

const runTest = async () => {
  const result = await test();
  console.log('result is', result);
}

runTest();