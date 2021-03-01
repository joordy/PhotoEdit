// Variable to check if search button is clicked
let clicked = false

// Variable to check if search button is clicked
export default clicked

// Updatable click variable
export function setVariable(newValue) {
  clicked = newValue
}

// Return click variable
export function getVariable() {
  return clicked
}

// Render searched query on page
export const getQuery = (writtenQuery) => {
  let searchText = document.querySelector('.searchQuery')
  searchText.innerHTML = ''

  let textText = document.createTextNode(writtenQuery)
  searchText.appendChild(textText)
}

// Deletes previous searched images
export const deleteResults = () => {
  const element = document.querySelector('#imageWrapper')

  if (element.hasChildNodes()) {
    let allElements = Array.from(element.childNodes)
    element.removeChild(element.childNodes[0])
    allElements.forEach((item) => {
      item.remove()
    })
  }
}

// All filter options, for CSS
export const filterElements = [
  {
    type: 'range',
    min: 0,
    max: 100,
    value: 0,
    step: 1,
    filter: 'blur',
    scale: 'px',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 200,
    value: 100,
    step: 1,
    filter: 'brightness',
    scale: '%',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 200,
    value: 100,
    step: 1,
    filter: 'contrast',
    scale: '%',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 100,
    value: 0,
    step: 1,
    filter: 'grayscale',
    scale: '%',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 360,
    value: 0,
    step: 1,
    filter: 'hue-rotate',
    scale: 'deg',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 100,
    value: 0,
    step: 1,
    filter: 'invert',
    scale: '%',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 100,
    value: 100,
    step: 1,
    filter: 'opacity',
    scale: '%',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 1,
    max: 100,
    value: 1,
    step: 1,
    filter: 'saturate',
    scale: '',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 100,
    value: 0,
    step: 1,
    filter: 'sepia',
    scale: '%',
    id: 'applyFilter',
  },
]
