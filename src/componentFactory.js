const componentFactory = (element) => {
  const {
    name,
    nodeType,
    parent,
    text,
    inputType,
    value,
    class1,
    class2,
    taskID,
    placeholder,
    dataAttr,
    id,
    shortcode,
    preferred,
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
    if (text) {
      newDOMNode.textContent = text;
    }
    if (dataAttr) {
      newDOMNode.setAttribute('data-region-id', 'USA');
    }
    if (shortcode) {
      newDOMNode.setAttribute('data-value', 'shortcode');
    }
    if (id) {
      newDOMNode.id = id;
    }
    if (preferred) {
      newDOMNode.setAttribute('data-preferred', preferred);
      newDOMNode.setAttribute('data-preferred-delim', '-----');
    }
    parentNode.append(newDOMNode);
    
  };
  createDOMNode();

  return {
    name,
    nodeType,
    parent,
    text,
    inputType,
    value,
    class1,
    class2,
    taskID,
  };
};

export { componentFactory };
