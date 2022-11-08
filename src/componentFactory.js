const componentFactory = (element) => {
  //console.log('componentFactory active! element is', element);
  const {
    name, nodeType, parent, text, inputType, value, class1,
    class2, taskID, placeholder,
  } = element;
  console.log('componentFactory active! element is', element);
  const createDOMNode = () => {
    console.log('parent is', parent);
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
    if (text) {
      newDOMNode.textContent = text;
    }
    parentNode.append(newDOMNode);
  };
  createDOMNode();

  return {
    name, nodeType, parent, text, inputType, value, class1, class2, taskID,
  };
};

export { componentFactory }