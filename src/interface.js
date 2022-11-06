import { displayObjects } from "./displayObjects";
import { processInput } from "./app";

const componentFactory = (element) => {
  //console.log('componentFactory active! element is', element);
  const {
    name, nodeType, parent, text, inputType, value, class1,
    class2, taskID, objID, placeholder, innerHTML, prioStyle,
  } = element;
  const createDOMNode = () => {
    const parentNode = document.querySelector(parent);
    const newDOMNode = document.createElement(nodeType);
    if (text) {
      newDOMNode.innerHTML = text;
    }
    if (inputType) {
      newDOMNode.type = inputType;
    }
    if (value) {
      newDOMNode.value = value;
    }
    if (class1) {
      newDOMNode.classList.add(class1);
    }
    if (class2) {
      newDOMNode.classList.add(class2);
    }
    if (placeholder) {
      newDOMNode.placeholder = placeholder;
    }
    parentNode.append(newDOMNode);
  };
  createDOMNode();

  return {
    name, nodeType, parent, text, inputType, value, class1, class2, taskID,
  };
};

const buildInterface = () => {
  for (let i = 0; i < displayObjects.length; i++) {
    const element = displayObjects[i];
    componentFactory(element);
  }
  //console.log('displayObjects is', displayObjects);
  //console.log(Object.keys(displayObjects));
  addListeners();
}

const getInput = () => {
  const value = document.querySelector('.location-input').value;
  console.log('value is', value);
  processInput(value);
}

const addListeners = () => {
  document.querySelector('.location-submit').addEventListener('click', getInput);
}

export { buildInterface }