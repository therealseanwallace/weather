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
    class1: 'input-container',
  },
  {
    name: 'title',
    nodeType: 'h1',
    parent: '.input-container',
    class1: 'title',
    text: 'Weather',
  },
  {
    name: 'input',
    nodeType: 'input',
    parent: '.input-container',
    class1: 'location-input',
    inputType: 'text',
    value: '',
    placeholder: 'Please enter a town or city',
  },
  {
    name: 'submit',
    nodeType: 'input',
    parent: '.input-container',
    class1: 'location-submit',
    value: 'Submit',
    inputType: 'button',
  }
]

const cardObjects = {
  card: {
    nodeType: 'div',
    parent: '.content',
    class1: 'weather-card',
  },
  summary: {
    nodeType: 'div',
    parent: '.weather-card',
    class1: 'summary',
  },
  details: {
    nodeType: 'div',
    parent: '.weather-card',
    class1: 'details',
  },
  location: {
    nodeType: 'p',
    parent: '.summary',
    class1: 'location',
  },
  tempContainer: {
    nodeType: 'div',
  },
  temp: {
    nodeType: 'p',
    parent: '.temp-container',
    class1: 'temp',
  },
  tempUnits: {
    nodeType: 'p',
    class1: 'temp-unit'
  },
  description: {
    nodeType: 'p',
    parent: '.summary',
    class1: 'description',
  },
  humidity: {
    nodeType: 'p',
    parent: '.humidity-container',
    class1: 'humidity',
  },
  humidityTitle: {
    nodeType: 'p',
    parent: '.humidity-container',
    class1: 'humidity-title',
    text: 'Humidity (%)',
  },
  high: {
    nodeType: 'p',
    parent: '.high-temp-container',
    class1: 'high',
  },
  highTitle: {
    nodeType: 'p',
    parent: '.high-container',
    class1: 'high-title',
    text: 'High',
  },
  low: {
    nodeType: 'p',
    parent: '.low-temp-container',
    class1: 'low',
  },
  lowTitle: {
    nodeType: 'p',
    parent: '.low-container',
    class1: 'low-title',
    text: 'Low',
  },
  feelsLike: {
    nodeType: 'p',
    parent: '.feels-temp-container',
    class1: 'feelsLike',
  },
  feelsLikeTitle: {
    nodeType: 'p',
    parent: '.feels-container',
    class1: 'feels-title',
    text: 'Feels like',
  },
  clouds: {
    nodeType: 'p',
    parent: '.clouds-container',
    class1: 'clouds',
  },
  cloudsTitle: {
    nodeType: 'p',
    parent: '.clouds-container',
    class1: 'clouds-title',
    text: 'Cloud cover (%)',
  },
  pressure: {
    nodeType: 'p',
    parent: '.pressure-container',
    class1: 'pressure',
  },
  pressureTitle: {
    nodeType: 'p',
    parent: '.pressure-container',
    class1: 'pressure-title',
    text: 'Pressure (mbar)',
  },
  sunrise: {
    nodeType: 'p',
    parent: '.sunrise-container',
    class1: 'sunrise',
  },
  sunriseTitle: {
    nodeType: 'p',
    parent: '.sunrise-container',
    class1: 'sunrise-title',
    text: 'Sunrise today',
  },
  sunset: {
    nodeType: 'p',
    parent: '.sunset-container',
    class1: 'sunset',
  },
  sunsetTitle: {
    nodeType: 'p',
    parent: '.sunset-container',
    class1: 'sunset-title',
    text: 'Sunset today',
  },
  vis: {
    nodeType: 'p',
    parent: '.vis-container',
    class1: 'vis',
  },
  visTitle: {
    nodeType: 'p',
    parent: '.vis-container',
    class1: 'vis-title',
    text: 'Visibility (m)',
  },
  detailContainer: {
    nodeType: 'div',
    parent: '.details',
    class1: 'detail-container',
  },
  detailTitle: {
    nodeType: 'div',
  },
  tempUnitContainer: {
    nodeType: 'div',
  },
}

export { displayObjects, cardObjects }