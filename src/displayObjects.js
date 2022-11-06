const displayObjects = [
  {
    name: 'main',
    nodeType: 'main',
    parent: 'body',
  },
  {
    name: 'contentContainer',
    nodeType: 'div',
    parent: 'main',
    class1: 'content',
  },
  {
    name: 'centralContainer',
    nodeType: 'div',
    parent: '.content',
    class1: 'cent-container',
  },
  {
    name: 'title',
    nodeType: 'h1',
    parent: '.cent-container',
    class1: 'title',
    text: 'Weather',
  },
  {
    name: 'input',
    nodeType: 'input',
    parent: '.cent-container',
    class1: 'location-input',
    inputType: 'text',
    value: '',
    placeholder: 'Please enter a town or city',
  },
  {
    name: 'submit',
    nodeType: 'input',
    parent: '.cent-container',
    class1: 'location-submit',
    value: 'Submit',
    inputType: 'button',
  }
]

export { displayObjects }